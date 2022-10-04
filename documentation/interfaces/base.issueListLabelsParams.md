[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueListLabelsParams

# Interface: issueListLabelsParams

[base](../modules/base.md).issueListLabelsParams

## Hierarchy

- `baseParams`

  ↳ **`issueListLabelsParams`**

## Table of contents

### Properties

- [auth](base.issueListLabelsParams.md#auth)
- [limit](base.issueListLabelsParams.md#limit)
- [options](base.issueListLabelsParams.md#options)
- [owner](base.issueListLabelsParams.md#owner)
- [page](base.issueListLabelsParams.md#page)
- [repo](base.issueListLabelsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/issue/issue-list-labels.ts:12

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

base/issue/issue-list-labels.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-list-labels.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-list-labels.ts:8
