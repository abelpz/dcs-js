[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / rejectRepoTransferParams

# Interface: rejectRepoTransferParams

[base](../modules/base.md).rejectRepoTransferParams

## Hierarchy

- `baseParams`

  ↳ **`rejectRepoTransferParams`**

## Table of contents

### Properties

- [auth](base.rejectRepoTransferParams.md#auth)
- [options](base.rejectRepoTransferParams.md#options)
- [owner](base.rejectRepoTransferParams.md#owner)
- [repo](base.rejectRepoTransferParams.md#repo)

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

owner of the repo to transfer

#### Defined in

base/repository/reject-repo-transfer.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to transfer

#### Defined in

base/repository/reject-repo-transfer.ts:10
