[dcs-js](../README.md) / [Exports](../modules.md) / Issue

# Interface: Issue

Issue represents an issue in a repository

**`export`**

**`interface`** Issue

## Table of contents

### Properties

- [assignee](Issue.md#assignee)
- [assignees](Issue.md#assignees)
- [body](Issue.md#body)
- [closed\_at](Issue.md#closed_at)
- [comments](Issue.md#comments)
- [created\_at](Issue.md#created_at)
- [due\_date](Issue.md#due_date)
- [html\_url](Issue.md#html_url)
- [id](Issue.md#id)
- [is\_locked](Issue.md#is_locked)
- [labels](Issue.md#labels)
- [milestone](Issue.md#milestone)
- [number](Issue.md#number)
- [original\_author](Issue.md#original_author)
- [original\_author\_id](Issue.md#original_author_id)
- [pull\_request](Issue.md#pull_request)
- [ref](Issue.md#ref)
- [repository](Issue.md#repository)
- [state](Issue.md#state)
- [title](Issue.md#title)
- [updated\_at](Issue.md#updated_at)
- [url](Issue.md#url)
- [user](Issue.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• `Optional` **assignee**: [`User`](User.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:43](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L43)

___

### <a id="assignees" name="assignees"></a> assignees

• `Optional` **assignees**: [`User`](User.md)[]

**`memberof`** Issue

#### Defined in

[models/issue.ts:49](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L49)

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:55](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L55)

___

### <a id="closed_at" name="closed_at"></a> closed\_at

• `Optional` **closed\_at**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:61](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L61)

___

### <a id="comments" name="comments"></a> comments

• `Optional` **comments**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:67](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L67)

___

### <a id="created_at" name="created_at"></a> created\_at

• `Optional` **created\_at**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:73](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L73)

___

### <a id="due_date" name="due_date"></a> due\_date

• `Optional` **due\_date**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:79](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L79)

___

### <a id="html_url" name="html_url"></a> html\_url

• `Optional` **html\_url**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:85](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L85)

___

### <a id="id" name="id"></a> id

• `Optional` **id**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:91](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L91)

___

### <a id="is_locked" name="is_locked"></a> is\_locked

• `Optional` **is\_locked**: `boolean`

**`memberof`** Issue

#### Defined in

[models/issue.ts:97](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L97)

___

### <a id="labels" name="labels"></a> labels

• `Optional` **labels**: [`Label`](Label.md)[]

**`memberof`** Issue

#### Defined in

[models/issue.ts:103](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L103)

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` **milestone**: [`Milestone`](Milestone.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:109](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L109)

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:115](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L115)

___

### <a id="original_author" name="original_author"></a> original\_author

• `Optional` **original\_author**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:121](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L121)

___

### <a id="original_author_id" name="original_author_id"></a> original\_author\_id

• `Optional` **original\_author\_id**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:127](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L127)

___

### <a id="pull_request" name="pull_request"></a> pull\_request

• `Optional` **pull\_request**: [`PullRequestMeta`](PullRequestMeta.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:133](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L133)

___

### <a id="ref" name="ref"></a> ref

• `Optional` **ref**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:139](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L139)

___

### <a id="repository" name="repository"></a> repository

• `Optional` **repository**: [`RepositoryMeta`](RepositoryMeta.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:145](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L145)

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

StateType issue state type

**`memberof`** Issue

#### Defined in

[models/issue.ts:151](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L151)

___

### <a id="title" name="title"></a> title

• `Optional` **title**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:157](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L157)

___

### <a id="updated_at" name="updated_at"></a> updated\_at

• `Optional` **updated\_at**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:163](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L163)

___

### <a id="url" name="url"></a> url

• `Optional` **url**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:169](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L169)

___

### <a id="user" name="user"></a> user

• `Optional` **user**: [`User`](User.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:175](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/models/issue.ts#L175)
