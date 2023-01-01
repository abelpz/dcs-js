[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueTrackedTimesRequest

# Interface: IssueApiIssueTrackedTimesRequest

Request parameters for issueTrackedTimes operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueTrackedTimesRequest

## Table of contents

### Properties

- [before](IssueApiIssueTrackedTimesRequest.md#before)
- [index](IssueApiIssueTrackedTimesRequest.md#index)
- [limit](IssueApiIssueTrackedTimesRequest.md#limit)
- [owner](IssueApiIssueTrackedTimesRequest.md#owner)
- [page](IssueApiIssueTrackedTimesRequest.md#page)
- [repo](IssueApiIssueTrackedTimesRequest.md#repo)
- [since](IssueApiIssueTrackedTimesRequest.md#since)
- [user](IssueApiIssueTrackedTimesRequest.md#user)

## Properties

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

Only show times updated before the given time. This is a timestamp in RFC 3339 format

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6636](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6636)

___

### <a id="index" name="index"></a> index

• `Readonly` **index**: `number`

index of the issue

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6615](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6615)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6650](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6650)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6601](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6601)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6643](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6643)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6608](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6608)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

Only show times updated after the given time. This is a timestamp in RFC 3339 format

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6629](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6629)

___

### <a id="user" name="user"></a> user

• `Optional` `Readonly` **user**: `string`

optional filter by user (available for issue managers)

**`memberof`** IssueApiIssueTrackedTimes

#### Defined in

[apis/issue-api.ts:6622](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6622)
