[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCurrentTrackedTimesParams

# Interface: userCurrentTrackedTimesParams

[base](../modules/base.md).userCurrentTrackedTimesParams

## Hierarchy

- `baseParams`

  ↳ **`userCurrentTrackedTimesParams`**

## Table of contents

### Properties

- [auth](base.userCurrentTrackedTimesParams.md#auth)
- [before](base.userCurrentTrackedTimesParams.md#before)
- [options](base.userCurrentTrackedTimesParams.md#options)
- [since](base.userCurrentTrackedTimesParams.md#since)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="before" name="before"></a> before

• `Optional` **before**: `string`

Only show times updated before the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/user/user-current-tracked-times.ts:8

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

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

Only show times updated after the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/user/user-current-tracked-times.ts:6
