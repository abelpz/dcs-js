[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetCombinedStatusByRefParams

# Interface: repoGetCombinedStatusByRefParams

[base](../modules/base.md).repoGetCombinedStatusByRefParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetCombinedStatusByRefParams`**

## Table of contents

### Properties

- [auth](base.repoGetCombinedStatusByRefParams.md#auth)
- [limit](base.repoGetCombinedStatusByRefParams.md#limit)
- [options](base.repoGetCombinedStatusByRefParams.md#options)
- [owner](base.repoGetCombinedStatusByRefParams.md#owner)
- [page](base.repoGetCombinedStatusByRefParams.md#page)
- [ref](base.repoGetCombinedStatusByRefParams.md#ref)
- [repo](base.repoGetCombinedStatusByRefParams.md#repo)

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

base/repository/repo-get-combined-status-by-ref.ts:15

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

base/repository/repo-get-combined-status-by-ref.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-get-combined-status-by-ref.ts:13

___

### <a id="ref" name="ref"></a> ref

• **ref**: `string`

name of branch/tag/commit

#### Defined in

base/repository/repo-get-combined-status-by-ref.ts:11

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-combined-status-by-ref.ts:9
