[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgEditLabelParams

# Interface: orgEditLabelParams

[base](../modules/base.md).orgEditLabelParams

## Hierarchy

- `baseParams`

  ↳ **`orgEditLabelParams`**

## Table of contents

### Properties

- [auth](base.orgEditLabelParams.md#auth)
- [body](base.orgEditLabelParams.md#body)
- [id](base.orgEditLabelParams.md#id)
- [options](base.orgEditLabelParams.md#options)
- [org](base.orgEditLabelParams.md#org)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditLabelOption`](base.EditLabelOption.md)

#### Defined in

base/organization/org-edit-label.ts:11

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the label to edit

#### Defined in

base/organization/org-edit-label.ts:10

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

base/organization/org-edit-label.ts:8
