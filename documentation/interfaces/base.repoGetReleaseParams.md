[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetReleaseParams

# Interface: repoGetReleaseParams

[base](../modules/base.md).repoGetReleaseParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetReleaseParams`**

## Table of contents

### Properties

- [auth](base.repoGetReleaseParams.md#auth)
- [id](base.repoGetReleaseParams.md#id)
- [options](base.repoGetReleaseParams.md#options)
- [owner](base.repoGetReleaseParams.md#owner)
- [repo](base.repoGetReleaseParams.md#repo)

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

id of the release to get

#### Defined in

base/repository/repo-get-release.ts:11

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

base/repository/repo-get-release.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-release.ts:9
