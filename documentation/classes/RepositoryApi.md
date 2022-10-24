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
- [repoCheckCollaborator](RepositoryApi.md#repocheckcollaborator)
- [repoCheckTeam](RepositoryApi.md#repocheckteam)
- [repoCreateBranch](RepositoryApi.md#repocreatebranch)
- [repoCreateBranchProtection](RepositoryApi.md#repocreatebranchprotection)
- [repoCreateFile](RepositoryApi.md#repocreatefile)
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
- [repoGetRelease](RepositoryApi.md#repogetrelease)
- [repoGetReleaseAttachment](RepositoryApi.md#repogetreleaseattachment)
- [repoGetReleaseByTag](RepositoryApi.md#repogetreleasebytag)
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

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/base.ts#L52)

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

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/base.ts#L50)

## Methods

### <a id="acceptrepotransfer" name="acceptrepotransfer"></a> acceptRepoTransfer

▸ **acceptRepoTransfer**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Accept a repo transfer

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to transfer |
| `repo` | `string` | name of the repo to transfer |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:11830](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11830)

___

### <a id="createcurrentuserrepo" name="createcurrentuserrepo"></a> createCurrentUserRepo

▸ **createCurrentUserRepo**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:11842](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11842)

___

### <a id="createfork" name="createfork"></a> createFork

▸ **createFork**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Fork a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to fork |
| `repo` | `string` | name of the repo to fork |
| `body?` | [`CreateForkOption`](../interfaces/CreateForkOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:11856](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11856)

___

### <a id="generaterepo" name="generaterepo"></a> generateRepo

▸ **generateRepo**(`templateOwner`, `templateRepo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository using a template

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateOwner` | `string` | name of the template repository owner |
| `templateRepo` | `string` | name of the template repository |
| `body?` | [`GenerateRepoOption`](../interfaces/GenerateRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:11870](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11870)

___

### <a id="getannotatedtag" name="getannotatedtag"></a> getAnnotatedTag

▸ **getAnnotatedTag**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`AnnotatedTag`](../interfaces/AnnotatedTag.md)\>\>

**`summary`** Gets the tag object of an annotated tag (not lightweight tags)

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AnnotatedTag`](../interfaces/AnnotatedTag.md)\>\>

#### Defined in

[apis/repository-api.ts:11884](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11884)

___

### <a id="getblob" name="getblob"></a> getBlob

▸ **getBlob**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`GitBlobResponse`](../interfaces/GitBlobResponse.md)\>\>

**`summary`** Gets the blob of a repository.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitBlobResponse`](../interfaces/GitBlobResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:11898](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11898)

___

### <a id="gettree" name="gettree"></a> getTree

▸ **getTree**(`owner`, `repo`, `sha`, `recursive?`, `page?`, `perPage?`, `options?`): `Promise`<`AxiosResponse`<[`GitTreeResponse`](../interfaces/GitTreeResponse.md)\>\>

**`summary`** Gets the tree of a repository.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `recursive?` | `boolean` | - |
| `page?` | `number` | - |
| `perPage?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitTreeResponse`](../interfaces/GitTreeResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:11915](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11915)

___

### <a id="listforks" name="listforks"></a> listForks

▸ **listForks**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List a repository\'s forks

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/repository-api.ts:11930](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11930)

___

### <a id="rejectrepotransfer" name="rejectrepotransfer"></a> rejectRepoTransfer

▸ **rejectRepoTransfer**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Reject a repo transfer

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to transfer |
| `repo` | `string` | name of the repo to transfer |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:11943](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11943)

___

### <a id="repoaddcollaborator" name="repoaddcollaborator"></a> repoAddCollaborator

▸ **repoAddCollaborator**(`owner`, `repo`, `collaborator`, `body?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a collaborator to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `collaborator` | `string` | username of the collaborator to add |
| `body?` | [`AddCollaboratorOption`](../interfaces/AddCollaboratorOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:11958](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11958)

___

### <a id="repoaddteam" name="repoaddteam"></a> repoAddTeam

▸ **repoAddTeam**(`owner`, `repo`, `team`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a team to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `team` | `string` | team name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:11972](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11972)

___

### <a id="repoaddtopic" name="repoaddtopic"></a> repoAddTopic

▸ **repoAddTopic**(`owner`, `repo`, `topic`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a topic to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `topic` | `string` | name of the topic to add |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:11986](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L11986)

___

### <a id="repocheckcollaborator" name="repocheckcollaborator"></a> repoCheckCollaborator

▸ **repoCheckCollaborator**(`owner`, `repo`, `collaborator`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a collaborator of a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `collaborator` | `string` | username of the collaborator |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12000](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12000)

___

### <a id="repocheckteam" name="repocheckteam"></a> repoCheckTeam

▸ **repoCheckTeam**(`owner`, `repo`, `team`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Check if a team is assigned to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `team` | `string` | team name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/repository-api.ts:12014](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12014)

___

### <a id="repocreatebranch" name="repocreatebranch"></a> repoCreateBranch

▸ **repoCreateBranch**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

**`summary`** Create a branch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateBranchRepoOption`](../interfaces/CreateBranchRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

#### Defined in

[apis/repository-api.ts:12028](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12028)

___

### <a id="repocreatebranchprotection" name="repocreatebranchprotection"></a> repoCreateBranchProtection

▸ **repoCreateBranchProtection**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Create a branch protections for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateBranchProtectionOption`](../interfaces/CreateBranchProtectionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:12042](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12042)

___

### <a id="repocreatefile" name="repocreatefile"></a> repoCreateFile

▸ **repoCreateFile**(`owner`, `repo`, `filepath`, `body`, `options?`): `Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

**`summary`** Create a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the file to create |
| `body` | [`CreateFileOptions`](../interfaces/CreateFileOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:12057](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12057)

___

### <a id="repocreatehook" name="repocreatehook"></a> repoCreateHook

▸ **repoCreateHook**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Create a hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateHookOption`](../interfaces/CreateHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:12071](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12071)

___

### <a id="repocreatekey" name="repocreatekey"></a> repoCreateKey

▸ **repoCreateKey**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

**`summary`** Add a key to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateKeyOption`](../interfaces/CreateKeyOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

#### Defined in

[apis/repository-api.ts:12085](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12085)

___

### <a id="repocreatepullrequest" name="repocreatepullrequest"></a> repoCreatePullRequest

▸ **repoCreatePullRequest**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Create a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreatePullRequestOption`](../interfaces/CreatePullRequestOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:12099](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12099)

___

### <a id="repocreatepullreview" name="repocreatepullreview"></a> repoCreatePullReview

▸ **repoCreatePullReview**(`owner`, `repo`, `index`, `body`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Create a review to an pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `body` | [`CreatePullReviewOptions`](../interfaces/CreatePullReviewOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:12114](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12114)

___

### <a id="repocreatepullreviewrequests" name="repocreatepullreviewrequests"></a> repoCreatePullReviewRequests

▸ **repoCreatePullReviewRequests**(`owner`, `repo`, `index`, `body`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

**`summary`** create review requests for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `body` | [`PullReviewRequestOptions`](../interfaces/PullReviewRequestOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12129](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12129)

___

### <a id="repocreaterelease" name="repocreaterelease"></a> repoCreateRelease

▸ **repoCreateRelease**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Create a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateReleaseOption`](../interfaces/CreateReleaseOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:12143](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12143)

___

### <a id="repocreatereleaseattachment" name="repocreatereleaseattachment"></a> repoCreateReleaseAttachment

▸ **repoCreateReleaseAttachment**(`owner`, `repo`, `id`, `attachment`, `name?`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Create a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `attachment` | `File` | attachment to upload |
| `name?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:12159](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12159)

___

### <a id="repocreatestatus" name="repocreatestatus"></a> repoCreateStatus

▸ **repoCreateStatus**(`owner`, `repo`, `sha`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)\>\>

**`summary`** Create a commit status

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `body?` | [`CreateStatusOption`](../interfaces/CreateStatusOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)\>\>

#### Defined in

[apis/repository-api.ts:12174](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12174)

___

### <a id="repocreatetag" name="repocreatetag"></a> repoCreateTag

▸ **repoCreateTag**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

**`summary`** Create a new git tag in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateTagOption`](../interfaces/CreateTagOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

#### Defined in

[apis/repository-api.ts:12188](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12188)

___

### <a id="repocreatewikipage" name="repocreatewikipage"></a> repoCreateWikiPage

▸ **repoCreateWikiPage**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Create a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateWikiPageOptions`](../interfaces/CreateWikiPageOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:12202](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12202)

___

### <a id="repodelete" name="repodelete"></a> repoDelete

▸ **repoDelete**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to delete |
| `repo` | `string` | name of the repo to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12215](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12215)

___

### <a id="repodeletebranch" name="repodeletebranch"></a> repoDeleteBranch

▸ **repoDeleteBranch**(`owner`, `repo`, `branch`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific branch from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `branch` | `string` | branch to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12229](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12229)

___

### <a id="repodeletebranchprotection" name="repodeletebranchprotection"></a> repoDeleteBranchProtection

▸ **repoDeleteBranchProtection**(`owner`, `repo`, `name`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific branch protection for the repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `name` | `string` | name of protected branch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12243](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12243)

___

### <a id="repodeletecollaborator" name="repodeletecollaborator"></a> repoDeleteCollaborator

▸ **repoDeleteCollaborator**(`owner`, `repo`, `collaborator`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a collaborator from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `collaborator` | `string` | username of the collaborator to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12257](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12257)

___

### <a id="repodeletefile" name="repodeletefile"></a> repoDeleteFile

▸ **repoDeleteFile**(`owner`, `repo`, `filepath`, `body`, `options?`): `Promise`<`AxiosResponse`<[`FileDeleteResponse`](../interfaces/FileDeleteResponse.md)\>\>

**`summary`** Delete a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the file to delete |
| `body` | [`DeleteFileOptions`](../interfaces/DeleteFileOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileDeleteResponse`](../interfaces/FileDeleteResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:12272](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12272)

___

### <a id="repodeletegithook" name="repodeletegithook"></a> repoDeleteGitHook

▸ **repoDeleteGitHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a Git hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12286](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12286)

___

### <a id="repodeletehook" name="repodeletehook"></a> repoDeleteHook

▸ **repoDeleteHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the hook to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12300](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12300)

