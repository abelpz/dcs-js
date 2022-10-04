[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgEditParams

# Interface: orgEditParams

[base](../modules/base.md).orgEditParams

## Hierarchy

- `baseParams`

  ↳ **`orgEditParams`**

## Table of contents

### Properties

- [auth](base.orgEditParams.md#auth)
- [body](base.orgEditParams.md#body)
- [options](base.orgEditParams.md#options)
- [org](base.orgEditParams.md#org)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditOrgOption`](base.EditOrgOption.md)

#### Defined in

base/organization/org-edit.ts:8

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

name of the organization to edit

#### Defined in

base/organization/org-edit.ts:7
