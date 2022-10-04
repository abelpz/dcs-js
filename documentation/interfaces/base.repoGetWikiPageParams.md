[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetWikiPageParams

# Interface: repoGetWikiPageParams

[base](../modules/base.md).repoGetWikiPageParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetWikiPageParams`**

## Table of contents

### Properties

- [auth](base.repoGetWikiPageParams.md#auth)
- [options](base.repoGetWikiPageParams.md#options)
- [owner](base.repoGetWikiPageParams.md#owner)
- [pageName](base.repoGetWikiPageParams.md#pagename)
- [repo](base.repoGetWikiPageParams.md#repo)

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

base/repository/repo-get-wiki-page.ts:7

___

### <a id="pagename" name="pagename"></a> pageName

• **pageName**: `string`

name of the page

#### Defined in

base/repository/repo-get-wiki-page.ts:11

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-wiki-page.ts:9
