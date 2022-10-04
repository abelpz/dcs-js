[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetGitHookParams

# Interface: repoGetGitHookParams

[base](../modules/base.md).repoGetGitHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetGitHookParams`**

## Table of contents

### Properties

- [auth](base.repoGetGitHookParams.md#auth)
- [id](base.repoGetGitHookParams.md#id)
- [options](base.repoGetGitHookParams.md#options)
- [owner](base.repoGetGitHookParams.md#owner)
- [repo](base.repoGetGitHookParams.md#repo)

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

base/repository/repo-get-git-hook.ts:11

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

base/repository/repo-get-git-hook.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-git-hook.ts:9
