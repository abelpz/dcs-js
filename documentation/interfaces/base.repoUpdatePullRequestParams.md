[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoUpdatePullRequestParams

# Interface: repoUpdatePullRequestParams

[base](../modules/base.md).repoUpdatePullRequestParams

## Hierarchy

- `baseParams`

  ↳ **`repoUpdatePullRequestParams`**

## Table of contents

### Properties

- [auth](base.repoUpdatePullRequestParams.md#auth)
- [index](base.repoUpdatePullRequestParams.md#index)
- [options](base.repoUpdatePullRequestParams.md#options)
- [owner](base.repoUpdatePullRequestParams.md#owner)
- [repo](base.repoUpdatePullRequestParams.md#repo)
- [style](base.repoUpdatePullRequestParams.md#style)

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

base/repository/repo-update-pull-request.ts:14

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

base/repository/repo-update-pull-request.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-update-pull-request.ts:12

___

### <a id="style" name="style"></a> style

• `Optional` **style**: `string`

how to update pull request

#### Defined in

base/repository/repo-update-pull-request.ts:16
