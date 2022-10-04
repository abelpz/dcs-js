[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgListTeamsParams

# Interface: orgListTeamsParams

[base](../modules/base.md).orgListTeamsParams

## Hierarchy

- `baseParams`

  ↳ **`orgListTeamsParams`**

## Table of contents

### Properties

- [auth](base.orgListTeamsParams.md#auth)
- [limit](base.orgListTeamsParams.md#limit)
- [options](base.orgListTeamsParams.md#options)
- [org](base.orgListTeamsParams.md#org)
- [page](base.orgListTeamsParams.md#page)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/organization/org-list-teams.ts:10

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

base/organization/org-list-teams.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/organization/org-list-teams.ts:8
