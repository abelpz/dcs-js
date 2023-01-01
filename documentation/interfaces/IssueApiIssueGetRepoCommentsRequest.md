[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueGetRepoCommentsRequest

# Interface: IssueApiIssueGetRepoCommentsRequest

Request parameters for issueGetRepoComments operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueGetRepoCommentsRequest

## Table of contents

### Properties

- [before](IssueApiIssueGetRepoCommentsRequest.md#before)
- [limit](IssueApiIssueGetRepoCommentsRequest.md#limit)
- [owner](IssueApiIssueGetRepoCommentsRequest.md#owner)
- [page](IssueApiIssueGetRepoCommentsRequest.md#page)
- [repo](IssueApiIssueGetRepoCommentsRequest.md#repo)
- [since](IssueApiIssueGetRepoCommentsRequest.md#since)

## Properties

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

if provided, only comments updated before the provided time are returned.

**`memberof`** IssueApiIssueGetRepoComments

#### Defined in

[apis/issue-api.ts:6048](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6048)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** IssueApiIssueGetRepoComments

#### Defined in

[apis/issue-api.ts:6062](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6062)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** IssueApiIssueGetRepoComments

#### Defined in

[apis/issue-api.ts:6027](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6027)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** IssueApiIssueGetRepoComments

#### Defined in

[apis/issue-api.ts:6055](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6055)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** IssueApiIssueGetRepoComments

#### Defined in

[apis/issue-api.ts:6034](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6034)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

if provided, only comments updated since the provided time are returned.

**`memberof`** IssueApiIssueGetRepoComments

#### Defined in

[apis/issue-api.ts:6041](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6041)
