[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetWikiPagesParams

# Interface: repoGetWikiPagesParams

[base](../modules/base.md).repoGetWikiPagesParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetWikiPagesParams`**

## Table of contents

### Properties

- [auth](base.repoGetWikiPagesParams.md#auth)
- [limit](base.repoGetWikiPagesParams.md#limit)
- [options](base.repoGetWikiPagesParams.md#options)
- [owner](base.repoGetWikiPagesParams.md#owner)
- [page](base.repoGetWikiPagesParams.md#page)
- [repo](base.repoGetWikiPagesParams.md#repo)

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

base/repository/repo-get-wiki-pages.ts:13

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

base/repository/repo-get-wiki-pages.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-get-wiki-pages.ts:11

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-wiki-pages.ts:9
