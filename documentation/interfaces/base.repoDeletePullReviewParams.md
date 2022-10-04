[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeletePullReviewParams

# Interface: repoDeletePullReviewParams

[base](../modules/base.md).repoDeletePullReviewParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeletePullReviewParams`**

## Table of contents

### Properties

- [auth](base.repoDeletePullReviewParams.md#auth)
- [id](base.repoDeletePullReviewParams.md#id)
- [index](base.repoDeletePullReviewParams.md#index)
- [options](base.repoDeletePullReviewParams.md#options)
- [owner](base.repoDeletePullReviewParams.md#owner)
- [repo](base.repoDeletePullReviewParams.md#repo)

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

base/repository/repo-delete-pull-review.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-delete-pull-review.ts:12

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

base/repository/repo-delete-pull-review.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-pull-review.ts:10
