[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / teamSearchParams

# Interface: teamSearchParams

[base](../modules/base.md).teamSearchParams

## Hierarchy

- `baseParams`

  ↳ **`teamSearchParams`**

## Table of contents

### Properties

- [auth](base.teamSearchParams.md#auth)
- [includeDesc](base.teamSearchParams.md#includedesc)
- [limit](base.teamSearchParams.md#limit)
- [options](base.teamSearchParams.md#options)
- [org](base.teamSearchParams.md#org)
- [page](base.teamSearchParams.md#page)
- [q](base.teamSearchParams.md#q)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="includedesc" name="includedesc"></a> includeDesc

• `Optional` **includeDesc**: `boolean`

include search within team description (defaults to true)

#### Defined in

base/organization/team-search.ts:10

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/organization/team-search.ts:14

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

base/organization/team-search.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/organization/team-search.ts:12

___

### <a id="q" name="q"></a> q

• `Optional` **q**: `string`

keywords to search

#### Defined in

base/organization/team-search.ts:8
