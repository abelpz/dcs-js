[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetCommentParams

# Interface: issueGetCommentParams

[base](../modules/base.md).issueGetCommentParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetCommentParams`**

## Table of contents

### Properties

- [auth](base.issueGetCommentParams.md#auth)
- [id](base.issueGetCommentParams.md#id)
- [options](base.issueGetCommentParams.md#options)
- [owner](base.issueGetCommentParams.md#owner)
- [repo](base.issueGetCommentParams.md#repo)

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

id of the comment

#### Defined in

base/issue/issue-get-comment.ts:13

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

base/issue/issue-get-comment.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-comment.ts:11
