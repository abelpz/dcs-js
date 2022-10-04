[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListPullReviewsParams

# Interface: repoListPullReviewsParams

[base](../modules/base.md).repoListPullReviewsParams

## Hierarchy

- `baseParams`

  ↳ **`repoListPullReviewsParams`**

## Table of contents

### Properties

- [auth](base.repoListPullReviewsParams.md#auth)
- [index](base.repoListPullReviewsParams.md#index)
- [limit](base.repoListPullReviewsParams.md#limit)
- [options](base.repoListPullReviewsParams.md#options)
- [owner](base.repoListPullReviewsParams.md#owner)
- [page](base.repoListPullReviewsParams.md#page)
- [repo](base.repoListPullReviewsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-list-pull-reviews.ts:11

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-list-pull-reviews.ts:15

___

### <a id="options" name="options"></a> options

• `Optional` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basePath?` | `string` |
| `headers?` | { `[key: string]`: `any`;  } |
| `query?` | { `[key: string]`: `any`;  } |

#### Inherited from

baseParams.options

#### Defined in

base/utils.ts:3

___

### <a id="owner" name="owner"></a> owner

• **owner**: `string`

owner of the repo

#### Defined in

base/repository/repo-list-pull-reviews.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-pull-reviews.ts:13

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-pull-reviews.ts:9