___

### <a id="repodeletekey" name="repodeletekey"></a> repoDeleteKey

▸ **repoDeleteKey**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a key from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the key to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12314](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12314)

___

### <a id="repodeletepullreview" name="repodeletepullreview"></a> repoDeletePullReview

▸ **repoDeletePullReview**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific review from a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12329](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12329)

___

### <a id="repodeletepullreviewrequests" name="repodeletepullreviewrequests"></a> repoDeletePullReviewRequests

▸ **repoDeletePullReviewRequests**(`owner`, `repo`, `index`, `body`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** cancel review requests for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `body` | [`PullReviewRequestOptions`](../interfaces/PullReviewRequestOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12344](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12344)

___

### <a id="repodeleterelease" name="repodeleterelease"></a> repoDeleteRelease

▸ **repoDeleteRelease**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12358](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12358)

___

### <a id="repodeletereleaseattachment" name="repodeletereleaseattachment"></a> repoDeleteReleaseAttachment

▸ **repoDeleteReleaseAttachment**(`owner`, `repo`, `id`, `attachmentId`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `attachmentId` | `number` | id of the attachment to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12373](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12373)

___

### <a id="repodeletereleasebytag" name="repodeletereleasebytag"></a> repoDeleteReleaseByTag

▸ **repoDeleteReleaseByTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | tag name of the release to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12387](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12387)

