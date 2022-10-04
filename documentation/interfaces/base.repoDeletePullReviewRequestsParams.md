[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeletePullReviewRequestsParams

# Interface: repoDeletePullReviewRequestsParams

[base](../modules/base.md).repoDeletePullReviewRequestsParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeletePullReviewRequestsParams`**

## Table of contents

### Properties

- [auth](base.repoDeletePullReviewRequestsParams.md#auth)
- [body](base.repoDeletePullReviewRequestsParams.md#body)
- [index](base.repoDeletePullReviewRequestsParams.md#index)
- [options](base.repoDeletePullReviewRequestsParams.md#options)
- [owner](base.repoDeletePullReviewRequestsParams.md#owner)
- [repo](base.repoDeletePullReviewRequestsParams.md#repo)

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

base/repository/repo-delete-pull-review-requests.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request

#### Defined in

base/repository/repo-delete-pull-review-requests.ts:13

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

base/repository/repo-delete-pull-review-requests.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-pull-review-requests.ts:11
