[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgDeleteLabelParams

# Interface: orgDeleteLabelParams

[base](../modules/base.md).orgDeleteLabelParams

## Hierarchy

- `baseParams`

  ↳ **`orgDeleteLabelParams`**

## Table of contents

### Properties

- [auth](base.orgDeleteLabelParams.md#auth)
- [id](base.orgDeleteLabelParams.md#id)
- [options](base.orgDeleteLabelParams.md#options)
- [org](base.orgDeleteLabelParams.md#org)

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

id of the label to delete

#### Defined in

base/organization/org-delete-label.ts:8

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

base/organization/org-delete-label.ts:6