___

### <a id="repodeletetag" name="repodeletetag"></a> repoDeleteTag

▸ **repoDeleteTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a repository\'s tag by name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | name of tag to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12401](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12401)

___

### <a id="repodeleteteam" name="repodeleteteam"></a> repoDeleteTeam

▸ **repoDeleteTeam**(`owner`, `repo`, `team`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a team from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `team` | `string` | team name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12415](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12415)

___

### <a id="repodeletetopic" name="repodeletetopic"></a> repoDeleteTopic

▸ **repoDeleteTopic**(`owner`, `repo`, `topic`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a topic from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `topic` | `string` | name of the topic to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12429](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12429)

___

### <a id="repodeletewikipage" name="repodeletewikipage"></a> repoDeleteWikiPage

▸ **repoDeleteWikiPage**(`owner`, `repo`, `pageName`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12443](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12443)

___

### <a id="repodismisspullreview" name="repodismisspullreview"></a> repoDismissPullReview

▸ **repoDismissPullReview**(`owner`, `repo`, `index`, `id`, `body`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Dismiss a review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `body` | [`DismissPullReviewOptions`](../interfaces/DismissPullReviewOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:12459](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12459)

___

### <a id="repodownloadcommitdifforpatch" name="repodownloadcommitdifforpatch"></a> repoDownloadCommitDiffOrPatch

▸ **repoDownloadCommitDiffOrPatch**(`owner`, `repo`, `sha`, `diffType`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get a commit\'s diff or patch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | SHA of the commit to get |
| `diffType` | ``"patch"`` \| ``"diff"`` | whether the output is diff or patch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:12474](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12474)

___

### <a id="repodownloadpulldifforpatch" name="repodownloadpulldifforpatch"></a> repoDownloadPullDiffOrPatch

▸ **repoDownloadPullDiffOrPatch**(`owner`, `repo`, `index`, `diffType`, `binary?`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get a pull request diff or patch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `diffType` | ``"patch"`` \| ``"diff"`` | whether the output is diff or patch |
| `binary?` | `boolean` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:12490](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12490)

___

### <a id="repoedit" name="repoedit"></a> repoEdit

▸ **repoEdit**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Edit a repository\'s properties. Only fields that are set will be changed.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to edit |
| `repo` | `string` | name of the repo to edit |
| `body?` | [`EditRepoOption`](../interfaces/EditRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:12504](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12504)

___

### <a id="repoeditbranchprotection" name="repoeditbranchprotection"></a> repoEditBranchProtection

▸ **repoEditBranchProtection**(`owner`, `repo`, `name`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Edit a branch protections for a repository. Only fields that are set will be changed

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `name` | `string` | name of protected branch |
| `body?` | [`EditBranchProtectionOption`](../interfaces/EditBranchProtectionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:12519](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12519)

___

### <a id="repoeditgithook" name="repoeditgithook"></a> repoEditGitHook

▸ **repoEditGitHook**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

**`summary`** Edit a Git hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | id of the hook to get |
| `body?` | [`EditGitHookOption`](../interfaces/EditGitHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

#### Defined in

[apis/repository-api.ts:12534](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12534)

___

### <a id="repoedithook" name="repoedithook"></a> repoEditHook

▸ **repoEditHook**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Edit a hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | index of the hook |
| `body?` | [`EditHookOption`](../interfaces/EditHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:12549](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12549)

___

### <a id="repoeditpullrequest" name="repoeditpullrequest"></a> repoEditPullRequest

▸ **repoEditPullRequest**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to edit |
| `body?` | [`EditPullRequestOption`](../interfaces/EditPullRequestOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:12564](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12564)

___

### <a id="repoeditrelease" name="repoeditrelease"></a> repoEditRelease

▸ **repoEditRelease**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Update a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release to edit |
| `body?` | [`EditReleaseOption`](../interfaces/EditReleaseOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:12579](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12579)

___

### <a id="repoeditreleaseattachment" name="repoeditreleaseattachment"></a> repoEditReleaseAttachment

▸ **repoEditReleaseAttachment**(`owner`, `repo`, `id`, `attachmentId`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Edit a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `attachmentId` | `number` | id of the attachment to edit |
| `body?` | [`EditAttachmentOptions`](../interfaces/EditAttachmentOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:12595](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12595)

___

### <a id="repoeditwikipage" name="repoeditwikipage"></a> repoEditWikiPage

▸ **repoEditWikiPage**(`owner`, `repo`, `pageName`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Edit a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `body?` | [`CreateWikiPageOptions`](../interfaces/CreateWikiPageOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:12610](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12610)

___

### <a id="repoget" name="repoget"></a> repoGet

▸ **repoGet**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Get a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:12623](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12623)

___

### <a id="repogetallcommits" name="repogetallcommits"></a> repoGetAllCommits

▸ **repoGetAllCommits**(`owner`, `repo`, `sha?`, `path?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

**`summary`** Get a list of all commits from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha?` | `string` | - |
| `path?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12640](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12640)

___

### <a id="repogetarchive" name="repogetarchive"></a> repoGetArchive

▸ **repoGetArchive**(`owner`, `repo`, `archive`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get an archive of a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `archive` | `string` | the git reference for download with attached archive format (e.g. master.zip) |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12654](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12654)

___

### <a id="repogetassignees" name="repogetassignees"></a> repoGetAssignees

▸ **repoGetAssignees**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Return all users that have write access and can be assigned to issues

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12667](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12667)

___

### <a id="repogetbranch" name="repogetbranch"></a> repoGetBranch

▸ **repoGetBranch**(`owner`, `repo`, `branch`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

**`summary`** Retrieve a specific branch from a repository, including its effective branch protection

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `branch` | `string` | branch to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

#### Defined in

[apis/repository-api.ts:12681](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12681)

___

### <a id="repogetbranchprotection" name="repogetbranchprotection"></a> repoGetBranchProtection

▸ **repoGetBranchProtection**(`owner`, `repo`, `name`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Get a specific branch protection for the repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `name` | `string` | name of protected branch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:12695](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12695)

___

### <a id="repogetbyid" name="repogetbyid"></a> repoGetByID

▸ **repoGetByID**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Get a repository by id

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the repo to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:12707](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12707)

___

### <a id="repogetcombinedstatusbyref" name="repogetcombinedstatusbyref"></a> repoGetCombinedStatusByRef

▸ **repoGetCombinedStatusByRef**(`owner`, `repo`, `ref`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CombinedStatus`](../interfaces/CombinedStatus.md)\>\>

**`summary`** Get a commit\'s combined status, by branch/tag/commit reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref` | `string` | name of branch/tag/commit |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CombinedStatus`](../interfaces/CombinedStatus.md)\>\>

#### Defined in

[apis/repository-api.ts:12723](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12723)

___

### <a id="repogetcontents" name="repogetcontents"></a> repoGetContents

▸ **repoGetContents**(`owner`, `repo`, `filepath`, `ref?`, `options?`): `Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)\>\>

**`summary`** Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the dir, file, symlink or submodule in the repo |
| `ref?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:12738](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12738)

___

### <a id="repogetcontentslist" name="repogetcontentslist"></a> repoGetContentsList

▸ **repoGetContentsList**(`owner`, `repo`, `ref?`, `options?`): `Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)[]\>\>

**`summary`** Gets the metadata of all the entries of the root dir

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12752](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12752)

___

### <a id="repogeteditorconfig" name="repogeteditorconfig"></a> repoGetEditorConfig

▸ **repoGetEditorConfig**(`owner`, `repo`, `filepath`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get the EditorConfig definitions of a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | filepath of file to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12766](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12766)

___

### <a id="repogetgithook" name="repogetgithook"></a> repoGetGitHook

▸ **repoGetGitHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

**`summary`** Get a Git hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

#### Defined in

[apis/repository-api.ts:12780](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12780)

___

### <a id="repogethook" name="repogethook"></a> repoGetHook

▸ **repoGetHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Get a hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:12794](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12794)

___

### <a id="repogetissuetemplates" name="repogetissuetemplates"></a> repoGetIssueTemplates

▸ **repoGetIssueTemplates**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`IssueTemplate`](../interfaces/IssueTemplate.md)[]\>\>

**`summary`** Get available issue templates for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`IssueTemplate`](../interfaces/IssueTemplate.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12807](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12807)

___

### <a id="repogetkey" name="repogetkey"></a> repoGetKey

▸ **repoGetKey**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

**`summary`** Get a repository\'s key by id

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the key to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

#### Defined in

[apis/repository-api.ts:12821](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12821)

___

### <a id="repogetlanguages" name="repogetlanguages"></a> repoGetLanguages

▸ **repoGetLanguages**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<{ `[key: string]`: `number`;  }\>\>

**`summary`** Get languages and number of bytes of code written

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<{ `[key: string]`: `number`;  }\>\>

#### Defined in

[apis/repository-api.ts:12834](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12834)

___

### <a id="repogetnote" name="repogetnote"></a> repoGetNote

▸ **repoGetNote**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`Note`](../interfaces/Note.md)\>\>

**`summary`** Get a note corresponding to a single commit from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | a git ref or commit sha |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Note`](../interfaces/Note.md)\>\>

#### Defined in

[apis/repository-api.ts:12848](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12848)

___

### <a id="repogetpullrequest" name="repogetpullrequest"></a> repoGetPullRequest

▸ **repoGetPullRequest**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Get a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:12862](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12862)

___

### <a id="repogetpullrequestcommits" name="repogetpullrequestcommits"></a> repoGetPullRequestCommits

▸ **repoGetPullRequestCommits**(`owner`, `repo`, `index`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

**`summary`** Get commits for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12878](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12878)

___

### <a id="repogetpullreview" name="repogetpullreview"></a> repoGetPullReview

▸ **repoGetPullReview**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Get a specific review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:12893](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12893)

