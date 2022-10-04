[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueGetMilestonesListParams

# Interface: issueGetMilestonesListParams

[base](../modules/base.md).issueGetMilestonesListParams

## Hierarchy

- `baseParams`

  ↳ **`issueGetMilestonesListParams`**

## Table of contents

### Properties

- [auth](base.issueGetMilestonesListParams.md#auth)
- [limit](base.issueGetMilestonesListParams.md#limit)
- [name](base.issueGetMilestonesListParams.md#name)
- [options](base.issueGetMilestonesListParams.md#options)
- [owner](base.issueGetMilestonesListParams.md#owner)
- [page](base.issueGetMilestonesListParams.md#page)
- [repo](base.issueGetMilestonesListParams.md#repo)
- [state](base.issueGetMilestonesListParams.md#state)

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

base/issue/issue-get-milestones-list.ts:16

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

filter by milestone name

#### Defined in

base/issue/issue-get-milestones-list.ts:12

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

base/issue/issue-get-milestones-list.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-get-milestones-list.ts:14

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-get-milestones-list.ts:8

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

Milestone state, Recognised values are open, closed and all. Defaults to &quot;open&quot;

#### Defined in

base/issue/issue-get-milestones-list.ts:10
