[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoSubmitPullReviewParams

# Interface: repoSubmitPullReviewParams

[base](../modules/base.md).repoSubmitPullReviewParams

## Hierarchy

- `baseParams`

  ↳ **`repoSubmitPullReviewParams`**

## Table of contents

### Properties

- [auth](base.repoSubmitPullReviewParams.md#auth)
- [body](base.repoSubmitPullReviewParams.md#body)
- [id](base.repoSubmitPullReviewParams.md#id)
- [index](base.repoSubmitPullReviewParams.md#index)
- [options](base.repoSubmitPullReviewParams.md#options)
- [owner](base.repoSubmitPullReviewParams.md#owner)
- [repo](base.repoSubmitPullReviewParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`SubmitPullReviewOptions`](base.SubmitPullReviewOptions.md)

#### Defined in

base/repository/repo-submit-pull-review.ts:16

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the review

#### Defined in

base/repository/repo-submit-pull-review.ts:15

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-submit-pull-review.ts:13

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

base/repository/repo-submit-pull-review.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-submit-pull-review.ts:11
