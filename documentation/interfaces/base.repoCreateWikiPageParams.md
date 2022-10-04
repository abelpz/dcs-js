[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateWikiPageParams

# Interface: repoCreateWikiPageParams

[base](../modules/base.md).repoCreateWikiPageParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateWikiPageParams`**

## Table of contents

### Properties

- [auth](base.repoCreateWikiPageParams.md#auth)
- [body](base.repoCreateWikiPageParams.md#body)
- [options](base.repoCreateWikiPageParams.md#options)
- [owner](base.repoCreateWikiPageParams.md#owner)
- [repo](base.repoCreateWikiPageParams.md#repo)

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

base/repository/repo-create-wiki-page.ts:12

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

base/repository/repo-create-wiki-page.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-wiki-page.ts:11
