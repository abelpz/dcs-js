[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListHooksParams

# Interface: repoListHooksParams

[base](../modules/base.md).repoListHooksParams

## Hierarchy

- `baseParams`

  ↳ **`repoListHooksParams`**

## Table of contents

### Properties

- [auth](base.repoListHooksParams.md#auth)
- [limit](base.repoListHooksParams.md#limit)
- [options](base.repoListHooksParams.md#options)
- [owner](base.repoListHooksParams.md#owner)
- [page](base.repoListHooksParams.md#page)
- [repo](base.repoListHooksParams.md#repo)

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

base/repository/repo-list-hooks.ts:12

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

base/repository/repo-list-hooks.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-hooks.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-hooks.ts:8
