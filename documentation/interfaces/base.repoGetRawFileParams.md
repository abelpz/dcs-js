[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetRawFileParams

# Interface: repoGetRawFileParams

[base](../modules/base.md).repoGetRawFileParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetRawFileParams`**

## Table of contents

### Properties

- [auth](base.repoGetRawFileParams.md#auth)
- [filepath](base.repoGetRawFileParams.md#filepath)
- [options](base.repoGetRawFileParams.md#options)
- [owner](base.repoGetRawFileParams.md#owner)
- [ref](base.repoGetRawFileParams.md#ref)
- [repo](base.repoGetRawFileParams.md#repo)

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

filepath of the file to get

#### Defined in

base/repository/repo-get-raw-file.ts:10

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

base/repository/repo-get-raw-file.ts:6

___

### <a id="ref" name="ref"></a> ref

• `Optional` **ref**: `string`

The name of the commit/branch/tag. Default the repository’s default branch (usually master)

#### Defined in

base/repository/repo-get-raw-file.ts:12

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-raw-file.ts:8
