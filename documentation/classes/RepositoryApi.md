[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApi

# Class: RepositoryApi

RepositoryApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RepositoryApi`**

## Table of contents

### Constructors

- [constructor](RepositoryApi.md#constructor)

### Properties

- [axios](RepositoryApi.md#axios)
- [basePath](RepositoryApi.md#basepath)
- [configuration](RepositoryApi.md#configuration)

### Methods

- [acceptRepoTransfer](RepositoryApi.md#acceptrepotransfer)
- [createCurrentUserRepo](RepositoryApi.md#createcurrentuserrepo)
- [createFork](RepositoryApi.md#createfork)
- [generateRepo](RepositoryApi.md#generaterepo)
- [getAnnotatedTag](RepositoryApi.md#getannotatedtag)
- [getBlob](RepositoryApi.md#getblob)
- [getTree](RepositoryApi.md#gettree)
- [listForks](RepositoryApi.md#listforks)
- [rejectRepoTransfer](RepositoryApi.md#rejectrepotransfer)
- [repoAddCollaborator](RepositoryApi.md#repoaddcollaborator)
- [repoAddTeam](RepositoryApi.md#repoaddteam)
- [repoAddTopic](RepositoryApi.md#repoaddtopic)
- [repoApplyDiffPatch](RepositoryApi.md#repoapplydiffpatch)
- [repoCancelScheduledAutoMerge](RepositoryApi.md#repocancelscheduledautomerge)
- [repoCheckCollaborator](RepositoryApi.md#repocheckcollaborator)
- [repoCheckTeam](RepositoryApi.md#repocheckteam)
- [repoCreateBranch](RepositoryApi.md#repocreatebranch)
- [repoCreateBranchProtection](RepositoryApi.md#repocreatebranchprotection)
- [repoCreateFile](RepositoryApi.md#repocreatefile)
- [repoCreateGitRef](RepositoryApi.md#repocreategitref)
- [repoCreateHook](RepositoryApi.md#repocreatehook)
- [repoCreateKey](RepositoryApi.md#repocreatekey)
- [repoCreatePullRequest](RepositoryApi.md#repocreatepullrequest)
- [repoCreatePullReview](RepositoryApi.md#repocreatepullreview)
- [repoCreatePullReviewRequests](RepositoryApi.md#repocreatepullreviewrequests)
- [repoCreateRelease](RepositoryApi.md#repocreaterelease)
- [repoCreateReleaseAttachment](RepositoryApi.md#repocreatereleaseattachment)
- [repoCreateStatus](RepositoryApi.md#repocreatestatus)
- [repoCreateTag](RepositoryApi.md#repocreatetag)
- [repoCreateWikiPage](RepositoryApi.md#repocreatewikipage)
- [repoDelete](RepositoryApi.md#repodelete)
- [repoDeleteBranch](RepositoryApi.md#repodeletebranch)
- [repoDeleteBranchProtection](RepositoryApi.md#repodeletebranchprotection)
- [repoDeleteCollaborator](RepositoryApi.md#repodeletecollaborator)
- [repoDeleteFile](RepositoryApi.md#repodeletefile)
- [repoDeleteGitHook](RepositoryApi.md#repodeletegithook)
- [repoDeleteGitRef](RepositoryApi.md#repodeletegitref)
- [repoDeleteHook](RepositoryApi.md#repodeletehook)
- [repoDeleteKey](RepositoryApi.md#repodeletekey)
- [repoDeletePullReview](RepositoryApi.md#repodeletepullreview)
- [repoDeletePullReviewRequests](RepositoryApi.md#repodeletepullreviewrequests)
- [repoDeleteRelease](RepositoryApi.md#repodeleterelease)
- [repoDeleteReleaseAttachment](RepositoryApi.md#repodeletereleaseattachment)
- [repoDeleteReleaseByTag](RepositoryApi.md#repodeletereleasebytag)
- [repoDeleteTag](RepositoryApi.md#repodeletetag)
- [repoDeleteTeam](RepositoryApi.md#repodeleteteam)
- [repoDeleteTopic](RepositoryApi.md#repodeletetopic)
- [repoDeleteWikiPage](RepositoryApi.md#repodeletewikipage)
- [repoDismissPullReview](RepositoryApi.md#repodismisspullreview)
- [repoDownloadCommitDiffOrPatch](RepositoryApi.md#repodownloadcommitdifforpatch)
- [repoDownloadPullDiffOrPatch](RepositoryApi.md#repodownloadpulldifforpatch)
- [repoEdit](RepositoryApi.md#repoedit)
- [repoEditBranchProtection](RepositoryApi.md#repoeditbranchprotection)
- [repoEditGitHook](RepositoryApi.md#repoeditgithook)
- [repoEditHook](RepositoryApi.md#repoedithook)
- [repoEditPullRequest](RepositoryApi.md#repoeditpullrequest)
- [repoEditRelease](RepositoryApi.md#repoeditrelease)
- [repoEditReleaseAttachment](RepositoryApi.md#repoeditreleaseattachment)
- [repoEditWikiPage](RepositoryApi.md#repoeditwikipage)
- [repoGet](RepositoryApi.md#repoget)
- [repoGetAllCommits](RepositoryApi.md#repogetallcommits)
- [repoGetArchive](RepositoryApi.md#repogetarchive)
- [repoGetAssignees](RepositoryApi.md#repogetassignees)
- [repoGetBranch](RepositoryApi.md#repogetbranch)
- [repoGetBranchProtection](RepositoryApi.md#repogetbranchprotection)
- [repoGetByID](RepositoryApi.md#repogetbyid)
- [repoGetCombinedStatusByRef](RepositoryApi.md#repogetcombinedstatusbyref)
- [repoGetContents](RepositoryApi.md#repogetcontents)
- [repoGetContentsList](RepositoryApi.md#repogetcontentslist)
- [repoGetEditorConfig](RepositoryApi.md#repogeteditorconfig)
- [repoGetGitHook](RepositoryApi.md#repogetgithook)
- [repoGetHook](RepositoryApi.md#repogethook)
- [repoGetIssueTemplates](RepositoryApi.md#repogetissuetemplates)
- [repoGetKey](RepositoryApi.md#repogetkey)
- [repoGetLanguages](RepositoryApi.md#repogetlanguages)
- [repoGetNote](RepositoryApi.md#repogetnote)
- [repoGetPullRequest](RepositoryApi.md#repogetpullrequest)
- [repoGetPullRequestCommits](RepositoryApi.md#repogetpullrequestcommits)
- [repoGetPullReview](RepositoryApi.md#repogetpullreview)
- [repoGetPullReviewComments](RepositoryApi.md#repogetpullreviewcomments)
- [repoGetRawFile](RepositoryApi.md#repogetrawfile)
- [repoGetRawFileOrLFS](RepositoryApi.md#repogetrawfileorlfs)
- [repoGetRelease](RepositoryApi.md#repogetrelease)
- [repoGetReleaseAttachment](RepositoryApi.md#repogetreleaseattachment)
- [repoGetReleaseByTag](RepositoryApi.md#repogetreleasebytag)
- [repoGetRepoPermissions](RepositoryApi.md#repogetrepopermissions)
- [repoGetReviewers](RepositoryApi.md#repogetreviewers)
- [repoGetSingleCommit](RepositoryApi.md#repogetsinglecommit)
- [repoGetTag](RepositoryApi.md#repogettag)
- [repoGetWikiPage](RepositoryApi.md#repogetwikipage)
- [repoGetWikiPageRevisions](RepositoryApi.md#repogetwikipagerevisions)
- [repoGetWikiPages](RepositoryApi.md#repogetwikipages)
- [repoListAllGitRefs](RepositoryApi.md#repolistallgitrefs)
- [repoListBranchProtection](RepositoryApi.md#repolistbranchprotection)
- [repoListBranches](RepositoryApi.md#repolistbranches)
- [repoListCollaborators](RepositoryApi.md#repolistcollaborators)
- [repoListGitHooks](RepositoryApi.md#repolistgithooks)
- [repoListGitRefs](RepositoryApi.md#repolistgitrefs)
- [repoListHooks](RepositoryApi.md#repolisthooks)
- [repoListKeys](RepositoryApi.md#repolistkeys)
- [repoListPullRequests](RepositoryApi.md#repolistpullrequests)
- [repoListPullReviews](RepositoryApi.md#repolistpullreviews)
- [repoListReleaseAttachments](RepositoryApi.md#repolistreleaseattachments)
- [repoListReleases](RepositoryApi.md#repolistreleases)
- [repoListStargazers](RepositoryApi.md#repoliststargazers)
- [repoListStatuses](RepositoryApi.md#repoliststatuses)
- [repoListStatusesByRef](RepositoryApi.md#repoliststatusesbyref)
- [repoListSubscribers](RepositoryApi.md#repolistsubscribers)
- [repoListTags](RepositoryApi.md#repolisttags)
- [repoListTeams](RepositoryApi.md#repolistteams)
- [repoListTopics](RepositoryApi.md#repolisttopics)
- [repoMergePullRequest](RepositoryApi.md#repomergepullrequest)
- [repoMigrate](RepositoryApi.md#repomigrate)
- [repoMirrorSync](RepositoryApi.md#repomirrorsync)
- [repoPullRequestIsMerged](RepositoryApi.md#repopullrequestismerged)
- [repoSearch](RepositoryApi.md#reposearch)
- [repoSigningKey](RepositoryApi.md#reposigningkey)
- [repoSubmitPullReview](RepositoryApi.md#reposubmitpullreview)
- [repoTestHook](RepositoryApi.md#repotesthook)
- [repoTrackedTimes](RepositoryApi.md#repotrackedtimes)
- [repoTransfer](RepositoryApi.md#repotransfer)
- [repoUnDismissPullReview](RepositoryApi.md#repoundismisspullreview)
- [repoUpdateFile](RepositoryApi.md#repoupdatefile)
- [repoUpdateGitRef](RepositoryApi.md#repoupdategitref)
- [repoUpdatePullRequest](RepositoryApi.md#repoupdatepullrequest)
- [repoUpdateTopics](RepositoryApi.md#repoupdatetopics)
- [topicSearch](RepositoryApi.md#topicsearch)
- [userCurrentCheckSubscription](RepositoryApi.md#usercurrentchecksubscription)
- [userCurrentDeleteSubscription](RepositoryApi.md#usercurrentdeletesubscription)
- [userCurrentPutSubscription](RepositoryApi.md#usercurrentputsubscription)
- [userTrackedTimes](RepositoryApi.md#usertrackedtimes)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new RepositoryApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="acceptrepotransfer" name="acceptrepotransfer"></a> acceptRepoTransfer

▸ **acceptRepoTransfer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Accept a repo transfer

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiAcceptRepoTransferRequest`](../interfaces/RepositoryApiAcceptRepoTransferRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:16729](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16729)

