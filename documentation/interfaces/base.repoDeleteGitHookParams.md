[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteGitHookParams

# Interface: repoDeleteGitHookParams

[base](../modules/base.md).repoDeleteGitHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteGitHookParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteGitHookParams.md#auth)
- [id](base.repoDeleteGitHookParams.md#id)
- [options](base.repoDeleteGitHookParams.md#options)
- [owner](base.repoDeleteGitHookParams.md#owner)
- [repo](base.repoDeleteGitHookParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `string`

id of the hook to get

#### Defined in

base/repository/repo-delete-git-hook.ts:11

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

base/repository/repo-delete-git-hook.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-git-hook.ts:9
