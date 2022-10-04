[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueCreateLabelParams

# Interface: issueCreateLabelParams

[base](../modules/base.md).issueCreateLabelParams

## Hierarchy

- `baseParams`

  ↳ **`issueCreateLabelParams`**

## Table of contents

### Properties

- [auth](base.issueCreateLabelParams.md#auth)
- [body](base.issueCreateLabelParams.md#body)
- [options](base.issueCreateLabelParams.md#options)
- [owner](base.issueCreateLabelParams.md#owner)
- [repo](base.issueCreateLabelParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateLabelOption`](base.CreateLabelOption.md)

#### Defined in

base/issue/issue-create-label.ts:11

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

base/issue/issue-create-label.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-create-label.ts:10
