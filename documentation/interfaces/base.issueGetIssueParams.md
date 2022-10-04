[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetIssueParams

# Interface: issueGetIssueParams

[base](../modules/base.md).issueGetIssueParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetIssueParams`**

## Table of contents

### Properties

- [auth](base.issueGetIssueParams.md#auth)
- [index](base.issueGetIssueParams.md#index)
- [options](base.issueGetIssueParams.md#options)
- [owner](base.issueGetIssueParams.md#owner)
- [repo](base.issueGetIssueParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue to get

#### Defined in

base/issue/issue-get-issue.ts:11

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

base/issue/issue-get-issue.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-issue.ts:9
