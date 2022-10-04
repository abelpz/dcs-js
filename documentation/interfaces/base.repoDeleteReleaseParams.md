[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteReleaseParams

# Interface: repoDeleteReleaseParams

[base](../modules/base.md).repoDeleteReleaseParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteReleaseParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteReleaseParams.md#auth)
- [id](base.repoDeleteReleaseParams.md#id)
- [options](base.repoDeleteReleaseParams.md#options)
- [owner](base.repoDeleteReleaseParams.md#owner)
- [repo](base.repoDeleteReleaseParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the release to delete

#### Defined in

base/repository/repo-delete-release.ts:11

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

base/repository/repo-delete-release.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-release.ts:9
