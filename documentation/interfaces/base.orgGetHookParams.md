[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgGetHookParams

# Interface: orgGetHookParams

[base](../modules/base.md).orgGetHookParams

## Hierarchy

- `baseParams`

  ↳ **`orgGetHookParams`**

## Table of contents

### Properties

- [auth](base.orgGetHookParams.md#auth)
- [id](base.orgGetHookParams.md#id)
- [options](base.orgGetHookParams.md#options)
- [org](base.orgGetHookParams.md#org)

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

base/organization/org-get-hook.ts:8

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

base/organization/org-get-hook.ts:6
