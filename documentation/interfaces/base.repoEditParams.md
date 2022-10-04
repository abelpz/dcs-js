[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditParams

# Interface: repoEditParams

[base](../modules/base.md).repoEditParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditParams`**

## Table of contents

### Properties

- [auth](base.repoEditParams.md#auth)
- [body](base.repoEditParams.md#body)
- [options](base.repoEditParams.md#options)
- [owner](base.repoEditParams.md#owner)
- [repo](base.repoEditParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditRepoOption`](base.EditRepoOption.md)

Properties of a repo that you can edit

#### Defined in

base/repository/repo-edit.ts:13

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

owner of the repo to edit

#### Defined in

base/repository/repo-edit.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to edit

#### Defined in

base/repository/repo-edit.ts:11
