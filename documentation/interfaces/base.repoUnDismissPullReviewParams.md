[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoUnDismissPullReviewParams

# Interface: repoUnDismissPullReviewParams

[base](../modules/base.md).repoUnDismissPullReviewParams

## Hierarchy

- `baseParams`

  ↳ **`repoUnDismissPullReviewParams`**

## Table of contents

### Properties

- [auth](base.repoUnDismissPullReviewParams.md#auth)
- [id](base.repoUnDismissPullReviewParams.md#id)
- [index](base.repoUnDismissPullReviewParams.md#index)
- [options](base.repoUnDismissPullReviewParams.md#options)
- [owner](base.repoUnDismissPullReviewParams.md#owner)
- [repo](base.repoUnDismissPullReviewParams.md#repo)

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

base/repository/repo-un-dismiss-pull-review.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-un-dismiss-pull-review.ts:12

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

base/repository/repo-un-dismiss-pull-review.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-un-dismiss-pull-review.ts:10
