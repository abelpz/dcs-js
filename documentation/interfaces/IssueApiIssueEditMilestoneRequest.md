[dcs-js](../README.md) / [Exports](../modules.md) / IssueApiIssueEditMilestoneRequest

# Interface: IssueApiIssueEditMilestoneRequest

Request parameters for issueEditMilestone operation in IssueApi.

**`export`**

**`interface`** IssueApiIssueEditMilestoneRequest

## Table of contents

### Properties

- [body](IssueApiIssueEditMilestoneRequest.md#body)
- [id](IssueApiIssueEditMilestoneRequest.md#id)
- [owner](IssueApiIssueEditMilestoneRequest.md#owner)
- [repo](IssueApiIssueEditMilestoneRequest.md#repo)

## Properties

### <a id="body" name="body"></a> body

• `Optional` `Readonly` **body**: [`EditMilestoneOption`](EditMilestoneOption.md)

**`memberof`** IssueApiIssueEditMilestone

#### Defined in

[apis/issue-api.ts:5656](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5656)

___

### <a id="id" name="id"></a> id

• `Readonly` **id**: `string`

the milestone to edit, identified by ID and if not available by name

**`memberof`** IssueApiIssueEditMilestone

#### Defined in

[apis/issue-api.ts:5649](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5649)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** IssueApiIssueEditMilestone

#### Defined in

[apis/issue-api.ts:5635](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5635)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** IssueApiIssueEditMilestone

#### Defined in

[apis/issue-api.ts:5642](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L5642)