___

### <a id="repogetpullreviewcomments" name="repogetpullreviewcomments"></a> repoGetPullReviewComments

▸ **repoGetPullReviewComments**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReviewComment`](../interfaces/PullReviewComment.md)[]\>\>

**`summary`** Get a specific review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReviewComment`](../interfaces/PullReviewComment.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12908](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12908)

___

### <a id="repogetrawfile" name="repogetrawfile"></a> repoGetRawFile

▸ **repoGetRawFile**(`owner`, `repo`, `filepath`, `ref?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get a file from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | filepath of the file to get |
| `ref?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:12923](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12923)

___

### <a id="repogetrelease" name="repogetrelease"></a> repoGetRelease

▸ **repoGetRelease**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Get a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:12937](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12937)

___

### <a id="repogetreleaseattachment" name="repogetreleaseattachment"></a> repoGetReleaseAttachment

▸ **repoGetReleaseAttachment**(`owner`, `repo`, `id`, `attachmentId`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Get a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `attachmentId` | `number` | id of the attachment to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:12952](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12952)

___

### <a id="repogetreleasebytag" name="repogetreleasebytag"></a> repoGetReleaseByTag

▸ **repoGetReleaseByTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Get a release by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | tag name of the release to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:12966](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12966)

___

### <a id="repogetreviewers" name="repogetreviewers"></a> repoGetReviewers

