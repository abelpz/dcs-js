[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueEditMilestoneParams

# Interface: issueEditMilestoneParams

[base](../modules/base.md).issueEditMilestoneParams

## Hierarchy

- `baseParams`

  ↳ **`issueEditMilestoneParams`**

## Table of contents

### Properties

- [auth](base.issueEditMilestoneParams.md#auth)
- [body](base.issueEditMilestoneParams.md#body)
- [id](base.issueEditMilestoneParams.md#id)
- [options](base.issueEditMilestoneParams.md#options)
- [owner](base.issueEditMilestoneParams.md#owner)
- [repo](base.issueEditMilestoneParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditMilestoneOption`](base.EditMilestoneOption.md)

#### Defined in

base/issue/issue-edit-milestone.ts:12

___

### <a id="id" name="id"></a> id

• **id**: `string`

the milestone to edit, identified by ID and if not available by name

#### Defined in

base/issue/issue-edit-milestone.ts:11

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

base/issue/issue-edit-milestone.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-edit-milestone.ts:9
