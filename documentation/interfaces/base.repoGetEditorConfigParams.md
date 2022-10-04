[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetEditorConfigParams

# Interface: repoGetEditorConfigParams

[base](../modules/base.md).repoGetEditorConfigParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetEditorConfigParams`**

## Table of contents

### Properties

- [auth](base.repoGetEditorConfigParams.md#auth)
- [filepath](base.repoGetEditorConfigParams.md#filepath)
- [options](base.repoGetEditorConfigParams.md#options)
- [owner](base.repoGetEditorConfigParams.md#owner)
- [repo](base.repoGetEditorConfigParams.md#repo)

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

filepath of file to get

#### Defined in

base/repository/repo-get-editor-config.ts:10

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

base/repository/repo-get-editor-config.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-editor-config.ts:8
