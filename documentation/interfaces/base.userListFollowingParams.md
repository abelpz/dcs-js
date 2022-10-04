[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userListFollowingParams

# Interface: userListFollowingParams

[base](../modules/base.md).userListFollowingParams

## Hierarchy

- `baseParams`

  ↳ **`userListFollowingParams`**

## Table of contents

### Properties

- [auth](base.userListFollowingParams.md#auth)
- [limit](base.userListFollowingParams.md#limit)
- [options](base.userListFollowingParams.md#options)
- [page](base.userListFollowingParams.md#page)
- [username](base.userListFollowingParams.md#username)

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

base/user/user-list-following.ts:10

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

base/user/user-list-following.ts:8

___

### <a id="username" name="username"></a> username

• **username**: `string`

username of user

#### Defined in

base/user/user-list-following.ts:6
