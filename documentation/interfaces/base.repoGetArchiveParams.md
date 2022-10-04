[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetArchiveParams

# Interface: repoGetArchiveParams

[base](../modules/base.md).repoGetArchiveParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetArchiveParams`**

## Table of contents

### Properties

- [archive](base.repoGetArchiveParams.md#archive)
- [auth](base.repoGetArchiveParams.md#auth)
- [options](base.repoGetArchiveParams.md#options)
- [owner](base.repoGetArchiveParams.md#owner)
- [repo](base.repoGetArchiveParams.md#repo)

## Properties

### <a id="archive" name="archive"></a> archive

• **archive**: `string`

the git reference for download with attached archive format (e.g. master.zip)

#### Defined in

base/repository/repo-get-archive.ts:10

___

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

base/repository/repo-get-archive.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-archive.ts:8
