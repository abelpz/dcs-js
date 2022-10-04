[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueEditIssueDeadlineParams

# Interface: issueEditIssueDeadlineParams

[base](../modules/base.md).issueEditIssueDeadlineParams

## Hierarchy

- `baseParams`

  ↳ **`issueEditIssueDeadlineParams`**

## Table of contents

### Properties

- [auth](base.issueEditIssueDeadlineParams.md#auth)
- [body](base.issueEditIssueDeadlineParams.md#body)
- [index](base.issueEditIssueDeadlineParams.md#index)
- [options](base.issueEditIssueDeadlineParams.md#options)
- [owner](base.issueEditIssueDeadlineParams.md#owner)
- [repo](base.issueEditIssueDeadlineParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditDeadlineOption`](base.EditDeadlineOption.md)

#### Defined in

base/issue/issue-edit-issue-deadline.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue to create or update a deadline on

#### Defined in

base/issue/issue-edit-issue-deadline.ts:13

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

base/issue/issue-edit-issue-deadline.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-edit-issue-deadline.ts:11