___

### <a id="createcurrentuserrepo" name="createcurrentuserrepo"></a> createCurrentUserRepo

▸ **createCurrentUserRepo**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiCreateCurrentUserRepoRequest`](../interfaces/RepositoryApiCreateCurrentUserRepoRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:16741](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16741)

___

### <a id="createfork" name="createfork"></a> createFork

▸ **createFork**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Fork a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiCreateForkRequest`](../interfaces/RepositoryApiCreateForkRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:16753](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16753)

___

### <a id="generaterepo" name="generaterepo"></a> generateRepo

▸ **generateRepo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository using a template

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiGenerateRepoRequest`](../interfaces/RepositoryApiGenerateRepoRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:16765](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16765)

___

### <a id="getannotatedtag" name="getannotatedtag"></a> getAnnotatedTag

▸ **getAnnotatedTag**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`AnnotatedTag`](../interfaces/AnnotatedTag.md)\>\>

**`summary`** Gets the tag object of an annotated tag (not lightweight tags)

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiGetAnnotatedTagRequest`](../interfaces/RepositoryApiGetAnnotatedTagRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AnnotatedTag`](../interfaces/AnnotatedTag.md)\>\>

#### Defined in

[apis/repository-api.ts:16777](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16777)

___

### <a id="getblob" name="getblob"></a> getBlob

▸ **getBlob**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GitBlobResponse`](../interfaces/GitBlobResponse.md)\>\>

**`summary`** Gets the blob of a repository.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiGetBlobRequest`](../interfaces/RepositoryApiGetBlobRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitBlobResponse`](../interfaces/GitBlobResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:16789](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16789)

