[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / notifyReadThreadParams

# Interface: notifyReadThreadParams

[base](../modules/base.md).notifyReadThreadParams

## Hierarchy

- `baseParams`

  ↳ **`notifyReadThreadParams`**

## Table of contents

### Properties

- [auth](base.notifyReadThreadParams.md#auth)
- [id](base.notifyReadThreadParams.md#id)
- [options](base.notifyReadThreadParams.md#options)
- [toStatus](base.notifyReadThreadParams.md#tostatus)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `string`

id of notification thread

#### Defined in

base/notification/notify-read-thread.ts:8

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

### <a id="tostatus" name="tostatus"></a> toStatus

• `Optional` **toStatus**: `string`

Status to mark notifications as

#### Defined in

base/notification/notify-read-thread.ts:10
