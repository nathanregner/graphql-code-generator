import { getBaseType, oldVisit, PluginFunction, Types } from '@graphql-codegen/plugin-helpers';
import { transformSchemaAST } from '@graphql-codegen/schema-ast';
import {
  buildASTSchema,
  DocumentNode,
  getNamedType,
  GraphQLNamedType,
  GraphQLSchema,
  isIntrospectionType,
  isObjectType,
  parse,
  printIntrospectionSchema,
  TypeInfo,
  visit,
  visitWithTypeInfo,
  GraphQLEnumType,
  GraphQLInputObjectType,
} from 'graphql';
import { TypeScriptPluginConfig } from './config.js';
import { TsIntrospectionVisitor } from './introspection-visitor.js';
import { TsVisitor } from './visitor.js';
import { getCachedDocumentNodeFromSchema } from '@graphql-codegen/plugin-helpers';
import { getBaseTypeNode } from '@graphql-codegen/visitor-plugin-common';

export * from './config.js';
export * from './introspection-visitor.js';
export * from './typescript-variables-to-object.js';
export * from './visitor.js';

export const plugin: PluginFunction<TypeScriptPluginConfig, Types.ComplexPluginOutput> = (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: TypeScriptPluginConfig
) => {
  const { schema: _schema, ast } = transformSchemaAST(schema, config);

  let onlyInputTypes = undefined;
  if (config.onlyOperationTypes) {
    onlyInputTypes = getUsedInputTypeNames(schema, documents);
  }

  const visitor = new TsVisitor(_schema, config, { onlyInputTypes });

  const visitorResult = oldVisit(ast, { leave: visitor });
  const introspectionDefinitions = includeIntrospectionTypesDefinitions(_schema, documents, config);
  const scalars = visitor.scalarsDefinition;
  const directiveArgumentAndInputFieldMappings = visitor.directiveArgumentAndInputFieldMappingsDefinition;

  return {
    prepend: [
      ...visitor.getEnumsImports(),
      ...visitor.getDirectiveArgumentAndInputFieldMappingsImports(),
      ...visitor.getScalarsImports(),
      ...visitor.getWrapperDefinitions(),
    ].filter(Boolean),
    content: [
      scalars,
      directiveArgumentAndInputFieldMappings,
      ...visitorResult.definitions,
      ...introspectionDefinitions,
    ]
      .filter(Boolean)
      .join('\n'),
  };
};

export function includeIntrospectionTypesDefinitions(
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: TypeScriptPluginConfig
): string[] {
  const typeInfo = new TypeInfo(schema);
  const usedTypes: GraphQLNamedType[] = [];
  const documentsVisitor = visitWithTypeInfo(typeInfo, {
    Field(node) {
      const type = getNamedType(typeInfo.getType());

      if (type && isIntrospectionType(type) && !usedTypes.includes(type)) {
        usedTypes.push(type);
      }
    },
  });

  for (const doc of documents) {
    visit(doc.document, documentsVisitor);
  }

  const typesToInclude: GraphQLNamedType[] = [];

  for (const type of usedTypes) {
    collectTypes(type);
  }

  const visitor = new TsIntrospectionVisitor(schema, config, typesToInclude);
  const result: DocumentNode = oldVisit(parse(printIntrospectionSchema(schema)), { leave: visitor });

  // recursively go through each `usedTypes` and their children and collect all used types
  // we don't care about Interfaces, Unions and others, but Objects and Enums
  function collectTypes(type: GraphQLNamedType): void {
    if (typesToInclude.includes(type)) {
      return;
    }

    typesToInclude.push(type);

    if (isObjectType(type)) {
      const fields = type.getFields();

      for (const key of Object.keys(fields)) {
        const field = fields[key];
        const type = getNamedType(field.type);
        collectTypes(type);
      }
    }
  }

  return result.definitions as any[];
}

export function getUsedInputTypeNames(schema: GraphQLSchema, documents: Types.DocumentFile[]): Set<string> {
  if (!schema.astNode) {
    const ast = getCachedDocumentNodeFromSchema(schema);
    schema = buildASTSchema(ast);
  }

  const typeInfo = new TypeInfo(schema);

  const visited = new Set<string>();
  const queue: GraphQLNamedType[] = [];

  function enqueue(type: GraphQLNamedType) {
    if (
      type.astNode && // skip scalars
      !visited.has(type.name)
    ) {
      visited.add(type.name);
      queue.push(type);
    }
  }

  const visitor = visitWithTypeInfo(typeInfo, {
    VariableDefinition() {
      const field = typeInfo.getInputType();
      const type = getBaseType(field);
      enqueue(type);
    },
    Field() {
      const field = typeInfo.getFieldDef();
      const type = getBaseType(field.type);
      if (type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType) {
        enqueue(type);
      }
    },
    InputObjectTypeDefinition(node) {
      for (const field of node.fields ?? []) {
        const baseType = getBaseTypeNode(field.type);
        const expanded = schema.getType(baseType.name.value);
        if (expanded.name) {
          enqueue(expanded);
        }
      }
    },
  });

  for (const doc of documents) {
    visit(doc.document, visitor);
  }

  const typeNames = new Set<string>();
  while (true) {
    const type = queue.pop();
    if (!type) break;
    typeNames.add(type.name);
    visit(type.astNode, visitor);
  }

  return typeNames;
}
