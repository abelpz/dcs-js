[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetMilestoneParams

# Interface: issueGetMilestoneParams

[base](../modules/base.md).issueGetMilestoneParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetMilestoneParams`**

## Table of contents

### Properties

- [auth](base.issueGetMilestoneParams.md#auth)
- [id](base.issueGetMilestoneParams.md#id)
- [options](base.issueGetMilestoneParams.md#options)
- [owner](base.issueGetMilestoneParams.md#owner)
- [repo](base.issueGetMilestoneParams.md#repo)

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

the milestone to get, identified by ID and if not available by name

#### Defined in

base/issue/issue-get-milestone.ts:10

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

base/issue/issue-get-milestone.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-milestone.ts:8
