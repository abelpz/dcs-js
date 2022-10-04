[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListReleasesParams

# Interface: repoListReleasesParams

[base](../modules/base.md).repoListReleasesParams

## Hierarchy

- `baseParams`

  ↳ **`repoListReleasesParams`**

## Table of contents

### Properties

- [auth](base.repoListReleasesParams.md#auth)
- [draft](base.repoListReleasesParams.md#draft)
- [limit](base.repoListReleasesParams.md#limit)
- [options](base.repoListReleasesParams.md#options)
- [owner](base.repoListReleasesParams.md#owner)
- [page](base.repoListReleasesParams.md#page)
- [perPage](base.repoListReleasesParams.md#perpage)
- [preRelease](base.repoListReleasesParams.md#prerelease)
- [repo](base.repoListReleasesParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="draft" name="draft"></a> draft

• `Optional` **draft**: `boolean`

filter (exclude / include) drafts, if you dont have repo write access none will show

#### Defined in

base/repository/repo-list-releases.ts:10

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-list-releases.ts:18

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

base/repository/repo-list-releases.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-releases.ts:16

___

### <a id="perpage" name="perpage"></a> perPage

• `Optional` **perPage**: `number`

page size of results, deprecated - use limit

#### Defined in

base/repository/repo-list-releases.ts:14

___

### <a id="prerelease" name="prerelease"></a> preRelease

• `Optional` **preRelease**: `boolean`

filter (exclude / include) pre-releases

#### Defined in

base/repository/repo-list-releases.ts:12

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-releases.ts:8
