[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListTopicsParams

# Interface: repoListTopicsParams

[base](../modules/base.md).repoListTopicsParams

## Hierarchy

- `baseParams`

  ↳ **`repoListTopicsParams`**

## Table of contents

### Properties

- [auth](base.repoListTopicsParams.md#auth)
- [limit](base.repoListTopicsParams.md#limit)
- [options](base.repoListTopicsParams.md#options)
- [owner](base.repoListTopicsParams.md#owner)
- [page](base.repoListTopicsParams.md#page)
- [repo](base.repoListTopicsParams.md#repo)

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

base/repository/repo-list-topics.ts:12

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

base/repository/repo-list-topics.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-topics.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-topics.ts:8
