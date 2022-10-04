[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / notifyReadListParams

# Interface: notifyReadListParams

[base](../modules/base.md).notifyReadListParams

## Hierarchy

- `baseParams`

  ↳ **`notifyReadListParams`**

## Table of contents

### Properties

- [all](base.notifyReadListParams.md#all)
- [auth](base.notifyReadListParams.md#auth)
- [lastReadAt](base.notifyReadListParams.md#lastreadat)
- [options](base.notifyReadListParams.md#options)
- [statusTypes](base.notifyReadListParams.md#statustypes)
- [toStatus](base.notifyReadListParams.md#tostatus)

## Properties

### <a id="all" name="all"></a> all

• `Optional` **all**: `string`

If true, mark all notifications on this repo. Default value is false

#### Defined in

base/notification/notify-read-list.ts:8

___

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="lastreadat" name="lastreadat"></a> lastReadAt

• `Optional` **lastReadAt**: `string`

Describes the last point that notifications were checked. Anything updated since this time will not be updated.

#### Defined in

base/notification/notify-read-list.ts:6

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

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` **statusTypes**: `string`[]

Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.

#### Defined in

base/notification/notify-read-list.ts:10

___

### <a id="tostatus" name="tostatus"></a> toStatus

• `Optional` **toStatus**: `string`

Status to mark notifications as, Defaults to read.

#### Defined in

base/notification/notify-read-list.ts:12
