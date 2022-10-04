[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueEditCommentDeprecatedParams

# Interface: issueEditCommentDeprecatedParams

[base](../modules/base.md).issueEditCommentDeprecatedParams

## Hierarchy

- `baseParams`

  ↳ **`issueEditCommentDeprecatedParams`**

## Table of contents

### Properties

- [auth](base.issueEditCommentDeprecatedParams.md#auth)
- [body](base.issueEditCommentDeprecatedParams.md#body)
- [id](base.issueEditCommentDeprecatedParams.md#id)
- [index](base.issueEditCommentDeprecatedParams.md#index)
- [options](base.issueEditCommentDeprecatedParams.md#options)
- [owner](base.issueEditCommentDeprecatedParams.md#owner)
- [repo](base.issueEditCommentDeprecatedParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditIssueCommentOption`](base.EditIssueCommentOption.md)

#### Defined in

base/issue/issue-edit-comment-deprecated.ts:17

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the comment to edit

#### Defined in

base/issue/issue-edit-comment-deprecated.ts:16

___

### <a id="index" name="index"></a> index

• **index**: `number`

this parameter is ignored

#### Defined in

base/issue/issue-edit-comment-deprecated.ts:14

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

base/issue/issue-edit-comment-deprecated.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-edit-comment-deprecated.ts:12
