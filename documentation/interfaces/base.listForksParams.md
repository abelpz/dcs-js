[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / listForksParams

# Interface: listForksParams

[base](../modules/base.md).listForksParams

## Hierarchy

- `baseParams`

  ↳ **`listForksParams`**

## Table of contents

### Properties

- [auth](base.listForksParams.md#auth)
- [limit](base.listForksParams.md#limit)
- [options](base.listForksParams.md#options)
- [owner](base.listForksParams.md#owner)
- [page](base.listForksParams.md#page)
- [repo](base.listForksParams.md#repo)

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

base/repository/list-forks.ts:12

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

### <a id="owner" name="owner"></a> owner

• **owner**: `string`

owner of the repo

#### Defined in

base/repository/list-forks.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/list-forks.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/list-forks.ts:8
