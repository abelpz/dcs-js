[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetIssueReactionsParams

# Interface: issueGetIssueReactionsParams

[base](../modules/base.md).issueGetIssueReactionsParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetIssueReactionsParams`**

## Table of contents

### Properties

- [auth](base.issueGetIssueReactionsParams.md#auth)
- [index](base.issueGetIssueReactionsParams.md#index)
- [limit](base.issueGetIssueReactionsParams.md#limit)
- [options](base.issueGetIssueReactionsParams.md#options)
- [owner](base.issueGetIssueReactionsParams.md#owner)
- [page](base.issueGetIssueReactionsParams.md#page)
- [repo](base.issueGetIssueReactionsParams.md#repo)

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

index of the issue

#### Defined in

base/issue/issue-get-issue-reactions.ts:11

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/issue/issue-get-issue-reactions.ts:15

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

base/issue/issue-get-issue-reactions.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-get-issue-reactions.ts:13

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-issue-reactions.ts:9
