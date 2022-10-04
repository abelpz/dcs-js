[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetCommentsAndTimelineParams

# Interface: issueGetCommentsAndTimelineParams

[base](../modules/base.md).issueGetCommentsAndTimelineParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetCommentsAndTimelineParams`**

## Table of contents

### Properties

- [auth](base.issueGetCommentsAndTimelineParams.md#auth)
- [before](base.issueGetCommentsAndTimelineParams.md#before)
- [index](base.issueGetCommentsAndTimelineParams.md#index)
- [limit](base.issueGetCommentsAndTimelineParams.md#limit)
- [options](base.issueGetCommentsAndTimelineParams.md#options)
- [owner](base.issueGetCommentsAndTimelineParams.md#owner)
- [page](base.issueGetCommentsAndTimelineParams.md#page)
- [repo](base.issueGetCommentsAndTimelineParams.md#repo)
- [since](base.issueGetCommentsAndTimelineParams.md#since)

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

if provided, only comments updated before the provided time are returned.

#### Defined in

base/issue/issue-get-comments-and-timeline.ts:18

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-get-comments-and-timeline.ts:10

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/issue/issue-get-comments-and-timeline.ts:16

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

base/issue/issue-get-comments-and-timeline.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-get-comments-and-timeline.ts:14

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-comments-and-timeline.ts:8

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

if provided, only comments updated since the specified time are returned.

#### Defined in

base/issue/issue-get-comments-and-timeline.ts:12
