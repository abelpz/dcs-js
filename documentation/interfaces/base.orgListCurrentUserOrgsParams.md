[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgListCurrentUserOrgsParams

# Interface: orgListCurrentUserOrgsParams

[base](../modules/base.md).orgListCurrentUserOrgsParams

## Hierarchy

- `baseParams`

  ↳ **`orgListCurrentUserOrgsParams`**

## Table of contents

### Properties

- [auth](base.orgListCurrentUserOrgsParams.md#auth)
- [limit](base.orgListCurrentUserOrgsParams.md#limit)
- [options](base.orgListCurrentUserOrgsParams.md#options)
- [page](base.orgListCurrentUserOrgsParams.md#page)

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

base/organization/org-list-current-user-orgs.ts:8

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

base/organization/org-list-current-user-orgs.ts:6
