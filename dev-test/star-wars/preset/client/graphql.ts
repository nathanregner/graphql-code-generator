/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** The input object sent when passing a color */
export type ColorInput = {
  blue: Scalars['Int']['input'];
  green: Scalars['Int']['input'];
  red: Scalars['Int']['input'];
};

/** The episodes in the Star Wars trilogy */
export enum Episode {
  /** Star Wars Episode V: The Empire Strikes Back, released in 1980. */
  Empire = 'EMPIRE',
  /** Star Wars Episode VI: Return of the Jedi, released in 1983. */
  Jedi = 'JEDI',
  /** Star Wars Episode IV: A New Hope, released in 1977. */
  Newhope = 'NEWHOPE',
}

/** The input object sent when someone is creating a new review */
export type ReviewInput = {
  /** Comment about the movie, optional */
  commentary?: InputMaybe<Scalars['String']['input']>;
  /** Favorite color, optional */
  favoriteColor?: InputMaybe<ColorInput>;
  /** 0-5 stars */
  stars: Scalars['Int']['input'];
};

export type CreateReviewForEpisodeMutationVariables = Exact<{
  episode: Episode;
  review: ReviewInput;
}>;

export type CreateReviewForEpisodeMutation = {
  __typename?: 'Mutation';
  createReview?: { __typename?: 'Review'; stars: number; commentary?: string | null } | null;
};

export type ExcludeQueryAlphaQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type ExcludeQueryAlphaQuery = {
  __typename?: 'Query';
  hero?: { __typename?: 'Droid'; name: string } | { __typename?: 'Human'; name: string } | null;
};

export type ExcludeQueryBetaQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type ExcludeQueryBetaQuery = {
  __typename?: 'Query';
  hero?: { __typename?: 'Droid'; name: string } | { __typename?: 'Human'; name: string } | null;
};

export type HeroAndFriendsNamesQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type HeroAndFriendsNamesQuery = {
  __typename?: 'Query';
  hero?:
    | {
        __typename?: 'Droid';
        name: string;
        friends?: Array<{ __typename?: 'Droid'; name: string } | { __typename?: 'Human'; name: string } | null> | null;
      }
    | {
        __typename?: 'Human';
        name: string;
        friends?: Array<{ __typename?: 'Droid'; name: string } | { __typename?: 'Human'; name: string } | null> | null;
      }
    | null;
};

export type HeroAppearsInQueryVariables = Exact<{ [key: string]: never }>;

export type HeroAppearsInQuery = {
  __typename?: 'Query';
  hero?:
    | { __typename?: 'Droid'; name: string; appearsIn: Array<Episode | null> }
    | { __typename?: 'Human'; name: string; appearsIn: Array<Episode | null> }
    | null;
};

export type HeroDetailsQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type HeroDetailsQuery = {
  __typename?: 'Query';
  hero?:
    | { __typename?: 'Droid'; primaryFunction?: string | null; name: string }
    | { __typename?: 'Human'; height?: number | null; name: string }
    | null;
};

type HeroDetails_Droid_Fragment = { __typename?: 'Droid'; primaryFunction?: string | null; name: string } & {
  ' $fragmentName'?: 'HeroDetails_Droid_Fragment';
};

type HeroDetails_Human_Fragment = { __typename?: 'Human'; height?: number | null; name: string } & {
  ' $fragmentName'?: 'HeroDetails_Human_Fragment';
};

export type HeroDetailsFragment = HeroDetails_Droid_Fragment | HeroDetails_Human_Fragment;

export type HeroDetailsWithFragmentQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type HeroDetailsWithFragmentQuery = {
  __typename?: 'Query';
  hero?:
    | ({ __typename?: 'Droid' } & { ' $fragmentRefs'?: { HeroDetails_Droid_Fragment: HeroDetails_Droid_Fragment } })
    | ({ __typename?: 'Human' } & { ' $fragmentRefs'?: { HeroDetails_Human_Fragment: HeroDetails_Human_Fragment } })
    | null;
};

export type HeroNameQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type HeroNameQuery = {
  __typename?: 'Query';
  hero?: { __typename?: 'Droid'; name: string } | { __typename?: 'Human'; name: string } | null;
};

export type HeroNameConditionalInclusionQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
  includeName: Scalars['Boolean']['input'];
}>;

export type HeroNameConditionalInclusionQuery = {
  __typename?: 'Query';
  hero?: { __typename?: 'Droid'; name?: string } | { __typename?: 'Human'; name?: string } | null;
};

export type HeroNameConditionalExclusionQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
  skipName: Scalars['Boolean']['input'];
}>;

export type HeroNameConditionalExclusionQuery = {
  __typename?: 'Query';
  hero?: { __typename?: 'Droid'; name?: string } | { __typename?: 'Human'; name?: string } | null;
};

export type HeroParentTypeDependentFieldQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type HeroParentTypeDependentFieldQuery = {
  __typename?: 'Query';
  hero?:
    | {
        __typename?: 'Droid';
        name: string;
        friends?: Array<
          { __typename?: 'Droid'; name: string } | { __typename?: 'Human'; height?: number | null; name: string } | null
        > | null;
      }
    | {
        __typename?: 'Human';
        name: string;
        friends?: Array<
          { __typename?: 'Droid'; name: string } | { __typename?: 'Human'; height?: number | null; name: string } | null
        > | null;
      }
    | null;
};

