[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgCreateHookParams

# Interface: orgCreateHookParams

[base](../modules/base.md).orgCreateHookParams

## Hierarchy

- `baseParams`

  ↳ **`orgCreateHookParams`**

## Table of contents

### Properties

- [auth](base.orgCreateHookParams.md#auth)
- [body](base.orgCreateHookParams.md#body)
- [options](base.orgCreateHookParams.md#options)
- [org](base.orgCreateHookParams.md#org)

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

base/organization/org-create-hook.ts:8

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

base/organization/org-create-hook.ts:7
