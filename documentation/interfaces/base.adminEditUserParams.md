[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminEditUserParams

# Interface: adminEditUserParams

[base](../modules/base.md).adminEditUserParams

## Hierarchy

- `baseParams`

  ↳ **`adminEditUserParams`**

## Table of contents

### Properties

- [auth](base.adminEditUserParams.md#auth)
- [body](base.adminEditUserParams.md#body)
- [options](base.adminEditUserParams.md#options)
- [username](base.adminEditUserParams.md#username)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditUserOption`](base.EditUserOption.md)

#### Defined in

base/admin/admin-edit-user.ts:10

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

username of user to edit

#### Defined in

base/admin/admin-edit-user.ts:9
