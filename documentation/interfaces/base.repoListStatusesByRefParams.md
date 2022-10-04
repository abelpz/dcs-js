[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListStatusesByRefParams

# Interface: repoListStatusesByRefParams

[base](../modules/base.md).repoListStatusesByRefParams

## Hierarchy

- `baseParams`

  ↳ **`repoListStatusesByRefParams`**

## Table of contents

### Properties

- [auth](base.repoListStatusesByRefParams.md#auth)
- [limit](base.repoListStatusesByRefParams.md#limit)
- [options](base.repoListStatusesByRefParams.md#options)
- [owner](base.repoListStatusesByRefParams.md#owner)
- [page](base.repoListStatusesByRefParams.md#page)
- [ref](base.repoListStatusesByRefParams.md#ref)
- [repo](base.repoListStatusesByRefParams.md#repo)
- [sort](base.repoListStatusesByRefParams.md#sort)
- [state](base.repoListStatusesByRefParams.md#state)

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

base/repository/repo-list-statuses-by-ref.ts:19

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

base/repository/repo-list-statuses-by-ref.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-statuses-by-ref.ts:17

___

### <a id="ref" name="ref"></a> ref

• **ref**: `string`

name of branch/tag/commit

#### Defined in

base/repository/repo-list-statuses-by-ref.ts:11

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-statuses-by-ref.ts:9

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: `string`

type of sort

#### Defined in

base/repository/repo-list-statuses-by-ref.ts:13

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

type of state

#### Defined in

base/repository/repo-list-statuses-by-ref.ts:15
