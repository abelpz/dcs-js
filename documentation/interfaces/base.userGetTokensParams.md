[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userGetTokensParams

# Interface: userGetTokensParams

[base](../modules/base.md).userGetTokensParams

## Hierarchy

- `baseParams`

  ↳ **`userGetTokensParams`**

## Table of contents

### Properties

- [auth](base.userGetTokensParams.md#auth)
- [limit](base.userGetTokensParams.md#limit)
- [options](base.userGetTokensParams.md#options)
- [page](base.userGetTokensParams.md#page)
- [username](base.userGetTokensParams.md#username)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/user/user-get-tokens.ts:10

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

base/user/user-get-tokens.ts:8

___

### <a id="username" name="username"></a> username

• **username**: `string`

username of user

#### Defined in

base/user/user-get-tokens.ts:6
