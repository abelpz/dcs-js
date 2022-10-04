[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueTrackedTimesParams

# Interface: issueTrackedTimesParams

[base](../modules/base.md).issueTrackedTimesParams

## Hierarchy

- `baseParams`

  ↳ **`issueTrackedTimesParams`**

## Table of contents

### Properties

- [auth](base.issueTrackedTimesParams.md#auth)
- [before](base.issueTrackedTimesParams.md#before)
- [index](base.issueTrackedTimesParams.md#index)
- [limit](base.issueTrackedTimesParams.md#limit)
- [options](base.issueTrackedTimesParams.md#options)
- [owner](base.issueTrackedTimesParams.md#owner)
- [page](base.issueTrackedTimesParams.md#page)
- [repo](base.issueTrackedTimesParams.md#repo)
- [since](base.issueTrackedTimesParams.md#since)
- [user](base.issueTrackedTimesParams.md#user)

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

base/issue/issue-tracked-times.ts:17

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-tracked-times.ts:11

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/issue/issue-tracked-times.ts:21

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

base/issue/issue-tracked-times.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-tracked-times.ts:19

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-tracked-times.ts:9

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

Only show times updated after the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/issue/issue-tracked-times.ts:15

___

### <a id="user" name="user"></a> user

• `Optional` **user**: `string`

optional filter by user (available for issue managers)

#### Defined in

base/issue/issue-tracked-times.ts:13
