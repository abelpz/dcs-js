[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCurrentListFollowersParams

# Interface: userCurrentListFollowersParams

[base](../modules/base.md).userCurrentListFollowersParams

## Hierarchy

- `baseParams`

  ↳ **`userCurrentListFollowersParams`**

## Table of contents

### Properties

- [auth](base.userCurrentListFollowersParams.md#auth)
- [limit](base.userCurrentListFollowersParams.md#limit)
- [options](base.userCurrentListFollowersParams.md#options)
- [page](base.userCurrentListFollowersParams.md#page)

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

base/user/user-current-list-followers.ts:8

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

base/user/user-current-list-followers.ts:6
