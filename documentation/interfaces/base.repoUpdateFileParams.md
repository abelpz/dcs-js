[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoUpdateFileParams

# Interface: repoUpdateFileParams

[base](../modules/base.md).repoUpdateFileParams

## Hierarchy

- `baseParams`

  ↳ **`repoUpdateFileParams`**

## Table of contents

### Properties

- [auth](base.repoUpdateFileParams.md#auth)
- [body](base.repoUpdateFileParams.md#body)
- [filepath](base.repoUpdateFileParams.md#filepath)
- [options](base.repoUpdateFileParams.md#options)
- [owner](base.repoUpdateFileParams.md#owner)
- [repo](base.repoUpdateFileParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`UpdateFileOptions`](base.UpdateFileOptions.md)

#### Defined in

base/repository/repo-update-file.ts:14

___

### <a id="filepath" name="filepath"></a> filepath

• **filepath**: `string`

path of the file to update

#### Defined in

base/repository/repo-update-file.ts:13

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

base/repository/repo-update-file.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-update-file.ts:11
