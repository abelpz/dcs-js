[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userSearchParams

# Interface: userSearchParams

[base](../modules/base.md).userSearchParams

## Hierarchy

- `baseParams`

  ↳ **`userSearchParams`**

## Table of contents

### Properties

- [auth](base.userSearchParams.md#auth)
- [lang](base.userSearchParams.md#lang)
- [limit](base.userSearchParams.md#limit)
- [options](base.userSearchParams.md#options)
- [page](base.userSearchParams.md#page)
- [q](base.userSearchParams.md#q)
- [uid](base.userSearchParams.md#uid)

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

base/user/user-search.ts:10

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/user/user-search.ts:14

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

base/user/user-search.ts:12

___

### <a id="q" name="q"></a> q

• `Optional` **q**: `string`

keyword

#### Defined in

base/user/user-search.ts:6

___

### <a id="uid" name="uid"></a> uid

• `Optional` **uid**: `number`

ID of the user to search for

#### Defined in

base/user/user-search.ts:8
