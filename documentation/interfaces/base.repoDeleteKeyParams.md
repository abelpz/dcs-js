[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteKeyParams

# Interface: repoDeleteKeyParams

[base](../modules/base.md).repoDeleteKeyParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteKeyParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteKeyParams.md#auth)
- [id](base.repoDeleteKeyParams.md#id)
- [options](base.repoDeleteKeyParams.md#options)
- [owner](base.repoDeleteKeyParams.md#owner)
- [repo](base.repoDeleteKeyParams.md#repo)

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

id of the key to delete

#### Defined in

base/repository/repo-delete-key.ts:11

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

base/repository/repo-delete-key.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-key.ts:9
