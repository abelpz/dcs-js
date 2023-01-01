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

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/base.ts#L52)

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

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/base.ts#L50)

## Methods

### <a id="issueaddlabel" name="issueaddlabel"></a> issueAddLabel

▸ **issueAddLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Add a label to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueAddLabelRequest`](../interfaces/IssueApiIssueAddLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:6668](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6668)

___

### <a id="issueaddsubscription" name="issueaddsubscription"></a> issueAddSubscription

▸ **issueAddSubscription**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Subscribe user to issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueAddSubscriptionRequest`](../interfaces/IssueApiIssueAddSubscriptionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6680](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6680)

___

### <a id="issueaddtime" name="issueaddtime"></a> issueAddTime

▸ **issueAddTime**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)\>\>

**`summary`** Add tracked time to a issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueAddTimeRequest`](../interfaces/IssueApiIssueAddTimeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)\>\>

#### Defined in

[apis/issue-api.ts:6692](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6692)

___

### <a id="issuechecksubscription" name="issuechecksubscription"></a> issueCheckSubscription

▸ **issueCheckSubscription**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Check if user is subscribed to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueCheckSubscriptionRequest`](../interfaces/IssueApiIssueCheckSubscriptionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/issue-api.ts:6704](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6704)

___

### <a id="issueclearlabels" name="issueclearlabels"></a> issueClearLabels

▸ **issueClearLabels**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove all labels from an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueClearLabelsRequest`](../interfaces/IssueApiIssueClearLabelsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6716](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6716)

___

### <a id="issuecreatecomment" name="issuecreatecomment"></a> issueCreateComment

▸ **issueCreateComment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Add a comment to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueCreateCommentRequest`](../interfaces/IssueApiIssueCreateCommentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:6728](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6728)

___

### <a id="issuecreateissue" name="issuecreateissue"></a> issueCreateIssue

▸ **issueCreateIssue**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

**`summary`** Create an issue. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueCreateIssueRequest`](../interfaces/IssueApiIssueCreateIssueRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

#### Defined in

[apis/issue-api.ts:6740](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6740)

___

### <a id="issuecreatelabel" name="issuecreatelabel"></a> issueCreateLabel

▸ **issueCreateLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Create a label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueCreateLabelRequest`](../interfaces/IssueApiIssueCreateLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/issue-api.ts:6752](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6752)

___

### <a id="issuecreatemilestone" name="issuecreatemilestone"></a> issueCreateMilestone

▸ **issueCreateMilestone**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

**`summary`** Create a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueCreateMilestoneRequest`](../interfaces/IssueApiIssueCreateMilestoneRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

#### Defined in

[apis/issue-api.ts:6764](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6764)

___

### <a id="issuedelete" name="issuedelete"></a> issueDelete

▸ **issueDelete**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteRequest`](../interfaces/IssueApiIssueDeleteRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6776](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6776)

___

### <a id="issuedeletecomment" name="issuedeletecomment"></a> issueDeleteComment

▸ **issueDeleteComment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a comment

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteCommentRequest`](../interfaces/IssueApiIssueDeleteCommentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6788](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6788)

___

### <a id="issuedeletecommentdeprecated" name="issuedeletecommentdeprecated"></a> issueDeleteCommentDeprecated

▸ **issueDeleteCommentDeprecated**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a comment

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteCommentDeprecatedRequest`](../interfaces/IssueApiIssueDeleteCommentDeprecatedRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6801](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6801)

___

### <a id="issuedeletecommentreaction" name="issuedeletecommentreaction"></a> issueDeleteCommentReaction

▸ **issueDeleteCommentReaction**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a reaction from a comment of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteCommentReactionRequest`](../interfaces/IssueApiIssueDeleteCommentReactionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6813](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6813)

___

### <a id="issuedeleteissuereaction" name="issuedeleteissuereaction"></a> issueDeleteIssueReaction

▸ **issueDeleteIssueReaction**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a reaction from an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteIssueReactionRequest`](../interfaces/IssueApiIssueDeleteIssueReactionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6825](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6825)

___

### <a id="issuedeletelabel" name="issuedeletelabel"></a> issueDeleteLabel

▸ **issueDeleteLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteLabelRequest`](../interfaces/IssueApiIssueDeleteLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6837](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6837)

___

### <a id="issuedeletemilestone" name="issuedeletemilestone"></a> issueDeleteMilestone

▸ **issueDeleteMilestone**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteMilestoneRequest`](../interfaces/IssueApiIssueDeleteMilestoneRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6849](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6849)

___

### <a id="issuedeletestopwatch" name="issuedeletestopwatch"></a> issueDeleteStopWatch

▸ **issueDeleteStopWatch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an issue\'s existing stopwatch.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteStopWatchRequest`](../interfaces/IssueApiIssueDeleteStopWatchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6861](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6861)

___

