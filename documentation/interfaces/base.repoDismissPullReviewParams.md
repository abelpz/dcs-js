[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDismissPullReviewParams

# Interface: repoDismissPullReviewParams

[base](../modules/base.md).repoDismissPullReviewParams

## Hierarchy

- `baseParams`

  ↳ **`repoDismissPullReviewParams`**

## Table of contents

### Properties

- [auth](base.repoDismissPullReviewParams.md#auth)
- [body](base.repoDismissPullReviewParams.md#body)
- [id](base.repoDismissPullReviewParams.md#id)
- [index](base.repoDismissPullReviewParams.md#index)
- [options](base.repoDismissPullReviewParams.md#options)
- [owner](base.repoDismissPullReviewParams.md#owner)
- [repo](base.repoDismissPullReviewParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`DismissPullReviewOptions`](base.DismissPullReviewOptions.md)

#### Defined in

base/repository/repo-dismiss-pull-review.ts:16

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the review

#### Defined in

base/repository/repo-dismiss-pull-review.ts:15

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-dismiss-pull-review.ts:13

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

base/repository/repo-dismiss-pull-review.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-dismiss-pull-review.ts:11
