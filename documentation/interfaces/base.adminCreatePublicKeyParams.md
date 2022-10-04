[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminCreatePublicKeyParams

# Interface: adminCreatePublicKeyParams

[base](../modules/base.md).adminCreatePublicKeyParams

## Hierarchy

- `baseParams`

  ↳ **`adminCreatePublicKeyParams`**

## Table of contents

### Properties

- [auth](base.adminCreatePublicKeyParams.md#auth)
- [body](base.adminCreatePublicKeyParams.md#body)
- [options](base.adminCreatePublicKeyParams.md#options)
- [username](base.adminCreatePublicKeyParams.md#username)

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

base/admin/admin-create-public-key.ts:10

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

### <a id="username" name="username"></a> username

• **username**: `string`

username of the user

#### Defined in

base/admin/admin-create-public-key.ts:9
