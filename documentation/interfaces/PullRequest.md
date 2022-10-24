[dcs-js](../README.md) / [Exports](../modules.md) / PullRequest

# Interface: PullRequest

PullRequest represents a pull request

**`export`**

**`interface`** PullRequest

## Table of contents

### Properties

- [assignee](PullRequest.md#assignee)
- [assignees](PullRequest.md#assignees)
- [base](PullRequest.md#base)
- [body](PullRequest.md#body)
- [closed\_at](PullRequest.md#closed_at)
- [comments](PullRequest.md#comments)
- [created\_at](PullRequest.md#created_at)
- [diff\_url](PullRequest.md#diff_url)
- [due\_date](PullRequest.md#due_date)
- [head](PullRequest.md#head)
- [html\_url](PullRequest.md#html_url)
- [id](PullRequest.md#id)
- [is\_locked](PullRequest.md#is_locked)
- [labels](PullRequest.md#labels)
- [merge\_base](PullRequest.md#merge_base)
- [merge\_commit\_sha](PullRequest.md#merge_commit_sha)
- [mergeable](PullRequest.md#mergeable)
- [merged](PullRequest.md#merged)
- [merged\_at](PullRequest.md#merged_at)
- [merged\_by](PullRequest.md#merged_by)
- [milestone](PullRequest.md#milestone)
- [number](PullRequest.md#number)
- [patch\_url](PullRequest.md#patch_url)
- [state](PullRequest.md#state)
- [title](PullRequest.md#title)
- [updated\_at](PullRequest.md#updated_at)
- [url](PullRequest.md#url)
- [user](PullRequest.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• `Optional` **assignee**: [`User`](User.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:40](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L40)

___

### <a id="assignees" name="assignees"></a> assignees

• `Optional` **assignees**: [`User`](User.md)[]

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:46](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L46)

___

### <a id="base" name="base"></a> base

• `Optional` **base**: [`PRBranchInfo`](PRBranchInfo.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:52](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L52)

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:58](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L58)

___

### <a id="closed_at" name="closed_at"></a> closed\_at

• `Optional` **closed\_at**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:64](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L64)

___

### <a id="comments" name="comments"></a> comments

• `Optional` **comments**: `number`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:70](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L70)

___

### <a id="created_at" name="created_at"></a> created\_at

• `Optional` **created\_at**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:76](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L76)

___

### <a id="diff_url" name="diff_url"></a> diff\_url

• `Optional` **diff\_url**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:82](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L82)

___

### <a id="due_date" name="due_date"></a> due\_date

• `Optional` **due\_date**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:88](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L88)

___

### <a id="head" name="head"></a> head

• `Optional` **head**: [`PRBranchInfo`](PRBranchInfo.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:94](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L94)

___

### <a id="html_url" name="html_url"></a> html\_url

• `Optional` **html\_url**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:100](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L100)

___

### <a id="id" name="id"></a> id

• `Optional` **id**: `number`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:106](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L106)

___

### <a id="is_locked" name="is_locked"></a> is\_locked

• `Optional` **is\_locked**: `boolean`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:112](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L112)

___

### <a id="labels" name="labels"></a> labels

• `Optional` **labels**: [`Label`](Label.md)[]

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:118](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L118)

___

### <a id="merge_base" name="merge_base"></a> merge\_base

• `Optional` **merge\_base**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:124](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L124)

___

### <a id="merge_commit_sha" name="merge_commit_sha"></a> merge\_commit\_sha

• `Optional` **merge\_commit\_sha**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:130](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L130)

___

### <a id="mergeable" name="mergeable"></a> mergeable

• `Optional` **mergeable**: `boolean`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:136](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L136)

___

### <a id="merged" name="merged"></a> merged

• `Optional` **merged**: `boolean`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:142](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L142)

___

### <a id="merged_at" name="merged_at"></a> merged\_at

• `Optional` **merged\_at**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:148](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L148)

___

### <a id="merged_by" name="merged_by"></a> merged\_by

• `Optional` **merged\_by**: [`User`](User.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:154](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L154)

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` **milestone**: [`Milestone`](Milestone.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:160](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L160)

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:166](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L166)

___

### <a id="patch_url" name="patch_url"></a> patch\_url

• `Optional` **patch\_url**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:172](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L172)

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

StateType issue state type

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:178](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L178)

___

### <a id="title" name="title"></a> title

• `Optional` **title**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:184](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L184)

___

### <a id="updated_at" name="updated_at"></a> updated\_at

• `Optional` **updated\_at**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:190](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L190)

___

### <a id="url" name="url"></a> url

• `Optional` **url**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:196](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L196)

___

### <a id="user" name="user"></a> user

• `Optional` **user**: [`User`](User.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:202](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/pull-request.ts#L202)
