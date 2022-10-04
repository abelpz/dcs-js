[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetCommentsParams

# Interface: issueGetCommentsParams

[base](../modules/base.md).issueGetCommentsParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetCommentsParams`**

## Table of contents

### Properties

- [auth](base.issueGetCommentsParams.md#auth)
- [before](base.issueGetCommentsParams.md#before)
- [index](base.issueGetCommentsParams.md#index)
- [options](base.issueGetCommentsParams.md#options)
- [owner](base.issueGetCommentsParams.md#owner)
- [repo](base.issueGetCommentsParams.md#repo)
- [since](base.issueGetCommentsParams.md#since)

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

base/issue/issue-get-comments.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-get-comments.ts:10

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

base/issue/issue-get-comments.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-comments.ts:8

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

if provided, only comments updated since the specified time are returned.

#### Defined in

base/issue/issue-get-comments.ts:12
