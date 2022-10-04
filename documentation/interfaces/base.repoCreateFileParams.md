[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateFileParams

# Interface: repoCreateFileParams

[base](../modules/base.md).repoCreateFileParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateFileParams`**

## Table of contents

### Properties

- [auth](base.repoCreateFileParams.md#auth)
- [body](base.repoCreateFileParams.md#body)
- [filepath](base.repoCreateFileParams.md#filepath)
- [options](base.repoCreateFileParams.md#options)
- [owner](base.repoCreateFileParams.md#owner)
- [repo](base.repoCreateFileParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateFileOptions`](base.CreateFileOptions.md)

#### Defined in

base/repository/repo-create-file.ts:14

___

### <a id="filepath" name="filepath"></a> filepath

• **filepath**: `string`

path of the file to create

#### Defined in

base/repository/repo-create-file.ts:13

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

base/repository/repo-create-file.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-file.ts:11