export type HeroTypeDependentAliasedFieldQueryVariables = Exact<{
  episode?: InputMaybe<Episode>;
}>;

export type HeroTypeDependentAliasedFieldQuery = {
  __typename?: 'Query';
  hero?: { __typename?: 'Droid'; property?: string | null } | { __typename?: 'Human'; property?: string | null } | null;
};

export type HumanFieldsFragment = { __typename?: 'Human'; name: string; mass?: number | null } & {
  ' $fragmentName'?: 'HumanFieldsFragment';
};

export type HumanWithNullHeightQueryVariables = Exact<{ [key: string]: never }>;

export type HumanWithNullHeightQuery = {
  __typename?: 'Query';
  human?: ({ __typename?: 'Human' } & { ' $fragmentRefs'?: { HumanFieldsFragment: HumanFieldsFragment } }) | null;
};

export type TwoHeroesQueryVariables = Exact<{ [key: string]: never }>;

export type TwoHeroesQuery = {
  __typename?: 'Query';
  r2?: { __typename?: 'Droid'; name: string } | { __typename?: 'Human'; name: string } | null;
  luke?: { __typename?: 'Droid'; name: string } | { __typename?: 'Human'; name: string } | null;
};

export const HeroDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HeroDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Character' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'InlineFragment',
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'height' } }],
            },
          },
          {
            kind: 'InlineFragment',
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Droid' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'primaryFunction' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroDetailsFragment, unknown>;
export const HumanFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HumanFields' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mass' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HumanFieldsFragment, unknown>;
export const CreateReviewForEpisodeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateReviewForEpisode' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'review' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ReviewInput' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'review' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'review' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'stars' } },
                { kind: 'Field', name: { kind: 'Name', value: 'commentary' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateReviewForEpisodeMutation, CreateReviewForEpisodeMutationVariables>;
export const ExcludeQueryAlphaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ExcludeQueryAlpha' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ExcludeQueryAlphaQuery, ExcludeQueryAlphaQueryVariables>;
export const ExcludeQueryBetaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ExcludeQueryBeta' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ExcludeQueryBetaQuery, ExcludeQueryBetaQueryVariables>;
export const HeroAndFriendsNamesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroAndFriendsNames' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'friends' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroAndFriendsNamesQuery, HeroAndFriendsNamesQueryVariables>;
export const HeroAppearsInDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroAppearsIn' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'appearsIn' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroAppearsInQuery, HeroAppearsInQueryVariables>;
export const HeroDetailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroDetails' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'height' } }],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Droid' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'primaryFunction' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroDetailsQuery, HeroDetailsQueryVariables>;
export const HeroDetailsWithFragmentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroDetailsWithFragment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'HeroDetails' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HeroDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Character' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          {
            kind: 'InlineFragment',
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'height' } }],
            },
          },
          {
            kind: 'InlineFragment',
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Droid' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'primaryFunction' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroDetailsWithFragmentQuery, HeroDetailsWithFragmentQueryVariables>;
export const HeroNameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroName' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroNameQuery, HeroNameQueryVariables>;
export const HeroNameConditionalInclusionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroNameConditionalInclusion' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'includeName' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'name' },
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: { kind: 'Variable', name: { kind: 'Name', value: 'includeName' } },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroNameConditionalInclusionQuery, HeroNameConditionalInclusionQueryVariables>;
export const HeroNameConditionalExclusionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroNameConditionalExclusion' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skipName' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'name' },
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'skip' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: { kind: 'Variable', name: { kind: 'Name', value: 'skipName' } },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroNameConditionalExclusionQuery, HeroNameConditionalExclusionQueryVariables>;
export const HeroParentTypeDependentFieldDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroParentTypeDependentField' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'friends' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'height' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'unit' },
                                        value: { kind: 'EnumValue', value: 'FOOT' },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Droid' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'friends' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'height' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'unit' },
                                        value: { kind: 'EnumValue', value: 'METER' },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroParentTypeDependentFieldQuery, HeroParentTypeDependentFieldQueryVariables>;
export const HeroTypeDependentAliasedFieldDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HeroTypeDependentAliasedField' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Episode' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'episode' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'property' },
                        name: { kind: 'Name', value: 'homePlanet' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Droid' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'property' },
                        name: { kind: 'Name', value: 'primaryFunction' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroTypeDependentAliasedFieldQuery, HeroTypeDependentAliasedFieldQueryVariables>;
export const HumanWithNullHeightDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HumanWithNullHeight' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'human' },
            arguments: [
              { kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'IntValue', value: '1004' } },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'HumanFields' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HumanFields' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Human' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mass' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HumanWithNullHeightQuery, HumanWithNullHeightQueryVariables>;
export const TwoHeroesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TwoHeroes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'r2' },
            name: { kind: 'Name', value: 'hero' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'luke' },
            name: { kind: 'Name', value: 'hero' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'episode' },
                value: { kind: 'EnumValue', value: 'EMPIRE' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TwoHeroesQuery, TwoHeroesQueryVariables>;
