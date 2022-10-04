[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCheckFollowingParams

# Interface: userCheckFollowingParams

[base](../modules/base.md).userCheckFollowingParams

## Hierarchy

- `baseParams`

  ↳ **`userCheckFollowingParams`**

## Table of contents

### Properties

- [auth](base.userCheckFollowingParams.md#auth)
- [followee](base.userCheckFollowingParams.md#followee)
- [follower](base.userCheckFollowingParams.md#follower)
- [options](base.userCheckFollowingParams.md#options)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="followee" name="followee"></a> followee

• **followee**: `string`

username of followed user

#### Defined in

base/user/user-check-following.ts:9

___

### <a id="follower" name="follower"></a> follower

• **follower**: `string`

username of following user

#### Defined in

base/user/user-check-following.ts:7

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
