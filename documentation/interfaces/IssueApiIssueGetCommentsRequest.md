[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueGetCommentsRequest

# Interface: IssueApiIssueGetCommentsRequest

Request parameters for issueGetComments operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueGetCommentsRequest

## Table of contents

### Properties

- [before](IssueApiIssueGetCommentsRequest.md#before)
- [index](IssueApiIssueGetCommentsRequest.md#index)
- [owner](IssueApiIssueGetCommentsRequest.md#owner)
- [repo](IssueApiIssueGetCommentsRequest.md#repo)
- [since](IssueApiIssueGetCommentsRequest.md#since)

## Properties

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

if provided, only comments updated before the provided time are returned.

**`memberof`** IssueApiIssueGetComments

#### Defined in

[apis/issue-api.ts:5754](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5754)

___

### <a id="index" name="index"></a> index

• `Readonly` **index**: `number`

index of the issue

**`memberof`** IssueApiIssueGetComments

#### Defined in

[apis/issue-api.ts:5740](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5740)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** IssueApiIssueGetComments

#### Defined in

[apis/issue-api.ts:5726](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5726)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** IssueApiIssueGetComments

#### Defined in

[apis/issue-api.ts:5733](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5733)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

if provided, only comments updated since the specified time are returned.

**`memberof`** IssueApiIssueGetComments

#### Defined in

[apis/issue-api.ts:5747](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5747)
