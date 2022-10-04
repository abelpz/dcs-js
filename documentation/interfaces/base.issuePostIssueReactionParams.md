[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issuePostIssueReactionParams

# Interface: issuePostIssueReactionParams

[base](../modules/base.md).issuePostIssueReactionParams

## Hierarchy

- `baseParams`

  ↳ **`issuePostIssueReactionParams`**

## Table of contents

### Properties

- [auth](base.issuePostIssueReactionParams.md#auth)
- [body](base.issuePostIssueReactionParams.md#body)
- [index](base.issuePostIssueReactionParams.md#index)
- [options](base.issuePostIssueReactionParams.md#options)
- [owner](base.issuePostIssueReactionParams.md#owner)
- [repo](base.issuePostIssueReactionParams.md#repo)

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

base/issue/issue-post-issue-reaction.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-post-issue-reaction.ts:12

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

base/issue/issue-post-issue-reaction.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-post-issue-reaction.ts:10