▸ **repoGetReviewers**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Return all users that can be requested to review in this repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:12979](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12979)

___

### <a id="repogetsinglecommit" name="repogetsinglecommit"></a> repoGetSingleCommit

▸ **repoGetSingleCommit**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)\>\>

**`summary`** Get a single commit from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | a git ref or commit sha |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)\>\>

#### Defined in

[apis/repository-api.ts:12993](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L12993)

___

### <a id="repogettag" name="repogettag"></a> repoGetTag

▸ **repoGetTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

**`summary`** Get the tag of a repository by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | name of tag |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

#### Defined in

[apis/repository-api.ts:13007](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13007)

___

### <a id="repogetwikipage" name="repogetwikipage"></a> repoGetWikiPage

▸ **repoGetWikiPage**(`owner`, `repo`, `pageName`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Get a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:13021](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13021)

___

### <a id="repogetwikipagerevisions" name="repogetwikipagerevisions"></a> repoGetWikiPageRevisions

▸ **repoGetWikiPageRevisions**(`owner`, `repo`, `pageName`, `page?`, `options?`): `Promise`<`AxiosResponse`<[`WikiCommitList`](../interfaces/WikiCommitList.md)\>\>

**`summary`** Get revisions of a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `page?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiCommitList`](../interfaces/WikiCommitList.md)\>\>

