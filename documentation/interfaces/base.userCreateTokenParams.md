[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCreateTokenParams

# Interface: userCreateTokenParams

[base](../modules/base.md).userCreateTokenParams

## Hierarchy

- `baseParams`

  ↳ **`userCreateTokenParams`**

## Table of contents

### Properties

- [auth](base.userCreateTokenParams.md#auth)
- [body](base.userCreateTokenParams.md#body)
- [options](base.userCreateTokenParams.md#options)
- [username](base.userCreateTokenParams.md#username)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateAccessTokenOption`](base.CreateAccessTokenOption.md)

#### Defined in

base/user/user-create-token.ts:9

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

base/user/user-create-token.ts:8
