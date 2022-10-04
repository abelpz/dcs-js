[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetKeyParams

# Interface: repoGetKeyParams

[base](../modules/base.md).repoGetKeyParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetKeyParams`**

## Table of contents

### Properties

- [auth](base.repoGetKeyParams.md#auth)
- [id](base.repoGetKeyParams.md#id)
- [options](base.repoGetKeyParams.md#options)
- [owner](base.repoGetKeyParams.md#owner)
- [repo](base.repoGetKeyParams.md#repo)

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

id of the key to get

#### Defined in

base/repository/repo-get-key.ts:10

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

base/repository/repo-get-key.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-key.ts:8
