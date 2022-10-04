[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userDeleteAccessTokenParams

# Interface: userDeleteAccessTokenParams

[base](../modules/base.md).userDeleteAccessTokenParams

## Hierarchy

- `baseParams`

  ↳ **`userDeleteAccessTokenParams`**

## Table of contents

### Properties

- [auth](base.userDeleteAccessTokenParams.md#auth)
- [options](base.userDeleteAccessTokenParams.md#options)
- [token](base.userDeleteAccessTokenParams.md#token)
- [username](base.userDeleteAccessTokenParams.md#username)

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

### <a id="token" name="token"></a> token

• **token**: `string`

token to be deleted, identified by ID and if not available by name

#### Defined in

base/user/user-delete-access-token.ts:10

___

### <a id="username" name="username"></a> username

• **username**: `string`

username of user

#### Defined in

base/user/user-delete-access-token.ts:8
