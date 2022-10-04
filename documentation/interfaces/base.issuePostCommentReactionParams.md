[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issuePostCommentReactionParams

# Interface: issuePostCommentReactionParams

[base](../modules/base.md).issuePostCommentReactionParams

## Hierarchy

- `baseParams`

  ↳ **`issuePostCommentReactionParams`**

## Table of contents

### Properties

- [auth](base.issuePostCommentReactionParams.md#auth)
- [body](base.issuePostCommentReactionParams.md#body)
- [id](base.issuePostCommentReactionParams.md#id)
- [options](base.issuePostCommentReactionParams.md#options)
- [owner](base.issuePostCommentReactionParams.md#owner)
- [repo](base.issuePostCommentReactionParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditReactionOption`](base.EditReactionOption.md)

#### Defined in

base/issue/issue-post-comment-reaction.ts:13

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the comment to edit

#### Defined in

base/issue/issue-post-comment-reaction.ts:12

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

base/issue/issue-post-comment-reaction.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-post-comment-reaction.ts:10
