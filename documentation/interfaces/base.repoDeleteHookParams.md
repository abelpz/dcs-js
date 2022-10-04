[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteHookParams

# Interface: repoDeleteHookParams

[base](../modules/base.md).repoDeleteHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteHookParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteHookParams.md#auth)
- [id](base.repoDeleteHookParams.md#id)
- [options](base.repoDeleteHookParams.md#options)
- [owner](base.repoDeleteHookParams.md#owner)
- [repo](base.repoDeleteHookParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the hook to delete

#### Defined in

base/repository/repo-delete-hook.ts:11

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

base/repository/repo-delete-hook.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-hook.ts:9