___

### <a id="gettree" name="gettree"></a> getTree

▸ **getTree**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GitTreeResponse`](../interfaces/GitTreeResponse.md)\>\>

**`summary`** Gets the tree of a repository.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiGetTreeRequest`](../interfaces/RepositoryApiGetTreeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitTreeResponse`](../interfaces/GitTreeResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:16801](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16801)

___

### <a id="listforks" name="listforks"></a> listForks

▸ **listForks**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List a repository\'s forks

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiListForksRequest`](../interfaces/RepositoryApiListForksRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/repository-api.ts:16813](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16813)

___

### <a id="rejectrepotransfer" name="rejectrepotransfer"></a> rejectRepoTransfer

▸ **rejectRepoTransfer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Reject a repo transfer

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRejectRepoTransferRequest`](../interfaces/RepositoryApiRejectRepoTransferRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:16825](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16825)

___

### <a id="repoaddcollaborator" name="repoaddcollaborator"></a> repoAddCollaborator

▸ **repoAddCollaborator**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a collaborator to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoAddCollaboratorRequest`](../interfaces/RepositoryApiRepoAddCollaboratorRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:16837](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16837)

___

### <a id="repoaddteam" name="repoaddteam"></a> repoAddTeam

▸ **repoAddTeam**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a team to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoAddTeamRequest`](../interfaces/RepositoryApiRepoAddTeamRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:16849](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16849)

___

### <a id="repoaddtopic" name="repoaddtopic"></a> repoAddTopic

▸ **repoAddTopic**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a topic to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoAddTopicRequest`](../interfaces/RepositoryApiRepoAddTopicRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:16861](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16861)

___

### <a id="repoapplydiffpatch" name="repoapplydiffpatch"></a> repoApplyDiffPatch

▸ **repoApplyDiffPatch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

**`summary`** Apply diff patch to repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoApplyDiffPatchRequest`](../interfaces/RepositoryApiRepoApplyDiffPatchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:16873](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16873)

___

### <a id="repocancelscheduledautomerge" name="repocancelscheduledautomerge"></a> repoCancelScheduledAutoMerge

▸ **repoCancelScheduledAutoMerge**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Cancel the scheduled auto merge for the given pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCancelScheduledAutoMergeRequest`](../interfaces/RepositoryApiRepoCancelScheduledAutoMergeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:16885](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16885)

___

### <a id="repocheckcollaborator" name="repocheckcollaborator"></a> repoCheckCollaborator

▸ **repoCheckCollaborator**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a collaborator of a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCheckCollaboratorRequest`](../interfaces/RepositoryApiRepoCheckCollaboratorRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:16897](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16897)

___

### <a id="repocheckteam" name="repocheckteam"></a> repoCheckTeam

▸ **repoCheckTeam**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Check if a team is assigned to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCheckTeamRequest`](../interfaces/RepositoryApiRepoCheckTeamRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/repository-api.ts:16909](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16909)

___

### <a id="repocreatebranch" name="repocreatebranch"></a> repoCreateBranch

▸ **repoCreateBranch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

**`summary`** Create a branch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateBranchRequest`](../interfaces/RepositoryApiRepoCreateBranchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

#### Defined in

[apis/repository-api.ts:16921](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16921)

___

### <a id="repocreatebranchprotection" name="repocreatebranchprotection"></a> repoCreateBranchProtection

▸ **repoCreateBranchProtection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Create a branch protections for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateBranchProtectionRequest`](../interfaces/RepositoryApiRepoCreateBranchProtectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:16933](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16933)

___

### <a id="repocreatefile" name="repocreatefile"></a> repoCreateFile

▸ **repoCreateFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

**`summary`** Create a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateFileRequest`](../interfaces/RepositoryApiRepoCreateFileRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:16945](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16945)

___

### <a id="repocreategitref" name="repocreategitref"></a> repoCreateGitRef

▸ **repoCreateGitRef**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)\>\>

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

**`summary`** Create a reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateGitRefRequest`](../interfaces/RepositoryApiRepoCreateGitRefRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)\>\>

#### Defined in

[apis/repository-api.ts:16957](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16957)

___

### <a id="repocreatehook" name="repocreatehook"></a> repoCreateHook

▸ **repoCreateHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Create a hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateHookRequest`](../interfaces/RepositoryApiRepoCreateHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:16969](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16969)

___

### <a id="repocreatekey" name="repocreatekey"></a> repoCreateKey

▸ **repoCreateKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

**`summary`** Add a key to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateKeyRequest`](../interfaces/RepositoryApiRepoCreateKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

#### Defined in

[apis/repository-api.ts:16981](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16981)

___

### <a id="repocreatepullrequest" name="repocreatepullrequest"></a> repoCreatePullRequest

▸ **repoCreatePullRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Create a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreatePullRequestRequest`](../interfaces/RepositoryApiRepoCreatePullRequestRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:16993](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16993)

___

### <a id="repocreatepullreview" name="repocreatepullreview"></a> repoCreatePullReview

▸ **repoCreatePullReview**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Create a review to an pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreatePullReviewRequest`](../interfaces/RepositoryApiRepoCreatePullReviewRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:17005](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17005)

___

### <a id="repocreatepullreviewrequests" name="repocreatepullreviewrequests"></a> repoCreatePullReviewRequests

▸ **repoCreatePullReviewRequests**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

**`summary`** create review requests for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreatePullReviewRequestsRequest`](../interfaces/RepositoryApiRepoCreatePullReviewRequestsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17017](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17017)

___

### <a id="repocreaterelease" name="repocreaterelease"></a> repoCreateRelease

▸ **repoCreateRelease**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Create a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateReleaseRequest`](../interfaces/RepositoryApiRepoCreateReleaseRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:17029](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17029)

___

### <a id="repocreatereleaseattachment" name="repocreatereleaseattachment"></a> repoCreateReleaseAttachment

▸ **repoCreateReleaseAttachment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Create a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateReleaseAttachmentRequest`](../interfaces/RepositoryApiRepoCreateReleaseAttachmentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:17041](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17041)

___

### <a id="repocreatestatus" name="repocreatestatus"></a> repoCreateStatus

▸ **repoCreateStatus**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)\>\>

**`summary`** Create a commit status

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateStatusRequest`](../interfaces/RepositoryApiRepoCreateStatusRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)\>\>

