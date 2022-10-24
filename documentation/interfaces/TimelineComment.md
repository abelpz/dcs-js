[dcs-js](../README.md) / [Exports](../modules.md) / TimelineComment

# Interface: TimelineComment

TimelineComment represents a timeline comment (comment of any type) on a commit or issue

**`export`**

**`interface`** TimelineComment

## Table of contents

### Properties

- [assignee](TimelineComment.md#assignee)
- [assignee\_team](TimelineComment.md#assignee_team)
- [body](TimelineComment.md#body)
- [created\_at](TimelineComment.md#created_at)
- [dependent\_issue](TimelineComment.md#dependent_issue)
- [html\_url](TimelineComment.md#html_url)
- [id](TimelineComment.md#id)
- [issue\_url](TimelineComment.md#issue_url)
- [label](TimelineComment.md#label)
- [milestone](TimelineComment.md#milestone)
- [new\_ref](TimelineComment.md#new_ref)
- [new\_title](TimelineComment.md#new_title)
- [old\_milestone](TimelineComment.md#old_milestone)
- [old\_project\_id](TimelineComment.md#old_project_id)
- [old\_ref](TimelineComment.md#old_ref)
- [old\_title](TimelineComment.md#old_title)
- [project\_id](TimelineComment.md#project_id)
- [pull\_request\_url](TimelineComment.md#pull_request_url)
- [ref\_action](TimelineComment.md#ref_action)
- [ref\_comment](TimelineComment.md#ref_comment)
- [ref\_commit\_sha](TimelineComment.md#ref_commit_sha)
- [ref\_issue](TimelineComment.md#ref_issue)
- [removed\_assignee](TimelineComment.md#removed_assignee)
- [resolve\_doer](TimelineComment.md#resolve_doer)
- [review\_id](TimelineComment.md#review_id)
- [tracked\_time](TimelineComment.md#tracked_time)
- [type](TimelineComment.md#type)
- [updated\_at](TimelineComment.md#updated_at)
- [user](TimelineComment.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• `Optional` **assignee**: [`User`](User.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:49](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L49)

___

### <a id="assignee_team" name="assignee_team"></a> assignee\_team

• `Optional` **assignee\_team**: [`Team`](Team.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:55](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L55)

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:61](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L61)

___

### <a id="created_at" name="created_at"></a> created\_at

• `Optional` **created\_at**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:67](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L67)

___

### <a id="dependent_issue" name="dependent_issue"></a> dependent\_issue

• `Optional` **dependent\_issue**: [`Issue`](Issue.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:73](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L73)

___

### <a id="html_url" name="html_url"></a> html\_url

• `Optional` **html\_url**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:79](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L79)

___

### <a id="id" name="id"></a> id

• `Optional` **id**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:85](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L85)

___

### <a id="issue_url" name="issue_url"></a> issue\_url

• `Optional` **issue\_url**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:91](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L91)

___

### <a id="label" name="label"></a> label

• `Optional` **label**: [`Label`](Label.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:97](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L97)

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` **milestone**: [`Milestone`](Milestone.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:103](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L103)

___

### <a id="new_ref" name="new_ref"></a> new\_ref

• `Optional` **new\_ref**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:109](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L109)

___

### <a id="new_title" name="new_title"></a> new\_title

• `Optional` **new\_title**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:115](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L115)

___

### <a id="old_milestone" name="old_milestone"></a> old\_milestone

• `Optional` **old\_milestone**: [`Milestone`](Milestone.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:121](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L121)

___

### <a id="old_project_id" name="old_project_id"></a> old\_project\_id

• `Optional` **old\_project\_id**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:127](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L127)

___

### <a id="old_ref" name="old_ref"></a> old\_ref

• `Optional` **old\_ref**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:133](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L133)

___

### <a id="old_title" name="old_title"></a> old\_title

• `Optional` **old\_title**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:139](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L139)

___

### <a id="project_id" name="project_id"></a> project\_id

• `Optional` **project\_id**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:145](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L145)

___

### <a id="pull_request_url" name="pull_request_url"></a> pull\_request\_url

• `Optional` **pull\_request\_url**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:151](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L151)

___

### <a id="ref_action" name="ref_action"></a> ref\_action

• `Optional` **ref\_action**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:157](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L157)

___

### <a id="ref_comment" name="ref_comment"></a> ref\_comment

• `Optional` **ref\_comment**: [`Comment`](Comment.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:163](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L163)

___

### <a id="ref_commit_sha" name="ref_commit_sha"></a> ref\_commit\_sha

• `Optional` **ref\_commit\_sha**: `string`

commit SHA where issue/PR was referenced

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:169](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L169)

___

### <a id="ref_issue" name="ref_issue"></a> ref\_issue

• `Optional` **ref\_issue**: [`Issue`](Issue.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:175](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L175)

___

### <a id="removed_assignee" name="removed_assignee"></a> removed\_assignee

• `Optional` **removed\_assignee**: `boolean`

whether the assignees were removed or added

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:181](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L181)

___

### <a id="resolve_doer" name="resolve_doer"></a> resolve\_doer

• `Optional` **resolve\_doer**: [`User`](User.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:187](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L187)

___

### <a id="review_id" name="review_id"></a> review\_id

• `Optional` **review\_id**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:193](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L193)

___

### <a id="tracked_time" name="tracked_time"></a> tracked\_time

• `Optional` **tracked\_time**: [`TrackedTime`](TrackedTime.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:199](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L199)

___

### <a id="type" name="type"></a> type

• `Optional` **type**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:205](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L205)

___

### <a id="updated_at" name="updated_at"></a> updated\_at

• `Optional` **updated\_at**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:211](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L211)

___

### <a id="user" name="user"></a> user

• `Optional` **user**: [`User`](User.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:217](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/models/timeline-comment.ts#L217)
