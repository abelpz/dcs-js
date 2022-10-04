[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetLabelParams

# Interface: issueGetLabelParams

[base](../modules/base.md).issueGetLabelParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetLabelParams`**

## Table of contents

### Properties

- [auth](base.issueGetLabelParams.md#auth)
- [id](base.issueGetLabelParams.md#id)
- [options](base.issueGetLabelParams.md#options)
- [owner](base.issueGetLabelParams.md#owner)
- [repo](base.issueGetLabelParams.md#repo)

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

id of the label to get

#### Defined in

base/issue/issue-get-label.ts:10

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

base/issue/issue-get-label.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-label.ts:8
