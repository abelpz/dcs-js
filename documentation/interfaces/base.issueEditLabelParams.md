[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueEditLabelParams

# Interface: issueEditLabelParams

[base](../modules/base.md).issueEditLabelParams

## Hierarchy

- `baseParams`

  ↳ **`issueEditLabelParams`**

## Table of contents

### Properties

- [auth](base.issueEditLabelParams.md#auth)
- [body](base.issueEditLabelParams.md#body)
- [id](base.issueEditLabelParams.md#id)
- [options](base.issueEditLabelParams.md#options)
- [owner](base.issueEditLabelParams.md#owner)
- [repo](base.issueEditLabelParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditLabelOption`](base.EditLabelOption.md)

#### Defined in

base/issue/issue-edit-label.ts:13

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the label to edit

#### Defined in

base/issue/issue-edit-label.ts:12

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

base/issue/issue-edit-label.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-edit-label.ts:10
