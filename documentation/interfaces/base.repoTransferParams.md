[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoTransferParams

# Interface: repoTransferParams

[base](../modules/base.md).repoTransferParams

## Hierarchy

- `baseParams`

  ↳ **`repoTransferParams`**

## Table of contents

### Properties

- [auth](base.repoTransferParams.md#auth)
- [body](base.repoTransferParams.md#body)
- [options](base.repoTransferParams.md#options)
- [owner](base.repoTransferParams.md#owner)
- [repo](base.repoTransferParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`TransferRepoOption`](base.TransferRepoOption.md)

Transfer Options

#### Defined in

base/repository/repo-transfer.ts:14

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

base/repository/repo-transfer.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to transfer

#### Defined in

base/repository/repo-transfer.ts:12
