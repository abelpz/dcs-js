[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgListMembersParams

# Interface: orgListMembersParams

[base](../modules/base.md).orgListMembersParams

## Hierarchy

- `baseParams`

  ↳ **`orgListMembersParams`**

## Table of contents

### Properties

- [auth](base.orgListMembersParams.md#auth)
- [limit](base.orgListMembersParams.md#limit)
- [options](base.orgListMembersParams.md#options)
- [org](base.orgListMembersParams.md#org)
- [page](base.orgListMembersParams.md#page)

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

base/organization/org-list-members.ts:10

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

base/organization/org-list-members.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/organization/org-list-members.ts:8
