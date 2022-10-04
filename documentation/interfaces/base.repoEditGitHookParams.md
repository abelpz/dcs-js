[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditGitHookParams

# Interface: repoEditGitHookParams

[base](../modules/base.md).repoEditGitHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditGitHookParams`**

## Table of contents

### Properties

- [auth](base.repoEditGitHookParams.md#auth)
- [body](base.repoEditGitHookParams.md#body)
- [id](base.repoEditGitHookParams.md#id)
- [options](base.repoEditGitHookParams.md#options)
- [owner](base.repoEditGitHookParams.md#owner)
- [repo](base.repoEditGitHookParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditGitHookOption`](base.EditGitHookOption.md)

#### Defined in

base/repository/repo-edit-git-hook.ts:13

___

### <a id="id" name="id"></a> id

• **id**: `string`

id of the hook to get

#### Defined in

base/repository/repo-edit-git-hook.ts:12

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

base/repository/repo-edit-git-hook.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-edit-git-hook.ts:10