#### Defined in

[apis/repository-api.ts:17053](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17053)

___

### <a id="repocreatetag" name="repocreatetag"></a> repoCreateTag

▸ **repoCreateTag**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

**`summary`** Create a new git tag in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateTagRequest`](../interfaces/RepositoryApiRepoCreateTagRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

#### Defined in

[apis/repository-api.ts:17065](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17065)

___

### <a id="repocreatewikipage" name="repocreatewikipage"></a> repoCreateWikiPage

▸ **repoCreateWikiPage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Create a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoCreateWikiPageRequest`](../interfaces/RepositoryApiRepoCreateWikiPageRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:17077](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17077)

___

### <a id="repodelete" name="repodelete"></a> repoDelete

▸ **repoDelete**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteRequest`](../interfaces/RepositoryApiRepoDeleteRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17089](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17089)

___

### <a id="repodeletebranch" name="repodeletebranch"></a> repoDeleteBranch

▸ **repoDeleteBranch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific branch from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteBranchRequest`](../interfaces/RepositoryApiRepoDeleteBranchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17101](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17101)

___

### <a id="repodeletebranchprotection" name="repodeletebranchprotection"></a> repoDeleteBranchProtection

▸ **repoDeleteBranchProtection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific branch protection for the repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteBranchProtectionRequest`](../interfaces/RepositoryApiRepoDeleteBranchProtectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17113](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17113)

___

### <a id="repodeletecollaborator" name="repodeletecollaborator"></a> repoDeleteCollaborator

▸ **repoDeleteCollaborator**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a collaborator from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteCollaboratorRequest`](../interfaces/RepositoryApiRepoDeleteCollaboratorRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17125](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17125)

___

### <a id="repodeletefile" name="repodeletefile"></a> repoDeleteFile

▸ **repoDeleteFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`FileDeleteResponse`](../interfaces/FileDeleteResponse.md)\>\>

**`summary`** Delete a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteFileRequest`](../interfaces/RepositoryApiRepoDeleteFileRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileDeleteResponse`](../interfaces/FileDeleteResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:17137](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17137)

___

### <a id="repodeletegithook" name="repodeletegithook"></a> repoDeleteGitHook

▸ **repoDeleteGitHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a Git hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteGitHookRequest`](../interfaces/RepositoryApiRepoDeleteGitHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17149](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17149)

___

### <a id="repodeletegitref" name="repodeletegitref"></a> repoDeleteGitRef

▸ **repoDeleteGitRef**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteGitRefRequest`](../interfaces/RepositoryApiRepoDeleteGitRefRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17161](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17161)

___

### <a id="repodeletehook" name="repodeletehook"></a> repoDeleteHook

▸ **repoDeleteHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteHookRequest`](../interfaces/RepositoryApiRepoDeleteHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17173](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17173)

___

### <a id="repodeletekey" name="repodeletekey"></a> repoDeleteKey

▸ **repoDeleteKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a key from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteKeyRequest`](../interfaces/RepositoryApiRepoDeleteKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17185](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17185)

___

### <a id="repodeletepullreview" name="repodeletepullreview"></a> repoDeletePullReview

▸ **repoDeletePullReview**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific review from a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeletePullReviewRequest`](../interfaces/RepositoryApiRepoDeletePullReviewRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17197](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17197)

___

### <a id="repodeletepullreviewrequests" name="repodeletepullreviewrequests"></a> repoDeletePullReviewRequests

▸ **repoDeletePullReviewRequests**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** cancel review requests for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeletePullReviewRequestsRequest`](../interfaces/RepositoryApiRepoDeletePullReviewRequestsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17209](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17209)

___

### <a id="repodeleterelease" name="repodeleterelease"></a> repoDeleteRelease

▸ **repoDeleteRelease**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteReleaseRequest`](../interfaces/RepositoryApiRepoDeleteReleaseRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17221](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17221)

___

### <a id="repodeletereleaseattachment" name="repodeletereleaseattachment"></a> repoDeleteReleaseAttachment

▸ **repoDeleteReleaseAttachment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteReleaseAttachmentRequest`](../interfaces/RepositoryApiRepoDeleteReleaseAttachmentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17233](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17233)

___

### <a id="repodeletereleasebytag" name="repodeletereleasebytag"></a> repoDeleteReleaseByTag

▸ **repoDeleteReleaseByTag**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteReleaseByTagRequest`](../interfaces/RepositoryApiRepoDeleteReleaseByTagRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17245](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17245)

___

### <a id="repodeletetag" name="repodeletetag"></a> repoDeleteTag

▸ **repoDeleteTag**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a repository\'s tag by name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteTagRequest`](../interfaces/RepositoryApiRepoDeleteTagRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17257](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17257)

___

### <a id="repodeleteteam" name="repodeleteteam"></a> repoDeleteTeam

▸ **repoDeleteTeam**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a team from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteTeamRequest`](../interfaces/RepositoryApiRepoDeleteTeamRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17269](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17269)

___

### <a id="repodeletetopic" name="repodeletetopic"></a> repoDeleteTopic

▸ **repoDeleteTopic**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a topic from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteTopicRequest`](../interfaces/RepositoryApiRepoDeleteTopicRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17281](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17281)

___

### <a id="repodeletewikipage" name="repodeletewikipage"></a> repoDeleteWikiPage

▸ **repoDeleteWikiPage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDeleteWikiPageRequest`](../interfaces/RepositoryApiRepoDeleteWikiPageRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17293](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17293)

___

### <a id="repodismisspullreview" name="repodismisspullreview"></a> repoDismissPullReview

▸ **repoDismissPullReview**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Dismiss a review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDismissPullReviewRequest`](../interfaces/RepositoryApiRepoDismissPullReviewRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:17305](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17305)

___

### <a id="repodownloadcommitdifforpatch" name="repodownloadcommitdifforpatch"></a> repoDownloadCommitDiffOrPatch

▸ **repoDownloadCommitDiffOrPatch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get a commit\'s diff or patch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDownloadCommitDiffOrPatchRequest`](../interfaces/RepositoryApiRepoDownloadCommitDiffOrPatchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:17317](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17317)

