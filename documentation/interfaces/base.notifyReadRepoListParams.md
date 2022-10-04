[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / notifyReadRepoListParams

# Interface: notifyReadRepoListParams

[base](../modules/base.md).notifyReadRepoListParams

## Hierarchy

- `baseParams`

  ↳ **`notifyReadRepoListParams`**

## Table of contents

### Properties

- [all](base.notifyReadRepoListParams.md#all)
- [auth](base.notifyReadRepoListParams.md#auth)
- [lastReadAt](base.notifyReadRepoListParams.md#lastreadat)
- [options](base.notifyReadRepoListParams.md#options)
- [owner](base.notifyReadRepoListParams.md#owner)
- [repo](base.notifyReadRepoListParams.md#repo)
- [statusTypes](base.notifyReadRepoListParams.md#statustypes)
- [toStatus](base.notifyReadRepoListParams.md#tostatus)

## Properties

### <a id="all" name="all"></a> all

• `Optional` **all**: `string`

If true, mark all notifications on this repo. Default value is false

#### Defined in

base/notification/notify-read-repo-list.ts:10

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

base/notification/notify-read-repo-list.ts:16

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

base/notification/notify-read-repo-list.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/notification/notify-read-repo-list.ts:8

___

### <a id="statustypes" name="statustypes"></a> statusTypes

• `Optional` **statusTypes**: `string`[]

Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.

#### Defined in

base/notification/notify-read-repo-list.ts:12

___

### <a id="tostatus" name="tostatus"></a> toStatus

• `Optional` **toStatus**: `string`

Status to mark notifications as. Defaults to read.

#### Defined in

base/notification/notify-read-repo-list.ts:14
