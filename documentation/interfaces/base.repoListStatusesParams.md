[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListStatusesParams

# Interface: repoListStatusesParams

[base](../modules/base.md).repoListStatusesParams

## Hierarchy

- `baseParams`

  ↳ **`repoListStatusesParams`**

## Table of contents

### Properties

- [auth](base.repoListStatusesParams.md#auth)
- [limit](base.repoListStatusesParams.md#limit)
- [options](base.repoListStatusesParams.md#options)
- [owner](base.repoListStatusesParams.md#owner)
- [page](base.repoListStatusesParams.md#page)
- [repo](base.repoListStatusesParams.md#repo)
- [sha](base.repoListStatusesParams.md#sha)
- [sort](base.repoListStatusesParams.md#sort)
- [state](base.repoListStatusesParams.md#state)

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

base/repository/repo-list-statuses.ts:19

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

base/repository/repo-list-statuses.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-statuses.ts:17

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-statuses.ts:9

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha of the commit

#### Defined in

base/repository/repo-list-statuses.ts:11

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: `string`

type of sort

#### Defined in

base/repository/repo-list-statuses.ts:13

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

type of state

#### Defined in

base/repository/repo-list-statuses.ts:15
