[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminDeleteUserParams

# Interface: adminDeleteUserParams

[base](../modules/base.md).adminDeleteUserParams

## Hierarchy

- `baseParams`

  ↳ **`adminDeleteUserParams`**

## Table of contents

### Properties

- [auth](base.adminDeleteUserParams.md#auth)
- [options](base.adminDeleteUserParams.md#options)
- [username](base.adminDeleteUserParams.md#username)

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

### <a id="username" name="username"></a> username

• **username**: `string`

username of user to delete

#### Defined in

base/admin/admin-delete-user.ts:8
