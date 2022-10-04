[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateHookParams

# Interface: repoCreateHookParams

[base](../modules/base.md).repoCreateHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateHookParams`**

## Table of contents

### Properties

- [auth](base.repoCreateHookParams.md#auth)
- [body](base.repoCreateHookParams.md#body)
- [options](base.repoCreateHookParams.md#options)
- [owner](base.repoCreateHookParams.md#owner)
- [repo](base.repoCreateHookParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateHookOption`](base.CreateHookOption.md)

#### Defined in

base/repository/repo-create-hook.ts:10

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

base/repository/repo-create-hook.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-hook.ts:9
