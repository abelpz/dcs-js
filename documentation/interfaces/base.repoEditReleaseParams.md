[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditReleaseParams

# Interface: repoEditReleaseParams

[base](../modules/base.md).repoEditReleaseParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditReleaseParams`**

## Table of contents

### Properties

- [auth](base.repoEditReleaseParams.md#auth)
- [body](base.repoEditReleaseParams.md#body)
- [id](base.repoEditReleaseParams.md#id)
- [options](base.repoEditReleaseParams.md#options)
- [owner](base.repoEditReleaseParams.md#owner)
- [repo](base.repoEditReleaseParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditReleaseOption`](base.EditReleaseOption.md)

#### Defined in

base/repository/repo-edit-release.ts:13

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the release to edit

#### Defined in

base/repository/repo-edit-release.ts:12

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

base/repository/repo-edit-release.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-edit-release.ts:10