___

### <a id="repodownloadpulldifforpatch" name="repodownloadpulldifforpatch"></a> repoDownloadPullDiffOrPatch

▸ **repoDownloadPullDiffOrPatch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get a pull request diff or patch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoDownloadPullDiffOrPatchRequest`](../interfaces/RepositoryApiRepoDownloadPullDiffOrPatchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:17329](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17329)

___

### <a id="repoedit" name="repoedit"></a> repoEdit

▸ **repoEdit**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Edit a repository\'s properties. Only fields that are set will be changed.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditRequest`](../interfaces/RepositoryApiRepoEditRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17341](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17341)

___

### <a id="repoeditbranchprotection" name="repoeditbranchprotection"></a> repoEditBranchProtection

▸ **repoEditBranchProtection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Edit a branch protections for a repository. Only fields that are set will be changed

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditBranchProtectionRequest`](../interfaces/RepositoryApiRepoEditBranchProtectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:17353](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17353)

___

### <a id="repoeditgithook" name="repoeditgithook"></a> repoEditGitHook

▸ **repoEditGitHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

**`summary`** Edit a Git hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditGitHookRequest`](../interfaces/RepositoryApiRepoEditGitHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

#### Defined in

[apis/repository-api.ts:17365](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17365)

___

### <a id="repoedithook" name="repoedithook"></a> repoEditHook

▸ **repoEditHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Edit a hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditHookRequest`](../interfaces/RepositoryApiRepoEditHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:17377](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17377)

___

### <a id="repoeditpullrequest" name="repoeditpullrequest"></a> repoEditPullRequest

▸ **repoEditPullRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditPullRequestRequest`](../interfaces/RepositoryApiRepoEditPullRequestRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:17389](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17389)

___

### <a id="repoeditrelease" name="repoeditrelease"></a> repoEditRelease

▸ **repoEditRelease**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Update a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditReleaseRequest`](../interfaces/RepositoryApiRepoEditReleaseRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:17401](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17401)

___

### <a id="repoeditreleaseattachment" name="repoeditreleaseattachment"></a> repoEditReleaseAttachment

▸ **repoEditReleaseAttachment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Edit a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditReleaseAttachmentRequest`](../interfaces/RepositoryApiRepoEditReleaseAttachmentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:17413](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17413)

___

### <a id="repoeditwikipage" name="repoeditwikipage"></a> repoEditWikiPage

▸ **repoEditWikiPage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Edit a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoEditWikiPageRequest`](../interfaces/RepositoryApiRepoEditWikiPageRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:17425](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17425)

___

### <a id="repoget" name="repoget"></a> repoGet

▸ **repoGet**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Get a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetRequest`](../interfaces/RepositoryApiRepoGetRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17437](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17437)

___

### <a id="repogetallcommits" name="repogetallcommits"></a> repoGetAllCommits

▸ **repoGetAllCommits**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

**`summary`** Get a list of all commits from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetAllCommitsRequest`](../interfaces/RepositoryApiRepoGetAllCommitsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17449](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17449)

___

### <a id="repogetarchive" name="repogetarchive"></a> repoGetArchive

▸ **repoGetArchive**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get an archive of a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetArchiveRequest`](../interfaces/RepositoryApiRepoGetArchiveRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17461](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17461)

___

### <a id="repogetassignees" name="repogetassignees"></a> repoGetAssignees

▸ **repoGetAssignees**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Return all users that have write access and can be assigned to issues

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetAssigneesRequest`](../interfaces/RepositoryApiRepoGetAssigneesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17473](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17473)

___

### <a id="repogetbranch" name="repogetbranch"></a> repoGetBranch

▸ **repoGetBranch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

**`summary`** Retrieve a specific branch from a repository, including its effective branch protection

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetBranchRequest`](../interfaces/RepositoryApiRepoGetBranchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

#### Defined in

[apis/repository-api.ts:17485](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17485)

___

### <a id="repogetbranchprotection" name="repogetbranchprotection"></a> repoGetBranchProtection

▸ **repoGetBranchProtection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Get a specific branch protection for the repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetBranchProtectionRequest`](../interfaces/RepositoryApiRepoGetBranchProtectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:17497](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17497)

___

### <a id="repogetbyid" name="repogetbyid"></a> repoGetByID

▸ **repoGetByID**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Get a repository by id

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetByIDRequest`](../interfaces/RepositoryApiRepoGetByIDRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17509](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17509)

___

### <a id="repogetcombinedstatusbyref" name="repogetcombinedstatusbyref"></a> repoGetCombinedStatusByRef

▸ **repoGetCombinedStatusByRef**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CombinedStatus`](../interfaces/CombinedStatus.md)\>\>

**`summary`** Get a commit\'s combined status, by branch/tag/commit reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetCombinedStatusByRefRequest`](../interfaces/RepositoryApiRepoGetCombinedStatusByRefRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CombinedStatus`](../interfaces/CombinedStatus.md)\>\>

#### Defined in

[apis/repository-api.ts:17521](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17521)

___

### <a id="repogetcontents" name="repogetcontents"></a> repoGetContents

▸ **repoGetContents**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)\>\>

**`summary`** Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetContentsRequest`](../interfaces/RepositoryApiRepoGetContentsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:17533](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17533)

___

### <a id="repogetcontentslist" name="repogetcontentslist"></a> repoGetContentsList

▸ **repoGetContentsList**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)[]\>\>

**`summary`** Gets the metadata of all the entries of the root dir

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetContentsListRequest`](../interfaces/RepositoryApiRepoGetContentsListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17545](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17545)

___

### <a id="repogeteditorconfig" name="repogeteditorconfig"></a> repoGetEditorConfig

▸ **repoGetEditorConfig**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get the EditorConfig definitions of a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetEditorConfigRequest`](../interfaces/RepositoryApiRepoGetEditorConfigRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17557](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17557)

___

### <a id="repogetgithook" name="repogetgithook"></a> repoGetGitHook

▸ **repoGetGitHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

**`summary`** Get a Git hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetGitHookRequest`](../interfaces/RepositoryApiRepoGetGitHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

#### Defined in

[apis/repository-api.ts:17569](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17569)

___

### <a id="repogethook" name="repogethook"></a> repoGetHook

▸ **repoGetHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Get a hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetHookRequest`](../interfaces/RepositoryApiRepoGetHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:17581](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17581)

