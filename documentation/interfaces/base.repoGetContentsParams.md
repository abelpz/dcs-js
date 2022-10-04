[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetContentsParams

# Interface: repoGetContentsParams

[base](../modules/base.md).repoGetContentsParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetContentsParams`**

## Table of contents

### Properties

- [auth](base.repoGetContentsParams.md#auth)
- [filepath](base.repoGetContentsParams.md#filepath)
- [options](base.repoGetContentsParams.md#options)
- [owner](base.repoGetContentsParams.md#owner)
- [ref](base.repoGetContentsParams.md#ref)
- [repo](base.repoGetContentsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="filepath" name="filepath"></a> filepath

• **filepath**: `string`

path of the dir, file, symlink or submodule in the repo

#### Defined in

base/repository/repo-get-contents.ts:11

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

base/repository/repo-get-contents.ts:7

___

### <a id="ref" name="ref"></a> ref

• `Optional` **ref**: `string`

The name of the commit/branch/tag. Default the repository’s default branch (usually master)

#### Defined in

base/repository/repo-get-contents.ts:13

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-contents.ts:9