#### Defined in

[apis/repository-api.ts:13036](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13036)

___

### <a id="repogetwikipages" name="repogetwikipages"></a> repoGetWikiPages

▸ **repoGetWikiPages**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`WikiPageMetaData`](../interfaces/WikiPageMetaData.md)[]\>\>

**`summary`** Get all wiki pages

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPageMetaData`](../interfaces/WikiPageMetaData.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13051](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13051)

___

### <a id="repolistallgitrefs" name="repolistallgitrefs"></a> repoListAllGitRefs

▸ **repoListAllGitRefs**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

**`summary`** Get specified ref or filtered repository\'s refs

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13064](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13064)

___

### <a id="repolistbranchprotection" name="repolistbranchprotection"></a> repoListBranchProtection

▸ **repoListBranchProtection**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)[]\>\>

**`summary`** List branch protections for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13077](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13077)

___

### <a id="repolistbranches" name="repolistbranches"></a> repoListBranches

▸ **repoListBranches**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)[]\>\>

**`summary`** List a repository\'s branches

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13092](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13092)

___

### <a id="repolistcollaborators" name="repolistcollaborators"></a> repoListCollaborators

▸ **repoListCollaborators**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repository\'s collaborators

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13107](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13107)

___

### <a id="repolistgithooks" name="repolistgithooks"></a> repoListGitHooks

▸ **repoListGitHooks**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)[]\>\>

**`summary`** List the Git hooks in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13120](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13120)

___

### <a id="repolistgitrefs" name="repolistgitrefs"></a> repoListGitRefs

▸ **repoListGitRefs**(`owner`, `repo`, `ref`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

**`summary`** Get specified ref or filtered repository\'s refs

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref` | `string` | part or full name of the ref |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13134](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13134)

___

### <a id="repolisthooks" name="repolisthooks"></a> repoListHooks

▸ **repoListHooks**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

**`summary`** List the hooks in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13149](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13149)

___

### <a id="repolistkeys" name="repolistkeys"></a> repoListKeys

▸ **repoListKeys**(`owner`, `repo`, `keyId?`, `fingerprint?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)[]\>\>

**`summary`** List a repository\'s keys

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `keyId?` | `number` | - |
| `fingerprint?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13166](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13166)

___

### <a id="repolistpullrequests" name="repolistpullrequests"></a> repoListPullRequests

▸ **repoListPullRequests**(`owner`, `repo`, `state?`, `sort?`, `milestone?`, `labels?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)[]\>\>

**`summary`** List a repo\'s pull requests

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `state?` | ``"all"`` \| ``"closed"`` \| ``"open"`` | - |
| `sort?` | ``"priority"`` \| ``"oldest"`` \| ``"recentupdate"`` \| ``"leastupdate"`` \| ``"mostcomment"`` \| ``"leastcomment"`` | - |
| `milestone?` | `number` | - |
| `labels?` | `number`[] | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13185](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13185)

___

### <a id="repolistpullreviews" name="repolistpullreviews"></a> repoListPullReviews

▸ **repoListPullReviews**(`owner`, `repo`, `index`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

**`summary`** List all reviews for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13201](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13201)

___

### <a id="repolistreleaseattachments" name="repolistreleaseattachments"></a> repoListReleaseAttachments

▸ **repoListReleaseAttachments**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)[]\>\>

**`summary`** List release\'s attachments

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13215](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13215)

___

### <a id="repolistreleases" name="repolistreleases"></a> repoListReleases

▸ **repoListReleases**(`owner`, `repo`, `draft?`, `preRelease?`, `perPage?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)[]\>\>

