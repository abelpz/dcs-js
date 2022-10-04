[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminCronListParams

# Interface: adminCronListParams

[base](../modules/base.md).adminCronListParams

## Hierarchy

- `baseParams`

  ↳ **`adminCronListParams`**

## Table of contents

### Properties

- [auth](base.adminCronListParams.md#auth)
- [limit](base.adminCronListParams.md#limit)
- [options](base.adminCronListParams.md#options)
- [page](base.adminCronListParams.md#page)

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

base/admin/admin-cron-list.ts:9

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

base/admin/admin-cron-list.ts:7
