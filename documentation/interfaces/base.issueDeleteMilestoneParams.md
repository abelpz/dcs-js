[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueDeleteMilestoneParams

# Interface: issueDeleteMilestoneParams

[base](../modules/base.md).issueDeleteMilestoneParams

## Hierarchy

- `baseParams`

  ↳ **`issueDeleteMilestoneParams`**

## Table of contents

### Properties

- [auth](base.issueDeleteMilestoneParams.md#auth)
- [id](base.issueDeleteMilestoneParams.md#id)
- [options](base.issueDeleteMilestoneParams.md#options)
- [owner](base.issueDeleteMilestoneParams.md#owner)
- [repo](base.issueDeleteMilestoneParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `string`

the milestone to delete, identified by ID and if not available by name

#### Defined in

base/issue/issue-delete-milestone.ts:10

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

base/issue/issue-delete-milestone.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-delete-milestone.ts:8
