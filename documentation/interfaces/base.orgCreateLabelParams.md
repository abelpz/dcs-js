[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgCreateLabelParams

# Interface: orgCreateLabelParams

[base](../modules/base.md).orgCreateLabelParams

## Hierarchy

- `baseParams`

  ↳ **`orgCreateLabelParams`**

## Table of contents

### Properties

- [auth](base.orgCreateLabelParams.md#auth)
- [body](base.orgCreateLabelParams.md#body)
- [options](base.orgCreateLabelParams.md#options)
- [org](base.orgCreateLabelParams.md#org)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateLabelOption`](base.CreateLabelOption.md)

#### Defined in

base/organization/org-create-label.ts:9

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

base/organization/org-create-label.ts:8
