[dcs-js](../README.md) / [Exports](../modules.md) / NotificationApiNotifyGetListRequest

# Interface: NotificationApiNotifyGetListRequest

Request parameters for notifyGetList operation in NotificationApi.

**`export`**

**`interface`** NotificationApiNotifyGetListRequest

## Table of contents

### Properties

- [all](NotificationApiNotifyGetListRequest.md#all)
- [before](NotificationApiNotifyGetListRequest.md#before)
- [limit](NotificationApiNotifyGetListRequest.md#limit)
- [page](NotificationApiNotifyGetListRequest.md#page)
- [since](NotificationApiNotifyGetListRequest.md#since)
- [statusTypes](NotificationApiNotifyGetListRequest.md#statustypes)
- [subjectType](NotificationApiNotifyGetListRequest.md#subjecttype)

## Properties

### <a id="all" name="all"></a> all

• `Optional` `Readonly` **all**: `boolean`

If true, show notifications marked as read. Default value is false

**`memberof`** NotificationApiNotifyGetList

#### Defined in

[apis/notification-api.ts:773](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L773)

___

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

Only show notifications updated before the given time. This is a timestamp in RFC 3339 format

**`memberof`** NotificationApiNotifyGetList

#### Defined in

[apis/notification-api.ts:801](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L801)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** NotificationApiNotifyGetList

#### Defined in

[apis/notification-api.ts:815](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L815)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** NotificationApiNotifyGetList

#### Defined in

[apis/notification-api.ts:808](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L808)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

Only show notifications updated after the given time. This is a timestamp in RFC 3339 format

**`memberof`** NotificationApiNotifyGetList

#### Defined in

[apis/notification-api.ts:794](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L794)

___

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` `Readonly` **statusTypes**: `string`[]

Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned.

**`memberof`** NotificationApiNotifyGetList

#### Defined in

[apis/notification-api.ts:780](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L780)

___

### <a id="subjecttype" name="subjecttype"></a> subjectType

• `Optional` `Readonly` **subjectType**: (``"repository"`` \| ``"issue"`` \| ``"pull"`` \| ``"commit"``)[]

filter notifications by subject type

**`memberof`** NotificationApiNotifyGetList

#### Defined in

[apis/notification-api.ts:787](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L787)
