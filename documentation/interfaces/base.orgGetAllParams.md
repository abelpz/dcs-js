[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgGetAllParams

# Interface: orgGetAllParams

[base](../modules/base.md).orgGetAllParams

## Hierarchy

- `baseParams`

  ↳ **`orgGetAllParams`**

## Table of contents

### Properties

- [auth](base.orgGetAllParams.md#auth)
- [lang](base.orgGetAllParams.md#lang)
- [limit](base.orgGetAllParams.md#limit)
- [options](base.orgGetAllParams.md#options)
- [page](base.orgGetAllParams.md#page)

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

If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang&#39;s are ORed.

#### Defined in

base/organization/org-get-all.ts:6

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/organization/org-get-all.ts:10

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

base/organization/org-get-all.ts:8
