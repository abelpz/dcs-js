[dcs-js](../README.md) / [Exports](../modules.md) / IssueApi

# Class: IssueApi

IssueApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`IssueApi`**

## Table of contents

### Constructors

- [constructor](IssueApi.md#constructor)

### Properties

- [axios](IssueApi.md#axios)
- [basePath](IssueApi.md#basepath)
- [configuration](IssueApi.md#configuration)

### Methods

- [issueAddLabel](IssueApi.md#issueaddlabel)
- [issueAddSubscription](IssueApi.md#issueaddsubscription)
- [issueAddTime](IssueApi.md#issueaddtime)
- [issueCheckSubscription](IssueApi.md#issuechecksubscription)
- [issueClearLabels](IssueApi.md#issueclearlabels)
- [issueCreateComment](IssueApi.md#issuecreatecomment)
- [issueCreateIssue](IssueApi.md#issuecreateissue)
- [issueCreateLabel](IssueApi.md#issuecreatelabel)
- [issueCreateMilestone](IssueApi.md#issuecreatemilestone)
- [issueDelete](IssueApi.md#issuedelete)
- [issueDeleteComment](IssueApi.md#issuedeletecomment)
- [issueDeleteCommentDeprecated](IssueApi.md#issuedeletecommentdeprecated)
- [issueDeleteCommentReaction](IssueApi.md#issuedeletecommentreaction)
- [issueDeleteIssueReaction](IssueApi.md#issuedeleteissuereaction)
- [issueDeleteLabel](IssueApi.md#issuedeletelabel)
- [issueDeleteMilestone](IssueApi.md#issuedeletemilestone)
- [issueDeleteStopWatch](IssueApi.md#issuedeletestopwatch)
- [issueDeleteSubscription](IssueApi.md#issuedeletesubscription)
- [issueDeleteTime](IssueApi.md#issuedeletetime)
- [issueEditComment](IssueApi.md#issueeditcomment)
- [issueEditCommentDeprecated](IssueApi.md#issueeditcommentdeprecated)
- [issueEditIssue](IssueApi.md#issueeditissue)
- [issueEditIssueDeadline](IssueApi.md#issueeditissuedeadline)
- [issueEditLabel](IssueApi.md#issueeditlabel)
- [issueEditMilestone](IssueApi.md#issueeditmilestone)
- [issueGetComment](IssueApi.md#issuegetcomment)
- [issueGetCommentReactions](IssueApi.md#issuegetcommentreactions)
- [issueGetComments](IssueApi.md#issuegetcomments)
- [issueGetCommentsAndTimeline](IssueApi.md#issuegetcommentsandtimeline)
- [issueGetIssue](IssueApi.md#issuegetissue)
- [issueGetIssueReactions](IssueApi.md#issuegetissuereactions)
- [issueGetLabel](IssueApi.md#issuegetlabel)
- [issueGetLabels](IssueApi.md#issuegetlabels)
- [issueGetMilestone](IssueApi.md#issuegetmilestone)
- [issueGetMilestonesList](IssueApi.md#issuegetmilestoneslist)
- [issueGetRepoComments](IssueApi.md#issuegetrepocomments)
- [issueListIssues](IssueApi.md#issuelistissues)
- [issueListLabels](IssueApi.md#issuelistlabels)
- [issuePostCommentReaction](IssueApi.md#issuepostcommentreaction)
- [issuePostIssueReaction](IssueApi.md#issuepostissuereaction)
- [issueRemoveLabel](IssueApi.md#issueremovelabel)
- [issueReplaceLabels](IssueApi.md#issuereplacelabels)
- [issueResetTime](IssueApi.md#issueresettime)
- [issueSearchIssues](IssueApi.md#issuesearchissues)
- [issueStartStopWatch](IssueApi.md#issuestartstopwatch)
- [issueStopStopWatch](IssueApi.md#issuestopstopwatch)
- [issueSubscriptions](IssueApi.md#issuesubscriptions)
- [issueTrackedTimes](IssueApi.md#issuetrackedtimes)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new IssueApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/dd84989/base.ts#L52)

## Properties

### <a id="axios" name="axios"></a> axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### <a id="basepath" name="basepath"></a> basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/dd84989/base.ts#L50)

## Methods

### <a id="issueaddlabel" name="issueaddlabel"></a> issueAddLabel

▸ **issueAddLabel**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Add a label to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `body?` | [`IssueLabelsOption`](../interfaces/IssueLabelsOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:4865](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4865)

___

### <a id="issueaddsubscription" name="issueaddsubscription"></a> issueAddSubscription

▸ **issueAddSubscription**(`owner`, `repo`, `index`, `user`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Subscribe user to issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `user` | `string` | user to subscribe |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:4880](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4880)

___

### <a id="issueaddtime" name="issueaddtime"></a> issueAddTime

▸ **issueAddTime**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)\>\>

**`summary`** Add tracked time to a issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `body?` | [`AddTimeOption`](../interfaces/AddTimeOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)\>\>

#### Defined in

[apis/issue-api.ts:4895](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4895)

___

### <a id="issuechecksubscription" name="issuechecksubscription"></a> issueCheckSubscription

▸ **issueCheckSubscription**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Check if user is subscribed to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/issue-api.ts:4909](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4909)

___

### <a id="issueclearlabels" name="issueclearlabels"></a> issueClearLabels

▸ **issueClearLabels**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove all labels from an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:4923](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4923)

___

### <a id="issuecreatecomment" name="issuecreatecomment"></a> issueCreateComment

▸ **issueCreateComment**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Add a comment to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `body?` | [`CreateIssueCommentOption`](../interfaces/CreateIssueCommentOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:4938](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4938)

___

### <a id="issuecreateissue" name="issuecreateissue"></a> issueCreateIssue

▸ **issueCreateIssue**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

**`summary`** Create an issue. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateIssueOption`](../interfaces/CreateIssueOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

#### Defined in

[apis/issue-api.ts:4952](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4952)

___

### <a id="issuecreatelabel" name="issuecreatelabel"></a> issueCreateLabel

▸ **issueCreateLabel**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Create a label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateLabelOption`](../interfaces/CreateLabelOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/issue-api.ts:4966](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4966)

___

### <a id="issuecreatemilestone" name="issuecreatemilestone"></a> issueCreateMilestone

▸ **issueCreateMilestone**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

**`summary`** Create a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateMilestoneOption`](../interfaces/CreateMilestoneOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

#### Defined in

[apis/issue-api.ts:4980](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4980)

___

### <a id="issuedelete" name="issuedelete"></a> issueDelete

▸ **issueDelete**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of issue to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:4994](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L4994)

___

### <a id="issuedeletecomment" name="issuedeletecomment"></a> issueDeleteComment

▸ **issueDeleteComment**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a comment

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of comment to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5008](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5008)

___

### <a id="issuedeletecommentdeprecated" name="issuedeletecommentdeprecated"></a> issueDeleteCommentDeprecated

▸ **issueDeleteCommentDeprecated**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a comment

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | this parameter is ignored |
| `id` | `number` | id of comment to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5024](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5024)

___

### <a id="issuedeletecommentreaction" name="issuedeletecommentreaction"></a> issueDeleteCommentReaction

▸ **issueDeleteCommentReaction**(`owner`, `repo`, `id`, `content?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a reaction from a comment of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the comment to edit |
| `content?` | [`EditReactionOption`](../interfaces/EditReactionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5039](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5039)

___

### <a id="issuedeleteissuereaction" name="issuedeleteissuereaction"></a> issueDeleteIssueReaction

▸ **issueDeleteIssueReaction**(`owner`, `repo`, `index`, `content?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a reaction from an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `content?` | [`EditReactionOption`](../interfaces/EditReactionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5054](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5054)

___

### <a id="issuedeletelabel" name="issuedeletelabel"></a> issueDeleteLabel

▸ **issueDeleteLabel**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the label to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5068](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5068)

___

### <a id="issuedeletemilestone" name="issuedeletemilestone"></a> issueDeleteMilestone

▸ **issueDeleteMilestone**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | the milestone to delete, identified by ID and if not available by name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5082](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5082)

___

### <a id="issuedeletestopwatch" name="issuedeletestopwatch"></a> issueDeleteStopWatch

▸ **issueDeleteStopWatch**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an issue\'s existing stopwatch.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue to stop the stopwatch on |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5096](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5096)

___

### <a id="issuedeletesubscription" name="issuedeletesubscription"></a> issueDeleteSubscription

▸ **issueDeleteSubscription**(`owner`, `repo`, `index`, `user`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unsubscribe user from issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `user` | `string` | user witch unsubscribe |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5111](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5111)

___

### <a id="issuedeletetime" name="issuedeletetime"></a> issueDeleteTime

▸ **issueDeleteTime**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete specific tracked time

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `id` | `number` | id of time to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5126](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5126)

___

### <a id="issueeditcomment" name="issueeditcomment"></a> issueEditComment

▸ **issueEditComment**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Edit a comment

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the comment to edit |
| `body?` | [`EditIssueCommentOption`](../interfaces/EditIssueCommentOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:5141](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5141)

___

### <a id="issueeditcommentdeprecated" name="issueeditcommentdeprecated"></a> issueEditCommentDeprecated

▸ **issueEditCommentDeprecated**(`owner`, `repo`, `index`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Edit a comment

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | this parameter is ignored |
| `id` | `number` | id of the comment to edit |
| `body?` | [`EditIssueCommentOption`](../interfaces/EditIssueCommentOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:5158](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5158)

___

### <a id="issueeditissue" name="issueeditissue"></a> issueEditIssue

▸ **issueEditIssue**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

**`summary`** Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue to edit |
| `body?` | [`EditIssueOption`](../interfaces/EditIssueOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

#### Defined in

[apis/issue-api.ts:5173](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5173)

___

### <a id="issueeditissuedeadline" name="issueeditissuedeadline"></a> issueEditIssueDeadline

▸ **issueEditIssueDeadline**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`IssueDeadline`](../interfaces/IssueDeadline.md)\>\>

**`summary`** Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue to create or update a deadline on |
| `body?` | [`EditDeadlineOption`](../interfaces/EditDeadlineOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`IssueDeadline`](../interfaces/IssueDeadline.md)\>\>

#### Defined in

[apis/issue-api.ts:5188](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5188)

___

### <a id="issueeditlabel" name="issueeditlabel"></a> issueEditLabel

▸ **issueEditLabel**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Update a label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the label to edit |
| `body?` | [`EditLabelOption`](../interfaces/EditLabelOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/issue-api.ts:5203](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5203)

___

### <a id="issueeditmilestone" name="issueeditmilestone"></a> issueEditMilestone

▸ **issueEditMilestone**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

**`summary`** Update a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | the milestone to edit, identified by ID and if not available by name |
| `body?` | [`EditMilestoneOption`](../interfaces/EditMilestoneOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

#### Defined in

[apis/issue-api.ts:5218](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5218)

___

### <a id="issuegetcomment" name="issuegetcomment"></a> issueGetComment

▸ **issueGetComment**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Get a comment

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the comment |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:5232](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5232)

___

### <a id="issuegetcommentreactions" name="issuegetcommentreactions"></a> issueGetCommentReactions

▸ **issueGetCommentReactions**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

**`summary`** Get a list of reactions from a comment of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the comment to edit |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5246](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5246)

___

### <a id="issuegetcomments" name="issuegetcomments"></a> issueGetComments

▸ **issueGetComments**(`owner`, `repo`, `index`, `since?`, `before?`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

**`summary`** List all comments on an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `since?` | `string` | - |
| `before?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5262](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5262)

___

### <a id="issuegetcommentsandtimeline" name="issuegetcommentsandtimeline"></a> issueGetCommentsAndTimeline

▸ **issueGetCommentsAndTimeline**(`owner`, `repo`, `index`, `since?`, `page?`, `limit?`, `before?`, `options?`): `Promise`<`AxiosResponse`<[`TimelineComment`](../interfaces/TimelineComment.md)[]\>\>

**`summary`** List all comments and events on an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `since?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `before?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TimelineComment`](../interfaces/TimelineComment.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5280](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5280)

___

### <a id="issuegetissue" name="issuegetissue"></a> issueGetIssue

▸ **issueGetIssue**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

**`summary`** Get an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

#### Defined in

[apis/issue-api.ts:5294](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5294)

___

### <a id="issuegetissuereactions" name="issuegetissuereactions"></a> issueGetIssueReactions

▸ **issueGetIssueReactions**(`owner`, `repo`, `index`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

**`summary`** Get a list reactions of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5310](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5310)

___

### <a id="issuegetlabel" name="issuegetlabel"></a> issueGetLabel

▸ **issueGetLabel**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Get a single label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the label to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/issue-api.ts:5324](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5324)

___

### <a id="issuegetlabels" name="issuegetlabels"></a> issueGetLabels

▸ **issueGetLabels**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Get an issue\'s labels

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5338](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5338)

___

### <a id="issuegetmilestone" name="issuegetmilestone"></a> issueGetMilestone

▸ **issueGetMilestone**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

**`summary`** Get a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | the milestone to get, identified by ID and if not available by name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

#### Defined in

[apis/issue-api.ts:5352](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5352)

___

### <a id="issuegetmilestoneslist" name="issuegetmilestoneslist"></a> issueGetMilestonesList

▸ **issueGetMilestonesList**(`owner`, `repo`, `state?`, `name?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)[]\>\>

**`summary`** Get all of a repository\'s opened milestones

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `state?` | `string` | - |
| `name?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5369](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5369)

___

### <a id="issuegetrepocomments" name="issuegetrepocomments"></a> issueGetRepoComments

▸ **issueGetRepoComments**(`owner`, `repo`, `since?`, `before?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

**`summary`** List all comments in a repository

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `since?` | `string` | - |
| `before?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5386](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5386)

___

### <a id="issuelistissues" name="issuelistissues"></a> issueListIssues

▸ **issueListIssues**(`owner`, `repo`, `state?`, `labels?`, `q?`, `type?`, `milestones?`, `since?`, `before?`, `createdBy?`, `assignedBy?`, `mentionedBy?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

**`summary`** List a repository\'s issues

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `state?` | ``"all"`` \| ``"closed"`` \| ``"open"`` | - |
| `labels?` | `string` | - |
| `q?` | `string` | - |
| `type?` | ``"issues"`` \| ``"pulls"`` | - |
| `milestones?` | `string` | - |
| `since?` | `string` | - |
| `before?` | `string` | - |
| `createdBy?` | `string` | - |
| `assignedBy?` | `string` | - |
| `mentionedBy?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5411](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5411)

___

### <a id="issuelistlabels" name="issuelistlabels"></a> issueListLabels

▸ **issueListLabels**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Get all of a repository\'s labels

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5426](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5426)

___

### <a id="issuepostcommentreaction" name="issuepostcommentreaction"></a> issuePostCommentReaction

▸ **issuePostCommentReaction**(`owner`, `repo`, `id`, `content?`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

**`summary`** Add a reaction to a comment of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the comment to edit |
| `content?` | [`EditReactionOption`](../interfaces/EditReactionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

#### Defined in

[apis/issue-api.ts:5441](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5441)

___

### <a id="issuepostissuereaction" name="issuepostissuereaction"></a> issuePostIssueReaction

▸ **issuePostIssueReaction**(`owner`, `repo`, `index`, `content?`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

**`summary`** Add a reaction to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `content?` | [`EditReactionOption`](../interfaces/EditReactionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

#### Defined in

[apis/issue-api.ts:5456](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5456)

___

### <a id="issueremovelabel" name="issueremovelabel"></a> issueRemoveLabel

▸ **issueRemoveLabel**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a label from an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `id` | `number` | id of the label to remove |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5471](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5471)

___

### <a id="issuereplacelabels" name="issuereplacelabels"></a> issueReplaceLabels

▸ **issueReplaceLabels**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Replace an issue\'s labels

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `body?` | [`IssueLabelsOption`](../interfaces/IssueLabelsOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5486](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5486)

___

### <a id="issueresettime" name="issueresettime"></a> issueResetTime

▸ **issueResetTime**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reset a tracked time of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue to add tracked time to |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5500](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5500)

___

### <a id="issuesearchissues" name="issuesearchissues"></a> issueSearchIssues

▸ **issueSearchIssues**(`state?`, `labels?`, `milestones?`, `q?`, `priorityRepoId?`, `type?`, `since?`, `before?`, `assigned?`, `created?`, `mentioned?`, `reviewRequested?`, `owner?`, `team?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

**`summary`** Search for issues across the repositories that the user has access to

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | `string` |
| `labels?` | `string` |
| `milestones?` | `string` |
| `q?` | `string` |
| `priorityRepoId?` | `number` |
| `type?` | `string` |
| `since?` | `string` |
| `before?` | `string` |
| `assigned?` | `boolean` |
| `created?` | `boolean` |
| `mentioned?` | `boolean` |
| `reviewRequested?` | `boolean` |
| `owner?` | `string` |
| `team?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5527](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5527)

___

### <a id="issuestartstopwatch" name="issuestartstopwatch"></a> issueStartStopWatch

▸ **issueStartStopWatch**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Start stopwatch on an issue.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue to create the stopwatch on |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5541](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5541)

___

### <a id="issuestopstopwatch" name="issuestopstopwatch"></a> issueStopStopWatch

▸ **issueStopStopWatch**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Stop an issue\'s existing stopwatch.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue to stop the stopwatch on |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:5555](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5555)

___

### <a id="issuesubscriptions" name="issuesubscriptions"></a> issueSubscriptions

▸ **issueSubscriptions**(`owner`, `repo`, `index`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Get users who subscribed on an issue.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5571](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5571)

___

### <a id="issuetrackedtimes" name="issuetrackedtimes"></a> issueTrackedTimes

▸ **issueTrackedTimes**(`owner`, `repo`, `index`, `user?`, `since?`, `before?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List an issue\'s tracked times

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the issue |
| `user?` | `string` | - |
| `since?` | `string` | - |
| `before?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/issue-api.ts:5590](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/issue-api.ts#L5590)
