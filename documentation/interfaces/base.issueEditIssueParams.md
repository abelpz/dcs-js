[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueEditIssueParams

# Interface: issueEditIssueParams

[base](../modules/base.md).issueEditIssueParams

## Hierarchy

- `baseParams`

  ↳ **`issueEditIssueParams`**

## Table of contents

### Properties

- [auth](base.issueEditIssueParams.md#auth)
- [body](base.issueEditIssueParams.md#body)
- [index](base.issueEditIssueParams.md#index)
- [options](base.issueEditIssueParams.md#options)
- [owner](base.issueEditIssueParams.md#owner)
- [repo](base.issueEditIssueParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditIssueOption`](base.EditIssueOption.md)

#### Defined in

base/issue/issue-edit-issue.ts:15

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue to edit

#### Defined in

base/issue/issue-edit-issue.ts:14

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

base/issue/issue-edit-issue.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-edit-issue.ts:12
