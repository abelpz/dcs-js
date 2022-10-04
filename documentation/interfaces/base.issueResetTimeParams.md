[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueResetTimeParams

# Interface: issueResetTimeParams

[base](../modules/base.md).issueResetTimeParams

## Hierarchy

- `baseParams`

  ↳ **`issueResetTimeParams`**

## Table of contents

### Properties

- [auth](base.issueResetTimeParams.md#auth)
- [index](base.issueResetTimeParams.md#index)
- [options](base.issueResetTimeParams.md#options)
- [owner](base.issueResetTimeParams.md#owner)
- [repo](base.issueResetTimeParams.md#repo)

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

index of the issue to add tracked time to

#### Defined in

base/issue/issue-reset-time.ts:12

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

base/issue/issue-reset-time.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-reset-time.ts:10
