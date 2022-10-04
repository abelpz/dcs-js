[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueReplaceLabelsParams

# Interface: issueReplaceLabelsParams

[base](../modules/base.md).issueReplaceLabelsParams

## Hierarchy

- `baseParams`

  ↳ **`issueReplaceLabelsParams`**

## Table of contents

### Properties

- [auth](base.issueReplaceLabelsParams.md#auth)
- [body](base.issueReplaceLabelsParams.md#body)
- [index](base.issueReplaceLabelsParams.md#index)
- [options](base.issueReplaceLabelsParams.md#options)
- [owner](base.issueReplaceLabelsParams.md#owner)
- [repo](base.issueReplaceLabelsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`IssueLabelsOption`](base.IssueLabelsOption.md)

#### Defined in

base/issue/issue-replace-labels.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-replace-labels.ts:12

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

base/issue/issue-replace-labels.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-replace-labels.ts:10
