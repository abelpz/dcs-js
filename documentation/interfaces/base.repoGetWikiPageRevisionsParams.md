[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetWikiPageRevisionsParams

# Interface: repoGetWikiPageRevisionsParams

[base](../modules/base.md).repoGetWikiPageRevisionsParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetWikiPageRevisionsParams`**

## Table of contents

### Properties

- [auth](base.repoGetWikiPageRevisionsParams.md#auth)
- [options](base.repoGetWikiPageRevisionsParams.md#options)
- [owner](base.repoGetWikiPageRevisionsParams.md#owner)
- [page](base.repoGetWikiPageRevisionsParams.md#page)
- [pageName](base.repoGetWikiPageRevisionsParams.md#pagename)
- [repo](base.repoGetWikiPageRevisionsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

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

base/repository/repo-get-wiki-page-revisions.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-get-wiki-page-revisions.ts:13

___

### <a id="pagename" name="pagename"></a> pageName

• **pageName**: `string`

name of the page

#### Defined in

base/repository/repo-get-wiki-page-revisions.ts:11

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-wiki-page-revisions.ts:9