___

### <a id="repogetissuetemplates" name="repogetissuetemplates"></a> repoGetIssueTemplates

▸ **repoGetIssueTemplates**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`IssueTemplate`](../interfaces/IssueTemplate.md)[]\>\>

**`summary`** Get available issue templates for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetIssueTemplatesRequest`](../interfaces/RepositoryApiRepoGetIssueTemplatesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`IssueTemplate`](../interfaces/IssueTemplate.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17593](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17593)

___

### <a id="repogetkey" name="repogetkey"></a> repoGetKey

▸ **repoGetKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

**`summary`** Get a repository\'s key by id

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetKeyRequest`](../interfaces/RepositoryApiRepoGetKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

#### Defined in

[apis/repository-api.ts:17605](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17605)

___

### <a id="repogetlanguages" name="repogetlanguages"></a> repoGetLanguages

▸ **repoGetLanguages**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<{ `[key: string]`: `number`;  }\>\>

**`summary`** Get languages and number of bytes of code written

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetLanguagesRequest`](../interfaces/RepositoryApiRepoGetLanguagesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<{ `[key: string]`: `number`;  }\>\>

#### Defined in

[apis/repository-api.ts:17617](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17617)

___

### <a id="repogetnote" name="repogetnote"></a> repoGetNote

▸ **repoGetNote**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Note`](../interfaces/Note.md)\>\>

**`summary`** Get a note corresponding to a single commit from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetNoteRequest`](../interfaces/RepositoryApiRepoGetNoteRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Note`](../interfaces/Note.md)\>\>

#### Defined in

[apis/repository-api.ts:17629](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17629)

___

### <a id="repogetpullrequest" name="repogetpullrequest"></a> repoGetPullRequest

▸ **repoGetPullRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Get a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetPullRequestRequest`](../interfaces/RepositoryApiRepoGetPullRequestRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:17641](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17641)

___

### <a id="repogetpullrequestcommits" name="repogetpullrequestcommits"></a> repoGetPullRequestCommits

▸ **repoGetPullRequestCommits**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

**`summary`** Get commits for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetPullRequestCommitsRequest`](../interfaces/RepositoryApiRepoGetPullRequestCommitsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17653](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17653)

___

### <a id="repogetpullreview" name="repogetpullreview"></a> repoGetPullReview

▸ **repoGetPullReview**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Get a specific review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetPullReviewRequest`](../interfaces/RepositoryApiRepoGetPullReviewRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:17665](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17665)

___

### <a id="repogetpullreviewcomments" name="repogetpullreviewcomments"></a> repoGetPullReviewComments

▸ **repoGetPullReviewComments**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReviewComment`](../interfaces/PullReviewComment.md)[]\>\>

**`summary`** Get a specific review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetPullReviewCommentsRequest`](../interfaces/RepositoryApiRepoGetPullReviewCommentsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReviewComment`](../interfaces/PullReviewComment.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17677](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17677)

___

### <a id="repogetrawfile" name="repogetrawfile"></a> repoGetRawFile

▸ **repoGetRawFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get a file from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetRawFileRequest`](../interfaces/RepositoryApiRepoGetRawFileRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17689](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17689)

___

### <a id="repogetrawfileorlfs" name="repogetrawfileorlfs"></a> repoGetRawFileOrLFS

▸ **repoGetRawFileOrLFS**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get a file or it\'s LFS object from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetRawFileOrLFSRequest`](../interfaces/RepositoryApiRepoGetRawFileOrLFSRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17701](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17701)

___

### <a id="repogetrelease" name="repogetrelease"></a> repoGetRelease

▸ **repoGetRelease**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Get a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetReleaseRequest`](../interfaces/RepositoryApiRepoGetReleaseRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:17713](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17713)

___

### <a id="repogetreleaseattachment" name="repogetreleaseattachment"></a> repoGetReleaseAttachment

▸ **repoGetReleaseAttachment**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Get a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetReleaseAttachmentRequest`](../interfaces/RepositoryApiRepoGetReleaseAttachmentRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:17725](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17725)

___

### <a id="repogetreleasebytag" name="repogetreleasebytag"></a> repoGetReleaseByTag

▸ **repoGetReleaseByTag**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Get a release by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetReleaseByTagRequest`](../interfaces/RepositoryApiRepoGetReleaseByTagRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:17737](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17737)

___

### <a id="repogetrepopermissions" name="repogetrepopermissions"></a> repoGetRepoPermissions

▸ **repoGetRepoPermissions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RepoCollaboratorPermission`](../interfaces/RepoCollaboratorPermission.md)\>\>

**`summary`** Get repository permissions for a user

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetRepoPermissionsRequest`](../interfaces/RepositoryApiRepoGetRepoPermissionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`RepoCollaboratorPermission`](../interfaces/RepoCollaboratorPermission.md)\>\>

#### Defined in

[apis/repository-api.ts:17749](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17749)

___

### <a id="repogetreviewers" name="repogetreviewers"></a> repoGetReviewers

▸ **repoGetReviewers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Return all users that can be requested to review in this repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetReviewersRequest`](../interfaces/RepositoryApiRepoGetReviewersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17761](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17761)

___

### <a id="repogetsinglecommit" name="repogetsinglecommit"></a> repoGetSingleCommit

▸ **repoGetSingleCommit**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)\>\>

**`summary`** Get a single commit from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetSingleCommitRequest`](../interfaces/RepositoryApiRepoGetSingleCommitRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)\>\>

#### Defined in

[apis/repository-api.ts:17773](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17773)

___

### <a id="repogettag" name="repogettag"></a> repoGetTag

▸ **repoGetTag**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

**`summary`** Get the tag of a repository by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetTagRequest`](../interfaces/RepositoryApiRepoGetTagRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

#### Defined in

[apis/repository-api.ts:17785](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17785)

___

### <a id="repogetwikipage" name="repogetwikipage"></a> repoGetWikiPage

▸ **repoGetWikiPage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Get a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetWikiPageRequest`](../interfaces/RepositoryApiRepoGetWikiPageRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:17797](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17797)

___

### <a id="repogetwikipagerevisions" name="repogetwikipagerevisions"></a> repoGetWikiPageRevisions

▸ **repoGetWikiPageRevisions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WikiCommitList`](../interfaces/WikiCommitList.md)\>\>

