[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / GetBlobParams

# Interface: GetBlobParams

[base](../modules/base.md).GetBlobParams

## Hierarchy

- `baseParams`

  ↳ **`GetBlobParams`**

## Table of contents

### Properties

- [auth](base.GetBlobParams.md#auth)
- [options](base.GetBlobParams.md#options)
- [owner](base.GetBlobParams.md#owner)
- [repo](base.GetBlobParams.md#repo)
- [sha](base.GetBlobParams.md#sha)

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

base/repository/get-blob.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/get-blob.ts:9

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha of the commit

#### Defined in

base/repository/get-blob.ts:11
