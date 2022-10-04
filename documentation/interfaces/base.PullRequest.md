[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / PullRequest

# Interface: PullRequest

[base](../modules/base.md).PullRequest

PullRequest represents a pull request

**`export`**

**`interface`** PullRequest

## Table of contents

### Properties

- [assignee](base.PullRequest.md#assignee)
- [assignees](base.PullRequest.md#assignees)
- [base](base.PullRequest.md#base)
- [body](base.PullRequest.md#body)
- [closed\_at](base.PullRequest.md#closed_at)
- [comments](base.PullRequest.md#comments)
- [created\_at](base.PullRequest.md#created_at)
- [diff\_url](base.PullRequest.md#diff_url)
- [due\_date](base.PullRequest.md#due_date)
- [head](base.PullRequest.md#head)
- [html\_url](base.PullRequest.md#html_url)
- [id](base.PullRequest.md#id)
- [is\_locked](base.PullRequest.md#is_locked)
- [labels](base.PullRequest.md#labels)
- [merge\_base](base.PullRequest.md#merge_base)
- [merge\_commit\_sha](base.PullRequest.md#merge_commit_sha)
- [mergeable](base.PullRequest.md#mergeable)
- [merged](base.PullRequest.md#merged)
- [merged\_at](base.PullRequest.md#merged_at)
- [merged\_by](base.PullRequest.md#merged_by)
- [milestone](base.PullRequest.md#milestone)
- [number](base.PullRequest.md#number)
- [patch\_url](base.PullRequest.md#patch_url)
- [state](base.PullRequest.md#state)
- [title](base.PullRequest.md#title)
- [updated\_at](base.PullRequest.md#updated_at)
- [url](base.PullRequest.md#url)
- [user](base.PullRequest.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• **assignee**: [`User`](base.User.md)

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:19

___

### <a id="assignees" name="assignees"></a> assignees

• **assignees**: [`User`](base.User.md)[]

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:25

___

### <a id="base" name="base"></a> base

• **base**: [`PrBranchInfo`](base.PrBranchInfo.md)

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:31

___

### <a id="body" name="body"></a> body

• **body**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:37

___

### <a id="closed_at" name="closed_at"></a> closed\_at

• **closed\_at**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:43

___

### <a id="comments" name="comments"></a> comments

• **comments**: `number`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:49

___

### <a id="created_at" name="created_at"></a> created\_at

• **created\_at**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:55

___

### <a id="diff_url" name="diff_url"></a> diff\_url

• **diff\_url**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:61

___

### <a id="due_date" name="due_date"></a> due\_date

• **due\_date**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:67

___

### <a id="head" name="head"></a> head

• **head**: [`PrBranchInfo`](base.PrBranchInfo.md)

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:73

___

### <a id="html_url" name="html_url"></a> html\_url

• **html\_url**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:79

___

### <a id="id" name="id"></a> id

• **id**: `number`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:85

___

### <a id="is_locked" name="is_locked"></a> is\_locked

• **is\_locked**: `boolean`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:91

___

### <a id="labels" name="labels"></a> labels

• **labels**: [`Label`](base.Label.md)[]

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:97

___

### <a id="merge_base" name="merge_base"></a> merge\_base

• **merge\_base**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:103

___

### <a id="merge_commit_sha" name="merge_commit_sha"></a> merge\_commit\_sha

• **merge\_commit\_sha**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:109

___

### <a id="mergeable" name="mergeable"></a> mergeable

• **mergeable**: `boolean`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:115

___

### <a id="merged" name="merged"></a> merged

• **merged**: `boolean`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:121

___

### <a id="merged_at" name="merged_at"></a> merged\_at

• **merged\_at**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:127

___

### <a id="merged_by" name="merged_by"></a> merged\_by

• **merged\_by**: [`User`](base.User.md)

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:133

___

### <a id="milestone" name="milestone"></a> milestone

• **milestone**: [`Milestone`](base.Milestone.md)

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:139

___

### <a id="number" name="number"></a> number

• **number**: `number`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:145

___

### <a id="patch_url" name="patch_url"></a> patch\_url

• **patch\_url**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:151

___

### <a id="state" name="state"></a> state

• **state**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:157

___

### <a id="title" name="title"></a> title

• **title**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:163

___

### <a id="updated_at" name="updated_at"></a> updated\_at

• **updated\_at**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:169

___

### <a id="url" name="url"></a> url

• **url**: `string`

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:175

___

### <a id="user" name="user"></a> user

• **user**: [`User`](base.User.md)

**`memberof`** PullRequest

#### Defined in

base/models/pull-request.ts:181
