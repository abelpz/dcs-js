[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgGetParams

# Interface: orgGetParams

[base](../modules/base.md).orgGetParams

## Hierarchy

- `baseParams`

  ↳ **`orgGetParams`**

## Table of contents

### Properties

- [auth](base.orgGetParams.md#auth)
- [options](base.orgGetParams.md#options)
- [org](base.orgGetParams.md#org)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

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

name of the organization to get

#### Defined in

base/organization/org-get.ts:6
