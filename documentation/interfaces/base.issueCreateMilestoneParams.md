[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueCreateMilestoneParams

# Interface: issueCreateMilestoneParams

[base](../modules/base.md).issueCreateMilestoneParams

## Hierarchy

- `baseParams`

  ↳ **`issueCreateMilestoneParams`**

## Table of contents

### Properties

- [auth](base.issueCreateMilestoneParams.md#auth)
- [body](base.issueCreateMilestoneParams.md#body)
- [options](base.issueCreateMilestoneParams.md#options)
- [owner](base.issueCreateMilestoneParams.md#owner)
- [repo](base.issueCreateMilestoneParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateMilestoneOption`](base.CreateMilestoneOption.md)

#### Defined in

base/issue/issue-create-milestone.ts:10

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

base/issue/issue-create-milestone.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-create-milestone.ts:9
