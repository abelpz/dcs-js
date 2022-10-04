[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetParams

# Interface: repoGetParams

[base](../modules/base.md).repoGetParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetParams`**

## Table of contents

### Properties

- [auth](base.repoGetParams.md#auth)
- [options](base.repoGetParams.md#options)
- [owner](base.repoGetParams.md#owner)
- [repo](base.repoGetParams.md#repo)

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

owner of the repo

#### Defined in

base/repository/repo-get.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get.ts:8
