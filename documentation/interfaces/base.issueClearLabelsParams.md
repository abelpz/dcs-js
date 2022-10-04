[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueClearLabelsParams

# Interface: issueClearLabelsParams

[base](../modules/base.md).issueClearLabelsParams

## Hierarchy

- `baseParams`

  ↳ **`issueClearLabelsParams`**

## Table of contents

### Properties

- [auth](base.issueClearLabelsParams.md#auth)
- [index](base.issueClearLabelsParams.md#index)
- [options](base.issueClearLabelsParams.md#options)
- [owner](base.issueClearLabelsParams.md#owner)
- [repo](base.issueClearLabelsParams.md#repo)

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

base/issue/issue-clear-labels.ts:11

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

base/issue/issue-clear-labels.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-clear-labels.ts:9
