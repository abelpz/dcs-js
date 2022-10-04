[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userListFollowersParams

# Interface: userListFollowersParams

[base](../modules/base.md).userListFollowersParams

## Hierarchy

- `baseParams`

  ↳ **`userListFollowersParams`**

## Table of contents

### Properties

- [auth](base.userListFollowersParams.md#auth)
- [limit](base.userListFollowersParams.md#limit)
- [options](base.userListFollowersParams.md#options)
- [page](base.userListFollowersParams.md#page)
- [username](base.userListFollowersParams.md#username)

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

base/user/user-list-followers.ts:10

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

base/user/user-list-followers.ts:8

___

### <a id="username" name="username"></a> username

• **username**: `string`

username of user

#### Defined in

base/user/user-list-followers.ts:6
