[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminGetAllUsersParams

# Interface: adminGetAllUsersParams

[base](../modules/base.md).adminGetAllUsersParams

## Hierarchy

- `baseParams`

  ↳ **`adminGetAllUsersParams`**

## Table of contents

### Properties

- [auth](base.adminGetAllUsersParams.md#auth)
- [lang](base.adminGetAllUsersParams.md#lang)
- [limit](base.adminGetAllUsersParams.md#limit)
- [options](base.adminGetAllUsersParams.md#options)
- [page](base.adminGetAllUsersParams.md#page)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="lang" name="lang"></a> lang

• `Optional` **lang**: `string`

If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang&#39;s are ORed.

#### Defined in

base/admin/admin-get-all-users.ts:7

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/admin/admin-get-all-users.ts:11

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

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/admin/admin-get-all-users.ts:9
