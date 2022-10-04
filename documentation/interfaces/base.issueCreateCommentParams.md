[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueCreateCommentParams

# Interface: issueCreateCommentParams

[base](../modules/base.md).issueCreateCommentParams

## Hierarchy

- `baseParams`

  ↳ **`issueCreateCommentParams`**

## Table of contents

### Properties

- [auth](base.issueCreateCommentParams.md#auth)
- [body](base.issueCreateCommentParams.md#body)
- [index](base.issueCreateCommentParams.md#index)
- [options](base.issueCreateCommentParams.md#options)
- [owner](base.issueCreateCommentParams.md#owner)
- [repo](base.issueCreateCommentParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateIssueCommentOption`](base.CreateIssueCommentOption.md)

#### Defined in

base/issue/issue-create-comment.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-create-comment.ts:12

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

base/issue/issue-create-comment.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-create-comment.ts:10
