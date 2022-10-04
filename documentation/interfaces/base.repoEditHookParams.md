[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditHookParams

# Interface: repoEditHookParams

[base](../modules/base.md).repoEditHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditHookParams`**

## Table of contents

### Properties

- [auth](base.repoEditHookParams.md#auth)
- [body](base.repoEditHookParams.md#body)
- [id](base.repoEditHookParams.md#id)
- [options](base.repoEditHookParams.md#options)
- [owner](base.repoEditHookParams.md#owner)
- [repo](base.repoEditHookParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditHookOption`](base.EditHookOption.md)

#### Defined in

base/repository/repo-edit-hook.ts:12

___

### <a id="id" name="id"></a> id

• **id**: `number`

index of the hook

#### Defined in

base/repository/repo-edit-hook.ts:11

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

base/repository/repo-edit-hook.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-edit-hook.ts:9
