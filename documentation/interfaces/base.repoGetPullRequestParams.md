[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetPullRequestParams

# Interface: repoGetPullRequestParams

[base](../modules/base.md).repoGetPullRequestParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetPullRequestParams`**

## Table of contents

### Properties

- [auth](base.repoGetPullRequestParams.md#auth)
- [index](base.repoGetPullRequestParams.md#index)
- [options](base.repoGetPullRequestParams.md#options)
- [owner](base.repoGetPullRequestParams.md#owner)
- [repo](base.repoGetPullRequestParams.md#repo)

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

index of the pull request to get

#### Defined in

base/repository/repo-get-pull-request.ts:11

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

base/repository/repo-get-pull-request.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-pull-request.ts:9
