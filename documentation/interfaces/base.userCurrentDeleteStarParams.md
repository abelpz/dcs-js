[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCurrentDeleteStarParams

# Interface: userCurrentDeleteStarParams

[base](../modules/base.md).userCurrentDeleteStarParams

## Hierarchy

- `baseParams`

  ↳ **`userCurrentDeleteStarParams`**

## Table of contents

### Properties

- [auth](base.userCurrentDeleteStarParams.md#auth)
- [options](base.userCurrentDeleteStarParams.md#options)
- [owner](base.userCurrentDeleteStarParams.md#owner)
- [repo](base.userCurrentDeleteStarParams.md#repo)

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

### <a id="owner" name="owner"></a> owner

• **owner**: `string`

owner of the repo to unstar

#### Defined in

base/user/user-current-delete-star.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to unstar

#### Defined in

base/user/user-current-delete-star.ts:8
