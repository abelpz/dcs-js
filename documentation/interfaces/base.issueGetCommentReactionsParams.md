[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetCommentReactionsParams

# Interface: issueGetCommentReactionsParams

[base](../modules/base.md).issueGetCommentReactionsParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetCommentReactionsParams`**

## Table of contents

### Properties

- [auth](base.issueGetCommentReactionsParams.md#auth)
- [id](base.issueGetCommentReactionsParams.md#id)
- [options](base.issueGetCommentReactionsParams.md#options)
- [owner](base.issueGetCommentReactionsParams.md#owner)
- [repo](base.issueGetCommentReactionsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the comment to edit

#### Defined in

base/issue/issue-get-comment-reactions.ts:11

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

base/issue/issue-get-comment-reactions.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-comment-reactions.ts:9
