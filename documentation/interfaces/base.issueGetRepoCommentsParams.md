[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetRepoCommentsParams

# Interface: issueGetRepoCommentsParams

[base](../modules/base.md).issueGetRepoCommentsParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetRepoCommentsParams`**

## Table of contents

### Properties

- [auth](base.issueGetRepoCommentsParams.md#auth)
- [before](base.issueGetRepoCommentsParams.md#before)
- [limit](base.issueGetRepoCommentsParams.md#limit)
- [options](base.issueGetRepoCommentsParams.md#options)
- [owner](base.issueGetRepoCommentsParams.md#owner)
- [page](base.issueGetRepoCommentsParams.md#page)
- [repo](base.issueGetRepoCommentsParams.md#repo)
- [since](base.issueGetRepoCommentsParams.md#since)

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

base/issue/issue-get-repo-comments.ts:12

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/issue/issue-get-repo-comments.ts:16

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

base/issue/issue-get-repo-comments.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-get-repo-comments.ts:14

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-repo-comments.ts:8

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

if provided, only comments updated since the provided time are returned.

#### Defined in

base/issue/issue-get-repo-comments.ts:10
