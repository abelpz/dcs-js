[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCurrentPutStarParams

# Interface: userCurrentPutStarParams

[base](../modules/base.md).userCurrentPutStarParams

## Hierarchy

- `baseParams`

  ↳ **`userCurrentPutStarParams`**

## Table of contents

### Properties

- [auth](base.userCurrentPutStarParams.md#auth)
- [options](base.userCurrentPutStarParams.md#options)
- [owner](base.userCurrentPutStarParams.md#owner)
- [repo](base.userCurrentPutStarParams.md#repo)

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

owner of the repo to star

#### Defined in

base/user/user-current-put-star.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to star

#### Defined in

base/user/user-current-put-star.ts:8
