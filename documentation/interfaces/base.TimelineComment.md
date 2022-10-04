[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / TimelineComment

# Interface: TimelineComment

[base](../modules/base.md).TimelineComment

TimelineComment represents a timeline comment (comment of any type) on a commit or issue

**`export`**

**`interface`** TimelineComment

## Table of contents

### Properties

- [assignee](base.TimelineComment.md#assignee)
- [assignee\_team](base.TimelineComment.md#assignee_team)
- [body](base.TimelineComment.md#body)
- [created\_at](base.TimelineComment.md#created_at)
- [dependent\_issue](base.TimelineComment.md#dependent_issue)
- [html\_url](base.TimelineComment.md#html_url)
- [id](base.TimelineComment.md#id)
- [issue\_url](base.TimelineComment.md#issue_url)
- [label](base.TimelineComment.md#label)
- [milestone](base.TimelineComment.md#milestone)
- [new\_ref](base.TimelineComment.md#new_ref)
- [new\_title](base.TimelineComment.md#new_title)
- [old\_milestone](base.TimelineComment.md#old_milestone)
- [old\_project\_id](base.TimelineComment.md#old_project_id)
- [old\_ref](base.TimelineComment.md#old_ref)
- [old\_title](base.TimelineComment.md#old_title)
- [project\_id](base.TimelineComment.md#project_id)
- [pull\_request\_url](base.TimelineComment.md#pull_request_url)
- [ref\_action](base.TimelineComment.md#ref_action)
- [ref\_comment](base.TimelineComment.md#ref_comment)
- [ref\_commit\_sha](base.TimelineComment.md#ref_commit_sha)
- [ref\_issue](base.TimelineComment.md#ref_issue)
- [removed\_assignee](base.TimelineComment.md#removed_assignee)
- [resolve\_doer](base.TimelineComment.md#resolve_doer)
- [review\_id](base.TimelineComment.md#review_id)
- [tracked\_time](base.TimelineComment.md#tracked_time)
- [type](base.TimelineComment.md#type)
- [updated\_at](base.TimelineComment.md#updated_at)
- [user](base.TimelineComment.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• **assignee**: [`User`](base.User.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:21

___

### <a id="assignee_team" name="assignee_team"></a> assignee\_team

• **assignee\_team**: [`Team`](base.Team.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:27

___

### <a id="body" name="body"></a> body

• **body**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:33

___

### <a id="created_at" name="created_at"></a> created\_at

• **created\_at**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:39

___

### <a id="dependent_issue" name="dependent_issue"></a> dependent\_issue

• **dependent\_issue**: [`Issue`](base.Issue.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:45

___

### <a id="html_url" name="html_url"></a> html\_url

• **html\_url**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:51

___

### <a id="id" name="id"></a> id

• **id**: `number`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:57

___

### <a id="issue_url" name="issue_url"></a> issue\_url

• **issue\_url**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:63

___

### <a id="label" name="label"></a> label

• **label**: [`Label`](base.Label.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:69

___

### <a id="milestone" name="milestone"></a> milestone

• **milestone**: [`Milestone`](base.Milestone.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:75

___

### <a id="new_ref" name="new_ref"></a> new\_ref

• **new\_ref**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:81

___

### <a id="new_title" name="new_title"></a> new\_title

• **new\_title**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:87

___

### <a id="old_milestone" name="old_milestone"></a> old\_milestone

• **old\_milestone**: [`Milestone`](base.Milestone.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:93

___

### <a id="old_project_id" name="old_project_id"></a> old\_project\_id

• **old\_project\_id**: `number`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:99

___

### <a id="old_ref" name="old_ref"></a> old\_ref

• **old\_ref**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:105

___

### <a id="old_title" name="old_title"></a> old\_title

• **old\_title**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:111

___

### <a id="project_id" name="project_id"></a> project\_id

• **project\_id**: `number`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:117

___

### <a id="pull_request_url" name="pull_request_url"></a> pull\_request\_url

• **pull\_request\_url**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:123

___

### <a id="ref_action" name="ref_action"></a> ref\_action

• **ref\_action**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:129

___

### <a id="ref_comment" name="ref_comment"></a> ref\_comment

• **ref\_comment**: [`Comment`](base.Comment.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:135

___

### <a id="ref_commit_sha" name="ref_commit_sha"></a> ref\_commit\_sha

• **ref\_commit\_sha**: `string`

commit SHA where issuePR was referenced

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:141

___

### <a id="ref_issue" name="ref_issue"></a> ref\_issue

• **ref\_issue**: [`Issue`](base.Issue.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:147

___

### <a id="removed_assignee" name="removed_assignee"></a> removed\_assignee

• **removed\_assignee**: `boolean`

whether the assignees were removed or added

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:153

___

### <a id="resolve_doer" name="resolve_doer"></a> resolve\_doer

• **resolve\_doer**: [`User`](base.User.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:159

___

### <a id="review_id" name="review_id"></a> review\_id

• **review\_id**: `number`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:165

___

### <a id="tracked_time" name="tracked_time"></a> tracked\_time

• **tracked\_time**: [`TrackedTime`](base.TrackedTime.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:171

___

### <a id="type" name="type"></a> type

• **type**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:177

___

### <a id="updated_at" name="updated_at"></a> updated\_at

• **updated\_at**: `string`

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:183

___

### <a id="user" name="user"></a> user

• **user**: [`User`](base.User.md)

**`memberof`** TimelineComment

#### Defined in

base/models/timeline-comment.ts:189
