[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / notifyGetRepoListParams

# Interface: notifyGetRepoListParams

[base](../modules/base.md).notifyGetRepoListParams

## Hierarchy

- `baseParams`

  ↳ **`notifyGetRepoListParams`**

## Table of contents

### Properties

- [all](base.notifyGetRepoListParams.md#all)
- [auth](base.notifyGetRepoListParams.md#auth)
- [before](base.notifyGetRepoListParams.md#before)
- [limit](base.notifyGetRepoListParams.md#limit)
- [options](base.notifyGetRepoListParams.md#options)
- [owner](base.notifyGetRepoListParams.md#owner)
- [page](base.notifyGetRepoListParams.md#page)
- [repo](base.notifyGetRepoListParams.md#repo)
- [since](base.notifyGetRepoListParams.md#since)
- [statusTypes](base.notifyGetRepoListParams.md#statustypes)
- [subjectType](base.notifyGetRepoListParams.md#subjecttype)

## Properties

### <a id="all" name="all"></a> all

• `Optional` **all**: `boolean`

If true, show notifications marked as read. Default value is false

#### Defined in

base/notification/notify-get-repo-list.ts:10

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

base/notification/notify-get-repo-list.ts:18

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/notification/notify-get-repo-list.ts:22

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

owner of the repo

#### Defined in

base/notification/notify-get-repo-list.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/notification/notify-get-repo-list.ts:20

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/notification/notify-get-repo-list.ts:8

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

Only show notifications updated after the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/notification/notify-get-repo-list.ts:16

___

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` **statusTypes**: `string`[]

Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned

#### Defined in

base/notification/notify-get-repo-list.ts:12

___

### <a id="subjecttype" name="subjecttype"></a> subjectType

• `Optional` **subjectType**: `string`[]

filter notifications by subject type

#### Defined in

base/notification/notify-get-repo-list.ts:14
