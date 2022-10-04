[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueRemoveLabelParams

# Interface: issueRemoveLabelParams

[base](../modules/base.md).issueRemoveLabelParams

## Hierarchy

- `baseParams`

  ↳ **`issueRemoveLabelParams`**

## Table of contents

### Properties

- [auth](base.issueRemoveLabelParams.md#auth)
- [id](base.issueRemoveLabelParams.md#id)
- [index](base.issueRemoveLabelParams.md#index)
- [options](base.issueRemoveLabelParams.md#options)
- [owner](base.issueRemoveLabelParams.md#owner)
- [repo](base.issueRemoveLabelParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the label to remove

#### Defined in

base/issue/issue-remove-label.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-remove-label.ts:12

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

base/issue/issue-remove-label.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-remove-label.ts:10
