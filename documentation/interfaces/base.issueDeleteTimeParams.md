[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueDeleteTimeParams

# Interface: issueDeleteTimeParams

[base](../modules/base.md).issueDeleteTimeParams

## Hierarchy

- `baseParams`

  ↳ **`issueDeleteTimeParams`**

## Table of contents

### Properties

- [auth](base.issueDeleteTimeParams.md#auth)
- [id](base.issueDeleteTimeParams.md#id)
- [index](base.issueDeleteTimeParams.md#index)
- [options](base.issueDeleteTimeParams.md#options)
- [owner](base.issueDeleteTimeParams.md#owner)
- [repo](base.issueDeleteTimeParams.md#repo)

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

id of time to delete

#### Defined in

base/issue/issue-delete-time.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-delete-time.ts:12

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

base/issue/issue-delete-time.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-delete-time.ts:10
