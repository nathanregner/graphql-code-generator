import { getUsedInputTypeNames } from '@graphql-codegen/typescript';
import { buildASTSchema, validate } from 'graphql';
import gql from 'graphql-tag';

describe('getUsedInputTypes', () => {
  it('should expand top-level fragment on union type', () => {
    const schema = buildASTSchema(gql`
      union SearchResult = Author | Book

      type Author {
        name: String
      }

      type Book {
        title: String
        category: Category
      }

      enum Category {
        Fiction
        NonFiction
      }

      type Query {
        search: SearchResult
      }
    `);

    const document = gql`
      fragment SearchResult on SearchResult {
        ... on Author {
          name
        }
        ... on Book {
          title
          category
        }
      }

      query Search {
        search {
          ...SearchResult
        }
      }
    `;

    const errors = validate(schema, document);
    if (errors.length) throw errors;

    const result = getUsedInputTypeNames(schema, [{ location: 'test-file.ts', document }]);
    expect(result).toEqual(new Set(['Category']));
  });

  it('should expand interface types', () => {
    const schema = buildASTSchema(gql`
      interface Book {
        title: String!
        category: Category
      }

      enum Category {
        Fiction
        NonFiction
      }

      type Textbook implements Book {
        title: String!
        category: Category
        courses: [Course]
      }

      enum Course {
        Math
        Science
        History
      }

      type Query {
        search: [Book!]!
      }
    `);

    const document = gql`
      fragment SearchResult on Book {
        category
        ... on Textbook {
          courses
        }
      }

      query Search {
        search {
          ...SearchResult
        }
      }
    `;

    const errors = validate(schema, document);
    if (errors.length) throw errors;

    const result = getUsedInputTypeNames(schema, [{ location: 'test-file.ts', document }]);
    expect(result).toEqual(new Set(['Course', 'Category']));
  });
});

describe('SelectionSet expansion', () => {
  const schema = buildASTSchema(gql`
    interface Book {
      title: String!
      category: Category
    }

    type AudioBook implements Book {
      id: ID!
      title: String!
      category: Category
      duration: String
      format: AudioFormat!
    }

    input AudioBookInput {
      title: String
      duration: String
      category: Category
      format: AudioFormat!
      metadata: [MetadataInput!]!
    }

    enum AudioFormat {
      MP3
      FLAC
    }

    enum Category {
      Business
      History
      Philosophy
      ScienceFiction
    }

    type Textbook implements Book {
      title: String!
      category: Category
    }

    type Course {
      name: String
      department: Department!
      books: [Textbook!]!
    }

    enum Department {
      Math
      Science
      History
    }

    type Query {
      course(id: ID!): Course
    }

    type Mutation {
      createAudioBook(input: AudioBookInput!): AudioBook
    }

    input MetadataInput {
      type: MetadataType!
      value: String!
    }

    enum MetadataType {
      A
      B
      C
    }
  `);

  it('should expand top-level fragment', () => {
    const document = gql`
      fragment CourseBooks on Course {
        books {
          category
        }
      }

      query Course($id: ID!) {
        course(id: $id) {
          ...CourseBooks
        }
      }
    `;

    const errors = validate(schema, document);
    if (errors.length) throw errors;

    const result = getUsedInputTypeNames(schema, [{ location: 'test-file.ts', document }]);
    expect(result).toEqual(new Set(['Category']));
  });

  it('should expand inline fragments', () => {
    const document = gql`
      query Course($id: ID!) {
        course(id: $id) {
          department
          books {
            category
          }
        }
      }
    `;

    const errors = validate(schema, document);
    if (errors.length) throw errors;

    const result = getUsedInputTypeNames(schema, [{ location: 'test-file.ts', document }]);
    expect(result).toEqual(new Set(['Category', 'Department']));
  });

  it('should expand input types', () => {
    const document = gql`
      mutation CreateBook($input: AudioBookInput!) {
        createAudioBook(input: $input) {
          id
        }
      }
    `;

    const errors = validate(schema, document);
    if (errors.length) throw errors;

    const result = getUsedInputTypeNames(schema, [{ location: 'test-file.ts', document }]);
    expect(result).toEqual(new Set(['AudioBookInput', 'AudioFormat', 'Category', 'MetadataInput', 'MetadataType']));
  });
});