**`summary`** List a repo\'s releases

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `draft?` | `boolean` | - |
| `preRelease?` | `boolean` | - |
| `perPage?` | `number` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13233](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13233)

___

### <a id="repoliststargazers" name="repoliststargazers"></a> repoListStargazers

▸ **repoListStargazers**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repo\'s stargazers

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13248](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13248)

___

### <a id="repoliststatuses" name="repoliststatuses"></a> repoListStatuses

▸ **repoListStatuses**(`owner`, `repo`, `sha`, `sort?`, `state?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

**`summary`** Get a commit\'s statuses

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `sort?` | ``"oldest"`` \| ``"recentupdate"`` \| ``"leastupdate"`` \| ``"leastindex"`` \| ``"highestindex"`` | - |
| `state?` | ``"error"`` \| ``"pending"`` \| ``"success"`` \| ``"failure"`` \| ``"warning"`` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13266](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13266)

___

### <a id="repoliststatusesbyref" name="repoliststatusesbyref"></a> repoListStatusesByRef

▸ **repoListStatusesByRef**(`owner`, `repo`, `ref`, `sort?`, `state?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

**`summary`** Get a commit\'s statuses, by branch/tag/commit reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref` | `string` | name of branch/tag/commit |
| `sort?` | ``"oldest"`` \| ``"recentupdate"`` \| ``"leastupdate"`` \| ``"leastindex"`` \| ``"highestindex"`` | - |
| `state?` | ``"error"`` \| ``"pending"`` \| ``"success"`` \| ``"failure"`` \| ``"warning"`` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13284](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13284)

___

### <a id="repolistsubscribers" name="repolistsubscribers"></a> repoListSubscribers

▸ **repoListSubscribers**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repo\'s watchers

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13299](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13299)

___

### <a id="repolisttags" name="repolisttags"></a> repoListTags

▸ **repoListTags**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

**`summary`** List a repository\'s tags

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13314](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13314)

___

### <a id="repolistteams" name="repolistteams"></a> repoListTeams

▸ **repoListTeams**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List a repository\'s teams

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13327](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13327)

___

### <a id="repolisttopics" name="repolisttopics"></a> repoListTopics

▸ **repoListTopics**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TopicName`](../interfaces/TopicName.md)\>\>

**`summary`** Get list of topics that a repository has

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TopicName`](../interfaces/TopicName.md)\>\>

#### Defined in

[apis/repository-api.ts:13342](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13342)

___

### <a id="repomergepullrequest" name="repomergepullrequest"></a> repoMergePullRequest

▸ **repoMergePullRequest**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Merge a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to merge |
| `body?` | [`MergePullRequestOption`](../interfaces/MergePullRequestOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:13357](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13357)

___

### <a id="repomigrate" name="repomigrate"></a> repoMigrate

▸ **repoMigrate**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Migrate a remote git repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`MigrateRepoOptions`](../interfaces/MigrateRepoOptions.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:13369](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13369)

___

### <a id="repomirrorsync" name="repomirrorsync"></a> repoMirrorSync

▸ **repoMirrorSync**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sync a mirrored repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to sync |
| `repo` | `string` | name of the repo to sync |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:13382](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13382)

___

### <a id="repopullrequestismerged" name="repopullrequestismerged"></a> repoPullRequestIsMerged

▸ **repoPullRequestIsMerged**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a pull request has been merged

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:13396](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13396)

___

### <a id="reposearch" name="reposearch"></a> repoSearch

