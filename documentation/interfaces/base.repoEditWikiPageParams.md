[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditWikiPageParams

# Interface: repoEditWikiPageParams

[base](../modules/base.md).repoEditWikiPageParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditWikiPageParams`**

## Table of contents

### Properties

- [auth](base.repoEditWikiPageParams.md#auth)
- [body](base.repoEditWikiPageParams.md#body)
- [options](base.repoEditWikiPageParams.md#options)
- [owner](base.repoEditWikiPageParams.md#owner)
- [pageName](base.repoEditWikiPageParams.md#pagename)
- [repo](base.repoEditWikiPageParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateWikiPageOptions`](base.CreateWikiPageOptions.md)

#### Defined in

base/repository/repo-edit-wiki-page.ts:14

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

base/repository/repo-edit-wiki-page.ts:9

___

### <a id="pagename" name="pagename"></a> pageName

• **pageName**: `string`

name of the page

#### Defined in

base/repository/repo-edit-wiki-page.ts:13

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-edit-wiki-page.ts:11
