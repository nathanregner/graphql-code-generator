/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  'mutation CreateReviewForEpisode($episode: Episode!, $review: ReviewInput!) {\n  createReview(episode: $episode, review: $review) {\n    stars\n    commentary\n  }\n}':
    types.CreateReviewForEpisodeDocument,
  'query ExcludeQueryAlpha($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}':
    types.ExcludeQueryAlphaDocument,
  'query ExcludeQueryBeta($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}':
    types.ExcludeQueryBetaDocument,
  'query HeroAndFriendsNames($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    friends {\n      name\n    }\n  }\n}':
    types.HeroAndFriendsNamesDocument,
  'query HeroAppearsIn {\n  hero {\n    name\n    appearsIn\n  }\n}': types.HeroAppearsInDocument,
  'query HeroDetails($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    ... on Human {\n      height\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}':
    types.HeroDetailsDocument,
  'fragment HeroDetails on Character {\n  name\n  ... on Human {\n    height\n  }\n  ... on Droid {\n    primaryFunction\n  }\n}':
    types.HeroDetailsFragmentDoc,
  'query HeroDetailsWithFragment($episode: Episode) {\n  hero(episode: $episode) {\n    ...HeroDetails\n  }\n}':
    types.HeroDetailsWithFragmentDocument,
  'query HeroName($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}': types.HeroNameDocument,
  'query HeroNameConditionalInclusion($episode: Episode, $includeName: Boolean!) {\n  hero(episode: $episode) {\n    name @include(if: $includeName)\n  }\n}\n\nquery HeroNameConditionalExclusion($episode: Episode, $skipName: Boolean!) {\n  hero(episode: $episode) {\n    name @skip(if: $skipName)\n  }\n}':
    types.HeroNameConditionalInclusionDocument,
  'query HeroParentTypeDependentField($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    ... on Human {\n      friends {\n        name\n        ... on Human {\n          height(unit: FOOT)\n        }\n      }\n    }\n    ... on Droid {\n      friends {\n        name\n        ... on Human {\n          height(unit: METER)\n        }\n      }\n    }\n  }\n}':
    types.HeroParentTypeDependentFieldDocument,
  'query HeroTypeDependentAliasedField($episode: Episode) {\n  hero(episode: $episode) {\n    ... on Human {\n      property: homePlanet\n    }\n    ... on Droid {\n      property: primaryFunction\n    }\n  }\n}':
    types.HeroTypeDependentAliasedFieldDocument,
  'fragment HumanFields on Human {\n  name\n  mass\n}': types.HumanFieldsFragmentDoc,
  'query HumanWithNullHeight {\n  human(id: 1004) {\n    ...HumanFields\n  }\n}': types.HumanWithNullHeightDocument,
  'query TwoHeroes {\n  r2: hero {\n    name\n  }\n  luke: hero(episode: EMPIRE) {\n    name\n  }\n}':
    types.TwoHeroesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateReviewForEpisode($episode: Episode!, $review: ReviewInput!) {\n  createReview(episode: $episode, review: $review) {\n    stars\n    commentary\n  }\n}'
): (typeof documents)['mutation CreateReviewForEpisode($episode: Episode!, $review: ReviewInput!) {\n  createReview(episode: $episode, review: $review) {\n    stars\n    commentary\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ExcludeQueryAlpha($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}'
): (typeof documents)['query ExcludeQueryAlpha($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ExcludeQueryBeta($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}'
): (typeof documents)['query ExcludeQueryBeta($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroAndFriendsNames($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    friends {\n      name\n    }\n  }\n}'
): (typeof documents)['query HeroAndFriendsNames($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    friends {\n      name\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroAppearsIn {\n  hero {\n    name\n    appearsIn\n  }\n}'
): (typeof documents)['query HeroAppearsIn {\n  hero {\n    name\n    appearsIn\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroDetails($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    ... on Human {\n      height\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}'
): (typeof documents)['query HeroDetails($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    ... on Human {\n      height\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment HeroDetails on Character {\n  name\n  ... on Human {\n    height\n  }\n  ... on Droid {\n    primaryFunction\n  }\n}'
): (typeof documents)['fragment HeroDetails on Character {\n  name\n  ... on Human {\n    height\n  }\n  ... on Droid {\n    primaryFunction\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroDetailsWithFragment($episode: Episode) {\n  hero(episode: $episode) {\n    ...HeroDetails\n  }\n}'
): (typeof documents)['query HeroDetailsWithFragment($episode: Episode) {\n  hero(episode: $episode) {\n    ...HeroDetails\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroName($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}'
): (typeof documents)['query HeroName($episode: Episode) {\n  hero(episode: $episode) {\n    name\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroNameConditionalInclusion($episode: Episode, $includeName: Boolean!) {\n  hero(episode: $episode) {\n    name @include(if: $includeName)\n  }\n}\n\nquery HeroNameConditionalExclusion($episode: Episode, $skipName: Boolean!) {\n  hero(episode: $episode) {\n    name @skip(if: $skipName)\n  }\n}'
): (typeof documents)['query HeroNameConditionalInclusion($episode: Episode, $includeName: Boolean!) {\n  hero(episode: $episode) {\n    name @include(if: $includeName)\n  }\n}\n\nquery HeroNameConditionalExclusion($episode: Episode, $skipName: Boolean!) {\n  hero(episode: $episode) {\n    name @skip(if: $skipName)\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroParentTypeDependentField($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    ... on Human {\n      friends {\n        name\n        ... on Human {\n          height(unit: FOOT)\n        }\n      }\n    }\n    ... on Droid {\n      friends {\n        name\n        ... on Human {\n          height(unit: METER)\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query HeroParentTypeDependentField($episode: Episode) {\n  hero(episode: $episode) {\n    name\n    ... on Human {\n      friends {\n        name\n        ... on Human {\n          height(unit: FOOT)\n        }\n      }\n    }\n    ... on Droid {\n      friends {\n        name\n        ... on Human {\n          height(unit: METER)\n        }\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HeroTypeDependentAliasedField($episode: Episode) {\n  hero(episode: $episode) {\n    ... on Human {\n      property: homePlanet\n    }\n    ... on Droid {\n      property: primaryFunction\n    }\n  }\n}'
): (typeof documents)['query HeroTypeDependentAliasedField($episode: Episode) {\n  hero(episode: $episode) {\n    ... on Human {\n      property: homePlanet\n    }\n    ... on Droid {\n      property: primaryFunction\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment HumanFields on Human {\n  name\n  mass\n}'
): (typeof documents)['fragment HumanFields on Human {\n  name\n  mass\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query HumanWithNullHeight {\n  human(id: 1004) {\n    ...HumanFields\n  }\n}'
): (typeof documents)['query HumanWithNullHeight {\n  human(id: 1004) {\n    ...HumanFields\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query TwoHeroes {\n  r2: hero {\n    name\n  }\n  luke: hero(episode: EMPIRE) {\n    name\n  }\n}'
): (typeof documents)['query TwoHeroes {\n  r2: hero {\n    name\n  }\n  luke: hero(episode: EMPIRE) {\n    name\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
