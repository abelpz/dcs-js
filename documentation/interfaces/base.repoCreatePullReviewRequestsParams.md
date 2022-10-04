[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreatePullReviewRequestsParams

# Interface: repoCreatePullReviewRequestsParams

[base](../modules/base.md).repoCreatePullReviewRequestsParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreatePullReviewRequestsParams`**

## Table of contents

### Properties

- [auth](base.repoCreatePullReviewRequestsParams.md#auth)
- [body](base.repoCreatePullReviewRequestsParams.md#body)
- [index](base.repoCreatePullReviewRequestsParams.md#index)
- [options](base.repoCreatePullReviewRequestsParams.md#options)
- [owner](base.repoCreatePullReviewRequestsParams.md#owner)
- [repo](base.repoCreatePullReviewRequestsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`PullReviewRequestOptions`](base.PullReviewRequestOptions.md)

#### Defined in

base/repository/repo-create-pull-review-requests.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-create-pull-review-requests.ts:13

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

base/repository/repo-create-pull-review-requests.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-pull-review-requests.ts:11
