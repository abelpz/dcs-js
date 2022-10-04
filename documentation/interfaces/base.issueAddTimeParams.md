[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueAddTimeParams

# Interface: issueAddTimeParams

[base](../modules/base.md).issueAddTimeParams

## Hierarchy

- `baseParams`

  ↳ **`issueAddTimeParams`**

## Table of contents

### Properties

- [auth](base.issueAddTimeParams.md#auth)
- [body](base.issueAddTimeParams.md#body)
- [index](base.issueAddTimeParams.md#index)
- [options](base.issueAddTimeParams.md#options)
- [owner](base.issueAddTimeParams.md#owner)
- [repo](base.issueAddTimeParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`AddTimeOption`](base.AddTimeOption.md)

#### Defined in

base/issue/issue-add-time.ts:14

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-add-time.ts:13

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

base/issue/issue-add-time.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-add-time.ts:11
