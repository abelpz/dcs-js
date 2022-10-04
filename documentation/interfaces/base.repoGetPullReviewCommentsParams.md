[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetPullReviewCommentsParams

# Interface: repoGetPullReviewCommentsParams

[base](../modules/base.md).repoGetPullReviewCommentsParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetPullReviewCommentsParams`**

## Table of contents

### Properties

- [auth](base.repoGetPullReviewCommentsParams.md#auth)
- [id](base.repoGetPullReviewCommentsParams.md#id)
- [index](base.repoGetPullReviewCommentsParams.md#index)
- [options](base.repoGetPullReviewCommentsParams.md#options)
- [owner](base.repoGetPullReviewCommentsParams.md#owner)
- [repo](base.repoGetPullReviewCommentsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the review

#### Defined in

base/repository/repo-get-pull-review-comments.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-get-pull-review-comments.ts:11

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

base/repository/repo-get-pull-review-comments.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-pull-review-comments.ts:9