### <a id="issuedeletesubscription" name="issuedeletesubscription"></a> issueDeleteSubscription

▸ **issueDeleteSubscription**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unsubscribe user from issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteSubscriptionRequest`](../interfaces/IssueApiIssueDeleteSubscriptionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6873](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6873)

___

### <a id="issuedeletetime" name="issuedeletetime"></a> issueDeleteTime

▸ **issueDeleteTime**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete specific tracked time

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueDeleteTimeRequest`](../interfaces/IssueApiIssueDeleteTimeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:6885](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6885)

___

### <a id="issueeditcomment" name="issueeditcomment"></a> issueEditComment

▸ **issueEditComment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Edit a comment

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueEditCommentRequest`](../interfaces/IssueApiIssueEditCommentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:6897](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6897)

___

### <a id="issueeditcommentdeprecated" name="issueeditcommentdeprecated"></a> issueEditCommentDeprecated

▸ **issueEditCommentDeprecated**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Edit a comment

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueEditCommentDeprecatedRequest`](../interfaces/IssueApiIssueEditCommentDeprecatedRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:6910](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6910)

___

### <a id="issueeditissue" name="issueeditissue"></a> issueEditIssue

▸ **issueEditIssue**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

**`summary`** Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueEditIssueRequest`](../interfaces/IssueApiIssueEditIssueRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

#### Defined in

[apis/issue-api.ts:6922](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6922)

___

### <a id="issueeditissuedeadline" name="issueeditissuedeadline"></a> issueEditIssueDeadline

▸ **issueEditIssueDeadline**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`IssueDeadline`](../interfaces/IssueDeadline.md)\>\>

**`summary`** Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueEditIssueDeadlineRequest`](../interfaces/IssueApiIssueEditIssueDeadlineRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`IssueDeadline`](../interfaces/IssueDeadline.md)\>\>

#### Defined in

[apis/issue-api.ts:6934](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6934)

___

### <a id="issueeditlabel" name="issueeditlabel"></a> issueEditLabel

▸ **issueEditLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Update a label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueEditLabelRequest`](../interfaces/IssueApiIssueEditLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/issue-api.ts:6946](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6946)

___

### <a id="issueeditmilestone" name="issueeditmilestone"></a> issueEditMilestone

▸ **issueEditMilestone**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

**`summary`** Update a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueEditMilestoneRequest`](../interfaces/IssueApiIssueEditMilestoneRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

#### Defined in

[apis/issue-api.ts:6958](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6958)

___

### <a id="issuegetcomment" name="issuegetcomment"></a> issueGetComment

▸ **issueGetComment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

**`summary`** Get a comment

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetCommentRequest`](../interfaces/IssueApiIssueGetCommentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)\>\>

#### Defined in

[apis/issue-api.ts:6970](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6970)

___

### <a id="issuegetcommentreactions" name="issuegetcommentreactions"></a> issueGetCommentReactions

▸ **issueGetCommentReactions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

**`summary`** Get a list of reactions from a comment of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetCommentReactionsRequest`](../interfaces/IssueApiIssueGetCommentReactionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

#### Defined in

[apis/issue-api.ts:6982](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6982)

___

### <a id="issuegetcomments" name="issuegetcomments"></a> issueGetComments

▸ **issueGetComments**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

**`summary`** List all comments on an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetCommentsRequest`](../interfaces/IssueApiIssueGetCommentsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

#### Defined in

[apis/issue-api.ts:6994](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L6994)

___

### <a id="issuegetcommentsandtimeline" name="issuegetcommentsandtimeline"></a> issueGetCommentsAndTimeline

▸ **issueGetCommentsAndTimeline**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TimelineComment`](../interfaces/TimelineComment.md)[]\>\>

**`summary`** List all comments and events on an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetCommentsAndTimelineRequest`](../interfaces/IssueApiIssueGetCommentsAndTimelineRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TimelineComment`](../interfaces/TimelineComment.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7006](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7006)

___

### <a id="issuegetissue" name="issuegetissue"></a> issueGetIssue

▸ **issueGetIssue**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

**`summary`** Get an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetIssueRequest`](../interfaces/IssueApiIssueGetIssueRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)\>\>

#### Defined in

[apis/issue-api.ts:7018](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7018)

___

### <a id="issuegetissuereactions" name="issuegetissuereactions"></a> issueGetIssueReactions

▸ **issueGetIssueReactions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

**`summary`** Get a list reactions of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetIssueReactionsRequest`](../interfaces/IssueApiIssueGetIssueReactionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7030](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7030)

___

### <a id="issuegetlabel" name="issuegetlabel"></a> issueGetLabel

▸ **issueGetLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Get a single label

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetLabelRequest`](../interfaces/IssueApiIssueGetLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/issue-api.ts:7042](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7042)

___

### <a id="issuegetlabels" name="issuegetlabels"></a> issueGetLabels

▸ **issueGetLabels**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Get an issue\'s labels

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetLabelsRequest`](../interfaces/IssueApiIssueGetLabelsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7054](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7054)

