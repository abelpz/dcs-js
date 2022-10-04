[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreatePullRequestParams

# Interface: repoCreatePullRequestParams

[base](../modules/base.md).repoCreatePullRequestParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreatePullRequestParams`**

## Table of contents

### Properties

- [auth](base.repoCreatePullRequestParams.md#auth)
- [body](base.repoCreatePullRequestParams.md#body)
- [options](base.repoCreatePullRequestParams.md#options)
- [owner](base.repoCreatePullRequestParams.md#owner)
- [repo](base.repoCreatePullRequestParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreatePullRequestOption`](base.CreatePullRequestOption.md)

#### Defined in

base/repository/repo-create-pull-request.ts:12

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

base/repository/repo-create-pull-request.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-pull-request.ts:11
