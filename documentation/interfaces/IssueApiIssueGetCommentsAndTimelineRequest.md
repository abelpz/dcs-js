[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueGetCommentsAndTimelineRequest

# Interface: IssueApiIssueGetCommentsAndTimelineRequest

Request parameters for issueGetCommentsAndTimeline operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueGetCommentsAndTimelineRequest

## Table of contents

### Properties

- [before](IssueApiIssueGetCommentsAndTimelineRequest.md#before)
- [index](IssueApiIssueGetCommentsAndTimelineRequest.md#index)
- [limit](IssueApiIssueGetCommentsAndTimelineRequest.md#limit)
- [owner](IssueApiIssueGetCommentsAndTimelineRequest.md#owner)
- [page](IssueApiIssueGetCommentsAndTimelineRequest.md#page)
- [repo](IssueApiIssueGetCommentsAndTimelineRequest.md#repo)
- [since](IssueApiIssueGetCommentsAndTimelineRequest.md#since)

## Properties

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

if provided, only comments updated before the provided time are returned.

**`memberof`** IssueApiIssueGetCommentsAndTimeline

#### Defined in

[apis/issue-api.ts:5810](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5810)

___

### <a id="index" name="index"></a> index

• `Readonly` **index**: `number`

index of the issue

**`memberof`** IssueApiIssueGetCommentsAndTimeline

#### Defined in

[apis/issue-api.ts:5782](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5782)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** IssueApiIssueGetCommentsAndTimeline

#### Defined in

[apis/issue-api.ts:5803](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5803)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** IssueApiIssueGetCommentsAndTimeline

#### Defined in

[apis/issue-api.ts:5768](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5768)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** IssueApiIssueGetCommentsAndTimeline

#### Defined in

[apis/issue-api.ts:5796](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5796)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** IssueApiIssueGetCommentsAndTimeline

#### Defined in

[apis/issue-api.ts:5775](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5775)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

if provided, only comments updated since the specified time are returned.

**`memberof`** IssueApiIssueGetCommentsAndTimeline

#### Defined in

[apis/issue-api.ts:5789](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5789)
