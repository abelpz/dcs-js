[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueListIssuesParams

# Interface: issueListIssuesParams

[base](../modules/base.md).issueListIssuesParams

## Hierarchy

- `baseParams`

  ↳ **`issueListIssuesParams`**

## Table of contents

### Properties

- [assignedBy](base.issueListIssuesParams.md#assignedby)
- [auth](base.issueListIssuesParams.md#auth)
- [before](base.issueListIssuesParams.md#before)
- [createdBy](base.issueListIssuesParams.md#createdby)
- [labels](base.issueListIssuesParams.md#labels)
- [limit](base.issueListIssuesParams.md#limit)
- [mentionedBy](base.issueListIssuesParams.md#mentionedby)
- [milestones](base.issueListIssuesParams.md#milestones)
- [options](base.issueListIssuesParams.md#options)
- [owner](base.issueListIssuesParams.md#owner)
- [page](base.issueListIssuesParams.md#page)
- [q](base.issueListIssuesParams.md#q)
- [repo](base.issueListIssuesParams.md#repo)
- [since](base.issueListIssuesParams.md#since)
- [state](base.issueListIssuesParams.md#state)
- [type](base.issueListIssuesParams.md#type)

## Properties

### <a id="assignedby" name="assignedby"></a> assignedBy

• `Optional` **assignedBy**: `string`

Only show items for which the given user is assigned

#### Defined in

base/issue/issue-list-issues.ts:26

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

Only show items updated before the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/issue/issue-list-issues.ts:22

___

### <a id="createdby" name="createdby"></a> createdBy

• `Optional` **createdBy**: `string`

Only show items which were created by the the given user

#### Defined in

base/issue/issue-list-issues.ts:24

___

### <a id="labels" name="labels"></a> labels

• `Optional` **labels**: `string`

comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded

#### Defined in

base/issue/issue-list-issues.ts:12

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/issue/issue-list-issues.ts:32

___

### <a id="mentionedby" name="mentionedby"></a> mentionedBy

• `Optional` **mentionedBy**: `string`

Only show items in which the given user was mentioned

#### Defined in

base/issue/issue-list-issues.ts:28

___

### <a id="milestones" name="milestones"></a> milestones

• `Optional` **milestones**: `string`

comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded

#### Defined in

base/issue/issue-list-issues.ts:18

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

base/issue/issue-list-issues.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/issue/issue-list-issues.ts:30

___

### <a id="q" name="q"></a> q

• `Optional` **q**: `string`

search string

#### Defined in

base/issue/issue-list-issues.ts:14

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-list-issues.ts:8

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

Only show items updated after the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/issue/issue-list-issues.ts:20

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

whether issue is open or closed

#### Defined in

base/issue/issue-list-issues.ts:10

___

### <a id="type" name="type"></a> type

• `Optional` **type**: `string`

filter by type (issues / pulls) if set

#### Defined in

base/issue/issue-list-issues.ts:16
