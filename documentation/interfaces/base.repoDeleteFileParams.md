[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteFileParams

# Interface: repoDeleteFileParams

[base](../modules/base.md).repoDeleteFileParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteFileParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteFileParams.md#auth)
- [body](base.repoDeleteFileParams.md#body)
- [filepath](base.repoDeleteFileParams.md#filepath)
- [options](base.repoDeleteFileParams.md#options)
- [owner](base.repoDeleteFileParams.md#owner)
- [repo](base.repoDeleteFileParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`DeleteFileOptions`](base.DeleteFileOptions.md)

#### Defined in

base/repository/repo-delete-file.ts:13

___

### <a id="filepath" name="filepath"></a> filepath

• **filepath**: `string`

path of the file to delete

#### Defined in

base/repository/repo-delete-file.ts:12

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

base/repository/repo-delete-file.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-file.ts:10
