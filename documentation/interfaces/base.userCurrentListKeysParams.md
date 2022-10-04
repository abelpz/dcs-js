[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCurrentListKeysParams

# Interface: userCurrentListKeysParams

[base](../modules/base.md).userCurrentListKeysParams

## Hierarchy

- `baseParams`

  ↳ **`userCurrentListKeysParams`**

## Table of contents

### Properties

- [auth](base.userCurrentListKeysParams.md#auth)
- [fingerprint](base.userCurrentListKeysParams.md#fingerprint)
- [limit](base.userCurrentListKeysParams.md#limit)
- [options](base.userCurrentListKeysParams.md#options)
- [page](base.userCurrentListKeysParams.md#page)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="fingerprint" name="fingerprint"></a> fingerprint

• `Optional` **fingerprint**: `string`

fingerprint of the key

#### Defined in

base/user/user-current-list-keys.ts:6

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/user/user-current-list-keys.ts:10

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

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/user/user-current-list-keys.ts:8
