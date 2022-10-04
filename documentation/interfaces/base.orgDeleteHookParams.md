[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgDeleteHookParams

# Interface: orgDeleteHookParams

[base](../modules/base.md).orgDeleteHookParams

## Hierarchy

- `baseParams`

  ↳ **`orgDeleteHookParams`**

## Table of contents

### Properties

- [auth](base.orgDeleteHookParams.md#auth)
- [id](base.orgDeleteHookParams.md#id)
- [options](base.orgDeleteHookParams.md#options)
- [org](base.orgDeleteHookParams.md#org)

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

base/organization/org-delete-hook.ts:8

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

### <a id="org" name="org"></a> org

• **org**: `string`

name of the organization

#### Defined in

base/organization/org-delete-hook.ts:6
