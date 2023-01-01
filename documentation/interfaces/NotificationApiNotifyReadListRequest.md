[dcs-js](../README.md) / [Exports](../modules.md) / NotificationApiNotifyReadListRequest

# Interface: NotificationApiNotifyReadListRequest

Request parameters for notifyReadList operation in NotificationApi.

**`export`**

**`interface`** NotificationApiNotifyReadListRequest

## Table of contents

### Properties

- [all](NotificationApiNotifyReadListRequest.md#all)
- [lastReadAt](NotificationApiNotifyReadListRequest.md#lastreadat)
- [statusTypes](NotificationApiNotifyReadListRequest.md#statustypes)
- [toStatus](NotificationApiNotifyReadListRequest.md#tostatus)

## Properties

### <a id="all" name="all"></a> all

• `Optional` `Readonly` **all**: `string`

If true, mark all notifications on this repo. Default value is false

**`memberof`** NotificationApiNotifyReadList

#### Defined in

[apis/notification-api.ts:920](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L920)

___

### <a id="lastreadat" name="lastreadat"></a> lastReadAt

• `Optional` `Readonly` **lastReadAt**: `string`

Describes the last point that notifications were checked. Anything updated since this time will not be updated.

**`memberof`** NotificationApiNotifyReadList

#### Defined in

[apis/notification-api.ts:913](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L913)

___

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` `Readonly` **statusTypes**: `string`[]

Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.

**`memberof`** NotificationApiNotifyReadList

#### Defined in

[apis/notification-api.ts:927](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L927)

___

### <a id="tostatus" name="tostatus"></a> toStatus

• `Optional` `Readonly` **toStatus**: `string`

Status to mark notifications as, Defaults to read.

**`memberof`** NotificationApiNotifyReadList

#### Defined in

[apis/notification-api.ts:934](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L934)
