[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userListReposParams

# Interface: userListReposParams

[base](../modules/base.md).userListReposParams

## Hierarchy

- `baseParams`

  ↳ **`userListReposParams`**

## Table of contents

### Properties

- [auth](base.userListReposParams.md#auth)
- [limit](base.userListReposParams.md#limit)
- [options](base.userListReposParams.md#options)
- [page](base.userListReposParams.md#page)
- [username](base.userListReposParams.md#username)

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

base/user/user-list-repos.ts:10

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

base/user/user-list-repos.ts:8

___

### <a id="username" name="username"></a> username

• **username**: `string`

username of user

#### Defined in

base/user/user-list-repos.ts:6