___

### <a id="issuegetmilestone" name="issuegetmilestone"></a> issueGetMilestone

▸ **issueGetMilestone**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

**`summary`** Get a milestone

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetMilestoneRequest`](../interfaces/IssueApiIssueGetMilestoneRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)\>\>

#### Defined in

[apis/issue-api.ts:7066](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7066)

___

### <a id="issuegetmilestoneslist" name="issuegetmilestoneslist"></a> issueGetMilestonesList

▸ **issueGetMilestonesList**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)[]\>\>

**`summary`** Get all of a repository\'s opened milestones

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetMilestonesListRequest`](../interfaces/IssueApiIssueGetMilestonesListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Milestone`](../interfaces/Milestone.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7078](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7078)

___

### <a id="issuegetrepocomments" name="issuegetrepocomments"></a> issueGetRepoComments

▸ **issueGetRepoComments**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

**`summary`** List all comments in a repository

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueGetRepoCommentsRequest`](../interfaces/IssueApiIssueGetRepoCommentsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Comment`](../interfaces/Comment.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7090](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7090)

___

### <a id="issuelistissues" name="issuelistissues"></a> issueListIssues

▸ **issueListIssues**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

**`summary`** List a repository\'s issues

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueListIssuesRequest`](../interfaces/IssueApiIssueListIssuesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7102](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7102)

___

### <a id="issuelistlabels" name="issuelistlabels"></a> issueListLabels

▸ **issueListLabels**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Get all of a repository\'s labels

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueListLabelsRequest`](../interfaces/IssueApiIssueListLabelsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7114](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7114)

___

### <a id="issuepostcommentreaction" name="issuepostcommentreaction"></a> issuePostCommentReaction

▸ **issuePostCommentReaction**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

**`summary`** Add a reaction to a comment of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssuePostCommentReactionRequest`](../interfaces/IssueApiIssuePostCommentReactionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

#### Defined in

[apis/issue-api.ts:7126](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7126)

___

### <a id="issuepostissuereaction" name="issuepostissuereaction"></a> issuePostIssueReaction

▸ **issuePostIssueReaction**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

**`summary`** Add a reaction to an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssuePostIssueReactionRequest`](../interfaces/IssueApiIssuePostIssueReactionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reaction`](../interfaces/Reaction.md)\>\>

#### Defined in

[apis/issue-api.ts:7138](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7138)

___

### <a id="issueremovelabel" name="issueremovelabel"></a> issueRemoveLabel

▸ **issueRemoveLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a label from an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueRemoveLabelRequest`](../interfaces/IssueApiIssueRemoveLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:7150](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7150)

___

### <a id="issuereplacelabels" name="issuereplacelabels"></a> issueReplaceLabels

▸ **issueReplaceLabels**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** Replace an issue\'s labels

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueReplaceLabelsRequest`](../interfaces/IssueApiIssueReplaceLabelsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7162](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7162)

___

### <a id="issueresettime" name="issueresettime"></a> issueResetTime

▸ **issueResetTime**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Reset a tracked time of an issue

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueResetTimeRequest`](../interfaces/IssueApiIssueResetTimeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:7174](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7174)

___

### <a id="issuesearchissues" name="issuesearchissues"></a> issueSearchIssues

▸ **issueSearchIssues**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

**`summary`** Search for issues across the repositories that the user has access to

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueSearchIssuesRequest`](../interfaces/IssueApiIssueSearchIssuesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Issue`](../interfaces/Issue.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7186](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7186)

___

### <a id="issuestartstopwatch" name="issuestartstopwatch"></a> issueStartStopWatch

▸ **issueStartStopWatch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Start stopwatch on an issue.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueStartStopWatchRequest`](../interfaces/IssueApiIssueStartStopWatchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:7198](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7198)

___

### <a id="issuestopstopwatch" name="issuestopstopwatch"></a> issueStopStopWatch

▸ **issueStopStopWatch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Stop an issue\'s existing stopwatch.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueStopStopWatchRequest`](../interfaces/IssueApiIssueStopStopWatchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/issue-api.ts:7210](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7210)

___

### <a id="issuesubscriptions" name="issuesubscriptions"></a> issueSubscriptions

▸ **issueSubscriptions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Get users who subscribed on an issue.

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueSubscriptionsRequest`](../interfaces/IssueApiIssueSubscriptionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7222](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7222)

___

### <a id="issuetrackedtimes" name="issuetrackedtimes"></a> issueTrackedTimes

▸ **issueTrackedTimes**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List an issue\'s tracked times

**`throws`** {RequiredError}

**`memberof`** IssueApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`IssueApiIssueTrackedTimesRequest`](../interfaces/IssueApiIssueTrackedTimesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/issue-api.ts:7234](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/issue-api.ts#L7234)