▸ **repoSearch**(`q?`, `topic?`, `includeDesc?`, `uid?`, `priorityOwnerId?`, `teamId?`, `starredBy?`, `_private?`, `isPrivate?`, `template?`, `archived?`, `mode?`, `exclusive?`, `repo?`, `owner?`, `lang?`, `subject?`, `book?`, `includeMetadata?`, `sort?`, `order?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`SearchResults`](../interfaces/SearchResults.md)\>\>

**`summary`** Search for repositories

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `q?` | `string` |
| `topic?` | `boolean` |
| `includeDesc?` | `boolean` |
| `uid?` | `number` |
| `priorityOwnerId?` | `number` |
| `teamId?` | `number` |
| `starredBy?` | `number` |
| `_private?` | `boolean` |
| `isPrivate?` | `boolean` |
| `template?` | `boolean` |
| `archived?` | `boolean` |
| `mode?` | `string` |
| `exclusive?` | `boolean` |
| `repo?` | `string` |
| `owner?` | `string` |
| `lang?` | `string` |
| `subject?` | `string` |
| `book?` | `string` |
| `includeMetadata?` | `boolean` |
| `sort?` | `string` |
| `order?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`SearchResults`](../interfaces/SearchResults.md)\>\>

#### Defined in

[apis/repository-api.ts:13430](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13430)

___

### <a id="reposigningkey" name="reposigningkey"></a> repoSigningKey

▸ **repoSigningKey**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get signing-key.gpg for given repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:13443](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13443)

___

### <a id="reposubmitpullreview" name="reposubmitpullreview"></a> repoSubmitPullReview

▸ **repoSubmitPullReview**(`owner`, `repo`, `index`, `id`, `body`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Submit a pending review to an pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `body` | [`SubmitPullReviewOptions`](../interfaces/SubmitPullReviewOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:13459](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13459)

___

### <a id="repotesthook" name="repotesthook"></a> repoTestHook

▸ **repoTestHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Test a push webhook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the hook to test |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:13473](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13473)

___

### <a id="repotrackedtimes" name="repotrackedtimes"></a> repoTrackedTimes

▸ **repoTrackedTimes**(`owner`, `repo`, `user?`, `since?`, `before?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List a repo\'s tracked times

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `user?` | `string` | - |
| `since?` | `string` | - |
| `before?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13491](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13491)

___

### <a id="repotransfer" name="repotransfer"></a> repoTransfer

▸ **repoTransfer**(`owner`, `repo`, `body`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Transfer a repo ownership

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to transfer |
| `repo` | `string` | name of the repo to transfer |
| `body` | [`TransferRepoOption`](../interfaces/TransferRepoOption.md) | Transfer Options |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:13505](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13505)

___

### <a id="repoundismisspullreview" name="repoundismisspullreview"></a> repoUnDismissPullReview

▸ **repoUnDismissPullReview**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Cancel to dismiss a review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:13520](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13520)

___

### <a id="repoupdatefile" name="repoupdatefile"></a> repoUpdateFile

▸ **repoUpdateFile**(`owner`, `repo`, `filepath`, `body`, `options?`): `Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

**`summary`** Update a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the file to update |
| `body` | [`UpdateFileOptions`](../interfaces/UpdateFileOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:13535](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13535)

___

### <a id="repoupdatepullrequest" name="repoupdatepullrequest"></a> repoUpdatePullRequest

▸ **repoUpdatePullRequest**(`owner`, `repo`, `index`, `style?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Merge PR\'s baseBranch into headBranch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `style?` | ``"merge"`` \| ``"rebase"`` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:13550](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13550)

___

### <a id="repoupdatetopics" name="repoupdatetopics"></a> repoUpdateTopics

▸ **repoUpdateTopics**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Replace list of topics for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`RepoTopicOptions`](../interfaces/RepoTopicOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:13564](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13564)

___

### <a id="topicsearch" name="topicsearch"></a> topicSearch

▸ **topicSearch**(`q`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TopicResponse`](../interfaces/TopicResponse.md)[]\>\>

**`summary`** search topics via keyword

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `string` | keywords to search |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TopicResponse`](../interfaces/TopicResponse.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13578](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13578)

___

### <a id="usercurrentchecksubscription" name="usercurrentchecksubscription"></a> userCurrentCheckSubscription

▸ **userCurrentCheckSubscription**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Check if the current user is watching a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/repository-api.ts:13591](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13591)

___

### <a id="usercurrentdeletesubscription" name="usercurrentdeletesubscription"></a> userCurrentDeleteSubscription

▸ **userCurrentDeleteSubscription**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unwatch a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:13604](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13604)

___

### <a id="usercurrentputsubscription" name="usercurrentputsubscription"></a> userCurrentPutSubscription

▸ **userCurrentPutSubscription**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Watch a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/repository-api.ts:13617](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13617)

___

### <a id="usertrackedtimes" name="usertrackedtimes"></a> userTrackedTimes

▸ **userTrackedTimes**(`owner`, `repo`, `user`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List a user\'s tracked times in a repo

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `user` | `string` | username of user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/repository-api.ts:13632](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/repository-api.ts#L13632)
