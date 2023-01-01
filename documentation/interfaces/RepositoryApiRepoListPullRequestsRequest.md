[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoListPullRequestsRequest

# Interface: RepositoryApiRepoListPullRequestsRequest

Request parameters for repoListPullRequests operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoListPullRequestsRequest

## Table of contents

### Properties

- [labels](RepositoryApiRepoListPullRequestsRequest.md#labels)
- [limit](RepositoryApiRepoListPullRequestsRequest.md#limit)
- [milestone](RepositoryApiRepoListPullRequestsRequest.md#milestone)
- [owner](RepositoryApiRepoListPullRequestsRequest.md#owner)
- [page](RepositoryApiRepoListPullRequestsRequest.md#page)
- [repo](RepositoryApiRepoListPullRequestsRequest.md#repo)
- [sort](RepositoryApiRepoListPullRequestsRequest.md#sort)
- [state](RepositoryApiRepoListPullRequestsRequest.md#state)

## Properties

### <a id="labels" name="labels"></a> labels

• `Optional` `Readonly` **labels**: `number`[]

Label IDs

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15563](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15563)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15577](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15577)

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` `Readonly` **milestone**: `number`

ID of the milestone

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15556](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15556)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15528](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15528)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15570](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15570)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15535](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15535)

___

### <a id="sort" name="sort"></a> sort

• `Optional` `Readonly` **sort**: ``"priority"`` \| ``"oldest"`` \| ``"recentupdate"`` \| ``"leastupdate"`` \| ``"mostcomment"`` \| ``"leastcomment"``

Type of sort

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15549](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15549)

___

### <a id="state" name="state"></a> state

• `Optional` `Readonly` **state**: ``"all"`` \| ``"closed"`` \| ``"open"``

State of pull request: open or closed (optional)

**`memberof`** RepositoryApiRepoListPullRequests

#### Defined in

[apis/repository-api.ts:15542](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15542)
