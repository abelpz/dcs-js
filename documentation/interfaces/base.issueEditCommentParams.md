[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueEditCommentParams

# Interface: issueEditCommentParams

[base](../modules/base.md).issueEditCommentParams

## Hierarchy

- `baseParams`

  ↳ **`issueEditCommentParams`**

## Table of contents

### Properties

- [auth](base.issueEditCommentParams.md#auth)
- [body](base.issueEditCommentParams.md#body)
- [id](base.issueEditCommentParams.md#id)
- [options](base.issueEditCommentParams.md#options)
- [owner](base.issueEditCommentParams.md#owner)
- [repo](base.issueEditCommentParams.md#repo)

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

base/issue/issue-edit-comment.ts:15

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the comment to edit

#### Defined in

base/issue/issue-edit-comment.ts:14

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

base/issue/issue-edit-comment.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-edit-comment.ts:12
