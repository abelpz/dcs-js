[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueAddLabelParams

# Interface: issueAddLabelParams

[base](../modules/base.md).issueAddLabelParams

## Hierarchy

- `baseParams`

  ↳ **`issueAddLabelParams`**

## Table of contents

### Properties

- [auth](base.issueAddLabelParams.md#auth)
- [body](base.issueAddLabelParams.md#body)
- [index](base.issueAddLabelParams.md#index)
- [options](base.issueAddLabelParams.md#options)
- [owner](base.issueAddLabelParams.md#owner)
- [repo](base.issueAddLabelParams.md#repo)

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

base/issue/issue-add-label.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-add-label.ts:12

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

base/issue/issue-add-label.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-add-label.ts:10