**`summary`** Get revisions of a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetWikiPageRevisionsRequest`](../interfaces/RepositoryApiRepoGetWikiPageRevisionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiCommitList`](../interfaces/WikiCommitList.md)\>\>

#### Defined in

[apis/repository-api.ts:17809](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17809)

___

### <a id="repogetwikipages" name="repogetwikipages"></a> repoGetWikiPages

▸ **repoGetWikiPages**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WikiPageMetaData`](../interfaces/WikiPageMetaData.md)[]\>\>

**`summary`** Get all wiki pages

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoGetWikiPagesRequest`](../interfaces/RepositoryApiRepoGetWikiPagesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPageMetaData`](../interfaces/WikiPageMetaData.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17821](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17821)

___

### <a id="repolistallgitrefs" name="repolistallgitrefs"></a> repoListAllGitRefs

▸ **repoListAllGitRefs**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

**`summary`** Get specified ref or filtered repository\'s refs

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListAllGitRefsRequest`](../interfaces/RepositoryApiRepoListAllGitRefsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17833](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17833)

___

### <a id="repolistbranchprotection" name="repolistbranchprotection"></a> repoListBranchProtection

▸ **repoListBranchProtection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)[]\>\>

**`summary`** List branch protections for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListBranchProtectionRequest`](../interfaces/RepositoryApiRepoListBranchProtectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17845](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17845)

___

### <a id="repolistbranches" name="repolistbranches"></a> repoListBranches

▸ **repoListBranches**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)[]\>\>

**`summary`** List a repository\'s branches

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListBranchesRequest`](../interfaces/RepositoryApiRepoListBranchesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17857](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17857)

___

### <a id="repolistcollaborators" name="repolistcollaborators"></a> repoListCollaborators

▸ **repoListCollaborators**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repository\'s collaborators

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListCollaboratorsRequest`](../interfaces/RepositoryApiRepoListCollaboratorsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17869](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17869)

___

### <a id="repolistgithooks" name="repolistgithooks"></a> repoListGitHooks

▸ **repoListGitHooks**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)[]\>\>

**`summary`** List the Git hooks in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListGitHooksRequest`](../interfaces/RepositoryApiRepoListGitHooksRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17881](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17881)

___

### <a id="repolistgitrefs" name="repolistgitrefs"></a> repoListGitRefs

▸ **repoListGitRefs**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

**`summary`** Get specified ref or filtered repository\'s refs

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListGitRefsRequest`](../interfaces/RepositoryApiRepoListGitRefsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17893](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17893)

___

### <a id="repolisthooks" name="repolisthooks"></a> repoListHooks

▸ **repoListHooks**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

**`summary`** List the hooks in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListHooksRequest`](../interfaces/RepositoryApiRepoListHooksRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17905](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17905)

___

### <a id="repolistkeys" name="repolistkeys"></a> repoListKeys

▸ **repoListKeys**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)[]\>\>

**`summary`** List a repository\'s keys

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListKeysRequest`](../interfaces/RepositoryApiRepoListKeysRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17917](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17917)

___

### <a id="repolistpullrequests" name="repolistpullrequests"></a> repoListPullRequests

▸ **repoListPullRequests**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)[]\>\>

**`summary`** List a repo\'s pull requests

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListPullRequestsRequest`](../interfaces/RepositoryApiRepoListPullRequestsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17929](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17929)

___

### <a id="repolistpullreviews" name="repolistpullreviews"></a> repoListPullReviews

▸ **repoListPullReviews**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

**`summary`** List all reviews for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListPullReviewsRequest`](../interfaces/RepositoryApiRepoListPullReviewsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17941](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17941)

___

### <a id="repolistreleaseattachments" name="repolistreleaseattachments"></a> repoListReleaseAttachments

▸ **repoListReleaseAttachments**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)[]\>\>

**`summary`** List release\'s attachments

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListReleaseAttachmentsRequest`](../interfaces/RepositoryApiRepoListReleaseAttachmentsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17953](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17953)

___

### <a id="repolistreleases" name="repolistreleases"></a> repoListReleases

▸ **repoListReleases**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)[]\>\>

**`summary`** List a repo\'s releases

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListReleasesRequest`](../interfaces/RepositoryApiRepoListReleasesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17965](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17965)

___

### <a id="repoliststargazers" name="repoliststargazers"></a> repoListStargazers

▸ **repoListStargazers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repo\'s stargazers

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListStargazersRequest`](../interfaces/RepositoryApiRepoListStargazersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17977](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17977)

___

### <a id="repoliststatuses" name="repoliststatuses"></a> repoListStatuses

▸ **repoListStatuses**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

**`summary`** Get a commit\'s statuses

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListStatusesRequest`](../interfaces/RepositoryApiRepoListStatusesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17989](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L17989)

___

### <a id="repoliststatusesbyref" name="repoliststatusesbyref"></a> repoListStatusesByRef

▸ **repoListStatusesByRef**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

**`summary`** Get a commit\'s statuses, by branch/tag/commit reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListStatusesByRefRequest`](../interfaces/RepositoryApiRepoListStatusesByRefRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18001](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18001)

___

### <a id="repolistsubscribers" name="repolistsubscribers"></a> repoListSubscribers

▸ **repoListSubscribers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repo\'s watchers

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListSubscribersRequest`](../interfaces/RepositoryApiRepoListSubscribersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18013](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18013)

___

### <a id="repolisttags" name="repolisttags"></a> repoListTags

▸ **repoListTags**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

**`summary`** List a repository\'s tags

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListTagsRequest`](../interfaces/RepositoryApiRepoListTagsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18025](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18025)

___

### <a id="repolistteams" name="repolistteams"></a> repoListTeams

▸ **repoListTeams**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List a repository\'s teams

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListTeamsRequest`](../interfaces/RepositoryApiRepoListTeamsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18037](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18037)

___

### <a id="repolisttopics" name="repolisttopics"></a> repoListTopics

▸ **repoListTopics**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TopicName`](../interfaces/TopicName.md)\>\>

