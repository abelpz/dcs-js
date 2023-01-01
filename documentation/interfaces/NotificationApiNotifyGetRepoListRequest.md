[dcs-js](../README.md) / [Exports](../modules.md) / NotificationApiNotifyGetRepoListRequest

# Interface: NotificationApiNotifyGetRepoListRequest

Request parameters for notifyGetRepoList operation in NotificationApi.

**`export`**

**`interface`** NotificationApiNotifyGetRepoListRequest

## Table of contents

### Properties

- [all](NotificationApiNotifyGetRepoListRequest.md#all)
- [before](NotificationApiNotifyGetRepoListRequest.md#before)
- [limit](NotificationApiNotifyGetRepoListRequest.md#limit)
- [owner](NotificationApiNotifyGetRepoListRequest.md#owner)
- [page](NotificationApiNotifyGetRepoListRequest.md#page)
- [repo](NotificationApiNotifyGetRepoListRequest.md#repo)
- [since](NotificationApiNotifyGetRepoListRequest.md#since)
- [statusTypes](NotificationApiNotifyGetRepoListRequest.md#statustypes)
- [subjectType](NotificationApiNotifyGetRepoListRequest.md#subjecttype)

## Properties

### <a id="all" name="all"></a> all

• `Optional` `Readonly` **all**: `boolean`

If true, show notifications marked as read. Default value is false

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:843](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L843)

___

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

Only show notifications updated before the given time. This is a timestamp in RFC 3339 format

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:871](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L871)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:885](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L885)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:829](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L829)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:878](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L878)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:836](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L836)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

Only show notifications updated after the given time. This is a timestamp in RFC 3339 format

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:864](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L864)

___

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` `Readonly` **statusTypes**: `string`[]

Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:850](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L850)

___

### <a id="subjecttype" name="subjecttype"></a> subjectType

• `Optional` `Readonly` **subjectType**: (``"repository"`` \| ``"issue"`` \| ``"pull"`` \| ``"commit"``)[]

filter notifications by subject type

**`memberof`** NotificationApiNotifyGetRepoList

#### Defined in

[apis/notification-api.ts:857](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L857)
