[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgListLabelsParams

# Interface: orgListLabelsParams

[base](../modules/base.md).orgListLabelsParams

## Hierarchy

- `baseParams`

  ↳ **`orgListLabelsParams`**

## Table of contents

### Properties

- [auth](base.orgListLabelsParams.md#auth)
- [limit](base.orgListLabelsParams.md#limit)
- [options](base.orgListLabelsParams.md#options)
- [org](base.orgListLabelsParams.md#org)
- [page](base.orgListLabelsParams.md#page)

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

base/organization/org-list-labels.ts:10

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

base/organization/org-list-labels.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/organization/org-list-labels.ts:8
