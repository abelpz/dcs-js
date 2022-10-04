[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteWikiPageParams

# Interface: repoDeleteWikiPageParams

[base](../modules/base.md).repoDeleteWikiPageParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteWikiPageParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteWikiPageParams.md#auth)
- [options](base.repoDeleteWikiPageParams.md#options)
- [owner](base.repoDeleteWikiPageParams.md#owner)
- [pageName](base.repoDeleteWikiPageParams.md#pagename)
- [repo](base.repoDeleteWikiPageParams.md#repo)

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

base/repository/repo-delete-wiki-page.ts:8

___

### <a id="pagename" name="pagename"></a> pageName

• **pageName**: `string`

name of the page

#### Defined in

base/repository/repo-delete-wiki-page.ts:12

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-wiki-page.ts:10
