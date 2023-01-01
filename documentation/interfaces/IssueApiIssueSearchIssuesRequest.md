[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueSearchIssuesRequest

# Interface: IssueApiIssueSearchIssuesRequest

Request parameters for issueSearchIssues operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueSearchIssuesRequest

## Table of contents

### Properties

- [assigned](IssueApiIssueSearchIssuesRequest.md#assigned)
- [before](IssueApiIssueSearchIssuesRequest.md#before)
- [created](IssueApiIssueSearchIssuesRequest.md#created)
- [labels](IssueApiIssueSearchIssuesRequest.md#labels)
- [limit](IssueApiIssueSearchIssuesRequest.md#limit)
- [mentioned](IssueApiIssueSearchIssuesRequest.md#mentioned)
- [milestones](IssueApiIssueSearchIssuesRequest.md#milestones)
- [owner](IssueApiIssueSearchIssuesRequest.md#owner)
- [page](IssueApiIssueSearchIssuesRequest.md#page)
- [priorityRepoId](IssueApiIssueSearchIssuesRequest.md#priorityrepoid)
- [q](IssueApiIssueSearchIssuesRequest.md#q)
- [reviewRequested](IssueApiIssueSearchIssuesRequest.md#reviewrequested)
- [since](IssueApiIssueSearchIssuesRequest.md#since)
- [state](IssueApiIssueSearchIssuesRequest.md#state)
- [team](IssueApiIssueSearchIssuesRequest.md#team)
- [type](IssueApiIssueSearchIssuesRequest.md#type)

## Properties

### <a id="assigned" name="assigned"></a> assigned

• `Optional` `Readonly` **assigned**: `boolean`

filter (issues / pulls) assigned to you, default is false

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6440](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6440)

___

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

Only show notifications updated before the given time. This is a timestamp in RFC 3339 format

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6433](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6433)

___

### <a id="created" name="created"></a> created

• `Optional` `Readonly` **created**: `boolean`

filter (issues / pulls) created by you, default is false

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6447](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6447)

___

### <a id="labels" name="labels"></a> labels

• `Optional` `Readonly` **labels**: `string`

comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6391](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6391)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6489](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6489)

___

### <a id="mentioned" name="mentioned"></a> mentioned

• `Optional` `Readonly` **mentioned**: `boolean`

filter (issues / pulls) mentioning you, default is false

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6454](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6454)

___

### <a id="milestones" name="milestones"></a> milestones

• `Optional` `Readonly` **milestones**: `string`

comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6398](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6398)

___

### <a id="owner" name="owner"></a> owner

• `Optional` `Readonly` **owner**: `string`

filter by owner

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6468](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6468)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6482](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6482)

___

### <a id="priorityrepoid" name="priorityrepoid"></a> priorityRepoId

• `Optional` `Readonly` **priorityRepoId**: `number`

repository to prioritize in the results

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6412](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6412)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

search string

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6405](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6405)

___

### <a id="reviewrequested" name="reviewrequested"></a> reviewRequested

• `Optional` `Readonly` **reviewRequested**: `boolean`

filter pulls requesting your review, default is false

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6461](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6461)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

Only show notifications updated after the given time. This is a timestamp in RFC 3339 format

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6426](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6426)

___

### <a id="state" name="state"></a> state

• `Optional` `Readonly` **state**: `string`

whether issue is open or closed

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6384](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6384)

___

### <a id="team" name="team"></a> team

• `Optional` `Readonly` **team**: `string`

filter by team (requires organization owner parameter to be provided)

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6475](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6475)

___

### <a id="type" name="type"></a> type

• `Optional` `Readonly` **type**: `string`

filter by type (issues / pulls) if set

**`memberof`** IssueApiIssueSearchIssues

#### Defined in

[apis/issue-api.ts:6419](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6419)