**`summary`** Get list of topics that a repository has

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoListTopicsRequest`](../interfaces/RepositoryApiRepoListTopicsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TopicName`](../interfaces/TopicName.md)\>\>

#### Defined in

[apis/repository-api.ts:18049](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18049)

___

### <a id="repomergepullrequest" name="repomergepullrequest"></a> repoMergePullRequest

▸ **repoMergePullRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Merge a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoMergePullRequestRequest`](../interfaces/RepositoryApiRepoMergePullRequestRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18061](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18061)

___

### <a id="repomigrate" name="repomigrate"></a> repoMigrate

▸ **repoMigrate**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Migrate a remote git repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoMigrateRequest`](../interfaces/RepositoryApiRepoMigrateRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:18073](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18073)

___

### <a id="repomirrorsync" name="repomirrorsync"></a> repoMirrorSync

▸ **repoMirrorSync**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sync a mirrored repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoMirrorSyncRequest`](../interfaces/RepositoryApiRepoMirrorSyncRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18085](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18085)

___

### <a id="repopullrequestismerged" name="repopullrequestismerged"></a> repoPullRequestIsMerged

▸ **repoPullRequestIsMerged**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a pull request has been merged

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoPullRequestIsMergedRequest`](../interfaces/RepositoryApiRepoPullRequestIsMergedRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18097](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18097)

___

### <a id="reposearch" name="reposearch"></a> repoSearch

▸ **repoSearch**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`SearchResults`](../interfaces/SearchResults.md)\>\>

**`summary`** Search for repositories

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoSearchRequest`](../interfaces/RepositoryApiRepoSearchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`SearchResults`](../interfaces/SearchResults.md)\>\>

#### Defined in

[apis/repository-api.ts:18109](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18109)

___

### <a id="reposigningkey" name="reposigningkey"></a> repoSigningKey

▸ **repoSigningKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get signing-key.gpg for given repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoSigningKeyRequest`](../interfaces/RepositoryApiRepoSigningKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:18121](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18121)

___

### <a id="reposubmitpullreview" name="reposubmitpullreview"></a> repoSubmitPullReview

▸ **repoSubmitPullReview**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Submit a pending review to an pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoSubmitPullReviewRequest`](../interfaces/RepositoryApiRepoSubmitPullReviewRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:18133](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18133)

___

### <a id="repotesthook" name="repotesthook"></a> repoTestHook

▸ **repoTestHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Test a push webhook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoTestHookRequest`](../interfaces/RepositoryApiRepoTestHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18145](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18145)

___

### <a id="repotrackedtimes" name="repotrackedtimes"></a> repoTrackedTimes

▸ **repoTrackedTimes**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List a repo\'s tracked times

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoTrackedTimesRequest`](../interfaces/RepositoryApiRepoTrackedTimesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18157](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18157)

___

### <a id="repotransfer" name="repotransfer"></a> repoTransfer

▸ **repoTransfer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Transfer a repo ownership

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoTransferRequest`](../interfaces/RepositoryApiRepoTransferRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:18169](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18169)

___

### <a id="repoundismisspullreview" name="repoundismisspullreview"></a> repoUnDismissPullReview

▸ **repoUnDismissPullReview**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Cancel to dismiss a review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoUnDismissPullReviewRequest`](../interfaces/RepositoryApiRepoUnDismissPullReviewRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:18181](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18181)

___

### <a id="repoupdatefile" name="repoupdatefile"></a> repoUpdateFile

▸ **repoUpdateFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

**`summary`** Update a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoUpdateFileRequest`](../interfaces/RepositoryApiRepoUpdateFileRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:18193](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18193)

___

### <a id="repoupdategitref" name="repoupdategitref"></a> repoUpdateGitRef

▸ **repoUpdateGitRef**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)\>\>

**`summary`** Update a reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoUpdateGitRefRequest`](../interfaces/RepositoryApiRepoUpdateGitRefRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)\>\>

#### Defined in

[apis/repository-api.ts:18205](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18205)

___

### <a id="repoupdatepullrequest" name="repoupdatepullrequest"></a> repoUpdatePullRequest

▸ **repoUpdatePullRequest**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Merge PR\'s baseBranch into headBranch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoUpdatePullRequestRequest`](../interfaces/RepositoryApiRepoUpdatePullRequestRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18217](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18217)

___

### <a id="repoupdatetopics" name="repoupdatetopics"></a> repoUpdateTopics

▸ **repoUpdateTopics**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Replace list of topics for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiRepoUpdateTopicsRequest`](../interfaces/RepositoryApiRepoUpdateTopicsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18229](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18229)

___

### <a id="topicsearch" name="topicsearch"></a> topicSearch

▸ **topicSearch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TopicResponse`](../interfaces/TopicResponse.md)[]\>\>

**`summary`** search topics via keyword

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiTopicSearchRequest`](../interfaces/RepositoryApiTopicSearchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TopicResponse`](../interfaces/TopicResponse.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18241](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18241)

___

### <a id="usercurrentchecksubscription" name="usercurrentchecksubscription"></a> userCurrentCheckSubscription

▸ **userCurrentCheckSubscription**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Check if the current user is watching a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiUserCurrentCheckSubscriptionRequest`](../interfaces/RepositoryApiUserCurrentCheckSubscriptionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/repository-api.ts:18253](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18253)

___

### <a id="usercurrentdeletesubscription" name="usercurrentdeletesubscription"></a> userCurrentDeleteSubscription

▸ **userCurrentDeleteSubscription**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unwatch a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiUserCurrentDeleteSubscriptionRequest`](../interfaces/RepositoryApiUserCurrentDeleteSubscriptionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18265](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18265)

___

### <a id="usercurrentputsubscription" name="usercurrentputsubscription"></a> userCurrentPutSubscription

▸ **userCurrentPutSubscription**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Watch a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiUserCurrentPutSubscriptionRequest`](../interfaces/RepositoryApiUserCurrentPutSubscriptionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/repository-api.ts:18277](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18277)

___

### <a id="usertrackedtimes" name="usertrackedtimes"></a> userTrackedTimes

▸ **userTrackedTimes**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List a user\'s tracked times in a repo

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`RepositoryApiUserTrackedTimesRequest`](../interfaces/RepositoryApiUserTrackedTimesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18290](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L18290)
