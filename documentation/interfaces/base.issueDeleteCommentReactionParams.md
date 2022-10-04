[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueDeleteCommentReactionParams

# Interface: issueDeleteCommentReactionParams

[base](../modules/base.md).issueDeleteCommentReactionParams

## Hierarchy

- `baseParams`

  ↳ **`issueDeleteCommentReactionParams`**

## Table of contents

### Properties

- [auth](base.issueDeleteCommentReactionParams.md#auth)
- [body](base.issueDeleteCommentReactionParams.md#body)
- [id](base.issueDeleteCommentReactionParams.md#id)
- [options](base.issueDeleteCommentReactionParams.md#options)
- [owner](base.issueDeleteCommentReactionParams.md#owner)
- [repo](base.issueDeleteCommentReactionParams.md#repo)

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

base/issue/issue-delete-comment-reaction.ts:13

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the comment to edit

#### Defined in

base/issue/issue-delete-comment-reaction.ts:12

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

base/issue/issue-delete-comment-reaction.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-delete-comment-reaction.ts:10
