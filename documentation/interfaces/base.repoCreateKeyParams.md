[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateKeyParams

# Interface: repoCreateKeyParams

[base](../modules/base.md).repoCreateKeyParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateKeyParams`**

## Table of contents

### Properties

- [auth](base.repoCreateKeyParams.md#auth)
- [body](base.repoCreateKeyParams.md#body)
- [options](base.repoCreateKeyParams.md#options)
- [owner](base.repoCreateKeyParams.md#owner)
- [repo](base.repoCreateKeyParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateKeyOption`](base.CreateKeyOption.md)

#### Defined in

base/repository/repo-create-key.ts:11

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

base/repository/repo-create-key.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-key.ts:10
