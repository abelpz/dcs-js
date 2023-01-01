[dcs-js](../README.md) / [Exports](../modules.md) / NotificationApiNotifyReadRepoListRequest

# Interface: NotificationApiNotifyReadRepoListRequest

Request parameters for notifyReadRepoList operation in NotificationApi.

**`export`**

**`interface`** NotificationApiNotifyReadRepoListRequest

## Table of contents

### Properties

- [all](NotificationApiNotifyReadRepoListRequest.md#all)
- [lastReadAt](NotificationApiNotifyReadRepoListRequest.md#lastreadat)
- [owner](NotificationApiNotifyReadRepoListRequest.md#owner)
- [repo](NotificationApiNotifyReadRepoListRequest.md#repo)
- [statusTypes](NotificationApiNotifyReadRepoListRequest.md#statustypes)
- [toStatus](NotificationApiNotifyReadRepoListRequest.md#tostatus)

## Properties

### <a id="all" name="all"></a> all

• `Optional` `Readonly` **all**: `string`

If true, mark all notifications on this repo. Default value is false

**`memberof`** NotificationApiNotifyReadRepoList

#### Defined in

[apis/notification-api.ts:962](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L962)

___

### <a id="lastreadat" name="lastreadat"></a> lastReadAt

• `Optional` `Readonly` **lastReadAt**: `string`

Describes the last point that notifications were checked. Anything updated since this time will not be updated.

**`memberof`** NotificationApiNotifyReadRepoList

#### Defined in

[apis/notification-api.ts:983](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L983)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** NotificationApiNotifyReadRepoList

#### Defined in

[apis/notification-api.ts:948](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L948)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** NotificationApiNotifyReadRepoList

#### Defined in

[apis/notification-api.ts:955](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L955)

___

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` `Readonly` **statusTypes**: `string`[]

Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.

**`memberof`** NotificationApiNotifyReadRepoList

#### Defined in

[apis/notification-api.ts:969](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L969)

___

### <a id="tostatus" name="tostatus"></a> toStatus

• `Optional` `Readonly` **toStatus**: `string`

Status to mark notifications as. Defaults to read.

**`memberof`** NotificationApiNotifyReadRepoList

#### Defined in

[apis/notification-api.ts:976](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L976)
