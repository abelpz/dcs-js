[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteParams

# Interface: repoDeleteParams

[base](../modules/base.md).repoDeleteParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteParams.md#auth)
- [options](base.repoDeleteParams.md#options)
- [owner](base.repoDeleteParams.md#owner)
- [repo](base.repoDeleteParams.md#repo)

## Properties

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

owner of the repo to delete

#### Defined in

base/repository/repo-delete.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to delete

#### Defined in

base/repository/repo-delete.ts:9
