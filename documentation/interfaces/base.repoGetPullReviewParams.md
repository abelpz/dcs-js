[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetPullReviewParams

# Interface: repoGetPullReviewParams

[base](../modules/base.md).repoGetPullReviewParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetPullReviewParams`**

## Table of contents

### Properties

- [auth](base.repoGetPullReviewParams.md#auth)
- [id](base.repoGetPullReviewParams.md#id)
- [index](base.repoGetPullReviewParams.md#index)
- [options](base.repoGetPullReviewParams.md#options)
- [owner](base.repoGetPullReviewParams.md#owner)
- [repo](base.repoGetPullReviewParams.md#repo)

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

base/repository/repo-get-pull-review.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-get-pull-review.ts:11

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

base/repository/repo-get-pull-review.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-pull-review.ts:9
