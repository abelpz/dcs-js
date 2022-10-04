[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueDeleteLabelParams

# Interface: issueDeleteLabelParams

[base](../modules/base.md).issueDeleteLabelParams

## Hierarchy

- `baseParams`

  ↳ **`issueDeleteLabelParams`**

## Table of contents

### Properties

- [auth](base.issueDeleteLabelParams.md#auth)
- [id](base.issueDeleteLabelParams.md#id)
- [options](base.issueDeleteLabelParams.md#options)
- [owner](base.issueDeleteLabelParams.md#owner)
- [repo](base.issueDeleteLabelParams.md#repo)

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

id of the label to delete

#### Defined in

base/issue/issue-delete-label.ts:10

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

base/issue/issue-delete-label.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-delete-label.ts:8
