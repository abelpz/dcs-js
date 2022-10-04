[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetHookParams

# Interface: repoGetHookParams

[base](../modules/base.md).repoGetHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetHookParams`**

## Table of contents

### Properties

- [auth](base.repoGetHookParams.md#auth)
- [id](base.repoGetHookParams.md#id)
- [options](base.repoGetHookParams.md#options)
- [owner](base.repoGetHookParams.md#owner)
- [repo](base.repoGetHookParams.md#repo)

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

id of the hook to get

#### Defined in

base/repository/repo-get-hook.ts:11

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

base/repository/repo-get-hook.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-hook.ts:9
