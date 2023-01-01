[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueGetMilestonesListRequest

# Interface: IssueApiIssueGetMilestonesListRequest

Request parameters for issueGetMilestonesList operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueGetMilestonesListRequest

## Table of contents

### Properties

- [limit](IssueApiIssueGetMilestonesListRequest.md#limit)
- [name](IssueApiIssueGetMilestonesListRequest.md#name)
- [owner](IssueApiIssueGetMilestonesListRequest.md#owner)
- [page](IssueApiIssueGetMilestonesListRequest.md#page)
- [repo](IssueApiIssueGetMilestonesListRequest.md#repo)
- [state](IssueApiIssueGetMilestonesListRequest.md#state)

## Properties

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** IssueApiIssueGetMilestonesList

#### Defined in

[apis/issue-api.ts:6013](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6013)

___

### <a id="name" name="name"></a> name

• `Optional` `Readonly` **name**: `string`

filter by milestone name

**`memberof`** IssueApiIssueGetMilestonesList

#### Defined in

[apis/issue-api.ts:5999](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5999)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** IssueApiIssueGetMilestonesList

#### Defined in

[apis/issue-api.ts:5978](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5978)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** IssueApiIssueGetMilestonesList

#### Defined in

[apis/issue-api.ts:6006](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6006)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** IssueApiIssueGetMilestonesList

#### Defined in

[apis/issue-api.ts:5985](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5985)

___

### <a id="state" name="state"></a> state

• `Optional` `Readonly` **state**: `string`

Milestone state, Recognized values are open, closed and all. Defaults to \&quot;open\&quot;

**`memberof`** IssueApiIssueGetMilestonesList

#### Defined in

[apis/issue-api.ts:5992](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5992)
