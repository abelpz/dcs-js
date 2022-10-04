[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueSearchIssuesParams

# Interface: issueSearchIssuesParams

[base](../modules/base.md).issueSearchIssuesParams

## Hierarchy

- `baseParams`

  ↳ **`issueSearchIssuesParams`**

## Table of contents

### Properties

- [assigned](base.issueSearchIssuesParams.md#assigned)
- [auth](base.issueSearchIssuesParams.md#auth)
- [before](base.issueSearchIssuesParams.md#before)
- [created](base.issueSearchIssuesParams.md#created)
- [labels](base.issueSearchIssuesParams.md#labels)
- [limit](base.issueSearchIssuesParams.md#limit)
- [mentioned](base.issueSearchIssuesParams.md#mentioned)
- [milestones](base.issueSearchIssuesParams.md#milestones)
- [options](base.issueSearchIssuesParams.md#options)
- [owner](base.issueSearchIssuesParams.md#owner)
- [page](base.issueSearchIssuesParams.md#page)
- [priorityRepoId](base.issueSearchIssuesParams.md#priorityrepoid)
- [q](base.issueSearchIssuesParams.md#q)
- [reviewRequested](base.issueSearchIssuesParams.md#reviewrequested)
- [since](base.issueSearchIssuesParams.md#since)
- [state](base.issueSearchIssuesParams.md#state)
- [team](base.issueSearchIssuesParams.md#team)
- [type](base.issueSearchIssuesParams.md#type)

## Properties

### <a id="assigned" name="assigned"></a> assigned

• `Optional` **assigned**: `boolean`

filter (issues / pulls) assigned to you, default is false

#### Defined in

base/issue/issue-search-issues.ts:22

___

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="before" name="before"></a> before

• `Optional` **before**: `string`

Only show notifications updated before the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/issue/issue-search-issues.ts:20

___

### <a id="created" name="created"></a> created

• `Optional` **created**: `boolean`

filter (issues / pulls) created by you, default is false

#### Defined in

base/issue/issue-search-issues.ts:24

___

### <a id="labels" name="labels"></a> labels

• `Optional` **labels**: `string`

comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded

#### Defined in

base/issue/issue-search-issues.ts:8

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/issue/issue-search-issues.ts:36

___

### <a id="mentioned" name="mentioned"></a> mentioned

• `Optional` **mentioned**: `boolean`

filter (issues / pulls) mentioning you, default is false

#### Defined in

base/issue/issue-search-issues.ts:26

___

### <a id="milestones" name="milestones"></a> milestones

• `Optional` **milestones**: `string`

comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded

#### Defined in

base/issue/issue-search-issues.ts:10

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

• `Optional` **owner**: `string`

filter by owner

#### Defined in

base/issue/issue-search-issues.ts:30

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-search-issues.ts:34

___

### <a id="priorityrepoid" name="priorityrepoid"></a> priorityRepoId

• `Optional` **priorityRepoId**: `number`

repository to prioritize in the results

#### Defined in

base/issue/issue-search-issues.ts:14

___

### <a id="q" name="q"></a> q

• `Optional` **q**: `string`

search string

#### Defined in

base/issue/issue-search-issues.ts:12

___

### <a id="reviewrequested" name="reviewrequested"></a> reviewRequested

• `Optional` **reviewRequested**: `boolean`

filter pulls requesting your review, default is false

#### Defined in

base/issue/issue-search-issues.ts:28

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

Only show notifications updated after the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/issue/issue-search-issues.ts:18

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

whether issue is open or closed

#### Defined in

base/issue/issue-search-issues.ts:6

___

### <a id="team" name="team"></a> team

• `Optional` **team**: `string`

filter by team (requires organization owner parameter to be provided)

#### Defined in

base/issue/issue-search-issues.ts:32

___

### <a id="type" name="type"></a> type

• `Optional` **type**: `string`

filter by type (issues / pulls) if set

#### Defined in

base/issue/issue-search-issues.ts:16
