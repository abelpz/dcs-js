[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueCreateIssueParams

# Interface: issueCreateIssueParams

[base](../modules/base.md).issueCreateIssueParams

## Hierarchy

- `baseParams`

  ↳ **`issueCreateIssueParams`**

## Table of contents

### Properties

- [auth](base.issueCreateIssueParams.md#auth)
- [body](base.issueCreateIssueParams.md#body)
- [options](base.issueCreateIssueParams.md#options)
- [owner](base.issueCreateIssueParams.md#owner)
- [repo](base.issueCreateIssueParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateIssueOption`](base.CreateIssueOption.md)

#### Defined in

base/issue/issue-create-issue.ts:13

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

base/issue/issue-create-issue.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-create-issue.ts:12
