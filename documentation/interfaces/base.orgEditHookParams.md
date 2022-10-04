[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgEditHookParams

# Interface: orgEditHookParams

[base](../modules/base.md).orgEditHookParams

## Hierarchy

- `baseParams`

  ↳ **`orgEditHookParams`**

## Table of contents

### Properties

- [auth](base.orgEditHookParams.md#auth)
- [body](base.orgEditHookParams.md#body)
- [id](base.orgEditHookParams.md#id)
- [options](base.orgEditHookParams.md#options)
- [org](base.orgEditHookParams.md#org)

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

base/organization/org-edit-hook.ts:10

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the hook to update

#### Defined in

base/organization/org-edit-hook.ts:9

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

base/organization/org-edit-hook.ts:7
