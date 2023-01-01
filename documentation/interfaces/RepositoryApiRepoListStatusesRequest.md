[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoListStatusesRequest

# Interface: RepositoryApiRepoListStatusesRequest

Request parameters for repoListStatuses operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoListStatusesRequest

## Table of contents

### Properties

- [limit](RepositoryApiRepoListStatusesRequest.md#limit)
- [owner](RepositoryApiRepoListStatusesRequest.md#owner)
- [page](RepositoryApiRepoListStatusesRequest.md#page)
- [repo](RepositoryApiRepoListStatusesRequest.md#repo)
- [sha](RepositoryApiRepoListStatusesRequest.md#sha)
- [sort](RepositoryApiRepoListStatusesRequest.md#sort)
- [state](RepositoryApiRepoListStatusesRequest.md#state)

## Properties

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** RepositoryApiRepoListStatuses

#### Defined in

[apis/repository-api.ts:15794](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15794)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoListStatuses

#### Defined in

[apis/repository-api.ts:15752](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15752)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoListStatuses

#### Defined in

[apis/repository-api.ts:15787](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15787)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoListStatuses

#### Defined in

[apis/repository-api.ts:15759](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15759)

___

### <a id="sha" name="sha"></a> sha

• `Readonly` **sha**: `string`

sha of the commit

**`memberof`** RepositoryApiRepoListStatuses

#### Defined in

[apis/repository-api.ts:15766](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15766)

___

### <a id="sort" name="sort"></a> sort

• `Optional` `Readonly` **sort**: ``"oldest"`` \| ``"recentupdate"`` \| ``"leastupdate"`` \| ``"leastindex"`` \| ``"highestindex"``

type of sort

**`memberof`** RepositoryApiRepoListStatuses

#### Defined in

[apis/repository-api.ts:15773](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15773)

___

### <a id="state" name="state"></a> state

• `Optional` `Readonly` **state**: ``"error"`` \| ``"pending"`` \| ``"success"`` \| ``"failure"`` \| ``"warning"``

type of state

**`memberof`** RepositoryApiRepoListStatuses

#### Defined in

[apis/repository-api.ts:15780](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15780)
