[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminDeleteUserPublicKeyParams

# Interface: adminDeleteUserPublicKeyParams

[base](../modules/base.md).adminDeleteUserPublicKeyParams

## Hierarchy

- `baseParams`

  ↳ **`adminDeleteUserPublicKeyParams`**

## Table of contents

### Properties

- [auth](base.adminDeleteUserPublicKeyParams.md#auth)
- [id](base.adminDeleteUserPublicKeyParams.md#id)
- [options](base.adminDeleteUserPublicKeyParams.md#options)
- [username](base.adminDeleteUserPublicKeyParams.md#username)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the key to delete

#### Defined in

base/admin/admin-delete-user-public-key.ts:10

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

username of user

#### Defined in

base/admin/admin-delete-user-public-key.ts:8
