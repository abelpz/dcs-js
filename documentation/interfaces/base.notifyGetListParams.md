[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / notifyGetListParams

# Interface: notifyGetListParams

[base](../modules/base.md).notifyGetListParams

## Hierarchy

- `baseParams`

  ↳ **`notifyGetListParams`**

## Table of contents

### Properties

- [all](base.notifyGetListParams.md#all)
- [auth](base.notifyGetListParams.md#auth)
- [before](base.notifyGetListParams.md#before)
- [limit](base.notifyGetListParams.md#limit)
- [options](base.notifyGetListParams.md#options)
- [page](base.notifyGetListParams.md#page)
- [since](base.notifyGetListParams.md#since)
- [statusTypes](base.notifyGetListParams.md#statustypes)
- [subjectType](base.notifyGetListParams.md#subjecttype)

## Properties

### <a id="all" name="all"></a> all

• `Optional` **all**: `boolean`

If true, show notifications marked as read. Default value is false

#### Defined in

base/notification/notify-get-list.ts:6

___

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="before" name="before"></a> before

• `Optional` **before**: `string`

Only show notifications updated before the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/notification/notify-get-list.ts:14

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/notification/notify-get-list.ts:18

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

base/notification/notify-get-list.ts:16

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

Only show notifications updated after the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/notification/notify-get-list.ts:12

___

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` **statusTypes**: `string`[]

Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned.

#### Defined in

base/notification/notify-get-list.ts:8

___

### <a id="subjecttype" name="subjecttype"></a> subjectType

• `Optional` **subjectType**: `string`[]

filter notifications by subject type

#### Defined in

base/notification/notify-get-list.ts:10
