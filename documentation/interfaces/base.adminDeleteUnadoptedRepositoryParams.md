[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminDeleteUnadoptedRepositoryParams

# Interface: adminDeleteUnadoptedRepositoryParams

[base](../modules/base.md).adminDeleteUnadoptedRepositoryParams

## Hierarchy

- `baseParams`

  ↳ **`adminDeleteUnadoptedRepositoryParams`**

## Table of contents

### Properties

- [auth](base.adminDeleteUnadoptedRepositoryParams.md#auth)
- [options](base.adminDeleteUnadoptedRepositoryParams.md#options)
- [owner](base.adminDeleteUnadoptedRepositoryParams.md#owner)
- [repo](base.adminDeleteUnadoptedRepositoryParams.md#repo)

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

base/admin/admin-delete-unadopted-repository.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/admin/admin-delete-unadopted-repository.ts:9
