[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminUnadoptedListParams

# Interface: adminUnadoptedListParams

[base](../modules/base.md).adminUnadoptedListParams

## Hierarchy

- `baseParams`

  ↳ **`adminUnadoptedListParams`**

## Table of contents

### Properties

- [auth](base.adminUnadoptedListParams.md#auth)
- [limit](base.adminUnadoptedListParams.md#limit)
- [options](base.adminUnadoptedListParams.md#options)
- [page](base.adminUnadoptedListParams.md#page)
- [pattern](base.adminUnadoptedListParams.md#pattern)

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

base/admin/admin-unadopted-list.ts:9

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

base/admin/admin-unadopted-list.ts:7

___

### <a id="pattern" name="pattern"></a> pattern

• `Optional` **pattern**: `string`

pattern of repositories to search for

#### Defined in

base/admin/admin-unadopted-list.ts:11
