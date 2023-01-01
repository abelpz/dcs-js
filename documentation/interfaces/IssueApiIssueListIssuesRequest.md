[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueListIssuesRequest

# Interface: IssueApiIssueListIssuesRequest

Request parameters for issueListIssues operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueListIssuesRequest

## Table of contents

### Properties

- [assignedBy](IssueApiIssueListIssuesRequest.md#assignedby)
- [before](IssueApiIssueListIssuesRequest.md#before)
- [createdBy](IssueApiIssueListIssuesRequest.md#createdby)
- [labels](IssueApiIssueListIssuesRequest.md#labels)
- [limit](IssueApiIssueListIssuesRequest.md#limit)
- [mentionedBy](IssueApiIssueListIssuesRequest.md#mentionedby)
- [milestones](IssueApiIssueListIssuesRequest.md#milestones)
- [owner](IssueApiIssueListIssuesRequest.md#owner)
- [page](IssueApiIssueListIssuesRequest.md#page)
- [q](IssueApiIssueListIssuesRequest.md#q)
- [repo](IssueApiIssueListIssuesRequest.md#repo)
- [since](IssueApiIssueListIssuesRequest.md#since)
- [state](IssueApiIssueListIssuesRequest.md#state)
- [type](IssueApiIssueListIssuesRequest.md#type)

## Properties

### <a id="assignedby" name="assignedby"></a> assignedBy

• `Optional` `Readonly` **assignedBy**: `string`

Only show items for which the given user is assigned

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6146](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6146)

___

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

Only show items updated before the given time. This is a timestamp in RFC 3339 format

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6132](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6132)

___

### <a id="createdby" name="createdby"></a> createdBy

• `Optional` `Readonly` **createdBy**: `string`

Only show items which were created by the the given user

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6139](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6139)

___

### <a id="labels" name="labels"></a> labels

• `Optional` `Readonly` **labels**: `string`

comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6097](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6097)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6167](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6167)

___

### <a id="mentionedby" name="mentionedby"></a> mentionedBy

• `Optional` `Readonly` **mentionedBy**: `string`

Only show items in which the given user was mentioned

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6153](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6153)

___

### <a id="milestones" name="milestones"></a> milestones

• `Optional` `Readonly` **milestones**: `string`

comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6118](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6118)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6076](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6076)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6160](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6160)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

search string

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6104](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6104)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6083](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6083)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

Only show items updated after the given time. This is a timestamp in RFC 3339 format

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6125](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6125)

___

### <a id="state" name="state"></a> state

• `Optional` `Readonly` **state**: ``"all"`` \| ``"closed"`` \| ``"open"``

whether issue is open or closed

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6090](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6090)

___

### <a id="type" name="type"></a> type

• `Optional` `Readonly` **type**: ``"issues"`` \| ``"pulls"``

filter by type (issues / pulls) if set

**`memberof`** IssueApiIssueListIssues

#### Defined in

[apis/issue-api.ts:6111](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6111)
