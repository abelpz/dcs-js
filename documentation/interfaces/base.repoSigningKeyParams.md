[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoSigningKeyParams

# Interface: repoSigningKeyParams

[base](../modules/base.md).repoSigningKeyParams

## Hierarchy

- `baseParams`

  ↳ **`repoSigningKeyParams`**

## Table of contents

### Properties

- [auth](base.repoSigningKeyParams.md#auth)
- [options](base.repoSigningKeyParams.md#options)
- [owner](base.repoSigningKeyParams.md#owner)
- [repo](base.repoSigningKeyParams.md#repo)

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

base/repository/repo-signing-key.ts:5

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-signing-key.ts:7
