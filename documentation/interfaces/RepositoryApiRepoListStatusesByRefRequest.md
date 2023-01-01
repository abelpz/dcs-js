[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoListStatusesByRefRequest

# Interface: RepositoryApiRepoListStatusesByRefRequest

Request parameters for repoListStatusesByRef operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoListStatusesByRefRequest

## Table of contents

### Properties

- [limit](RepositoryApiRepoListStatusesByRefRequest.md#limit)
- [owner](RepositoryApiRepoListStatusesByRefRequest.md#owner)
- [page](RepositoryApiRepoListStatusesByRefRequest.md#page)
- [ref](RepositoryApiRepoListStatusesByRefRequest.md#ref)
- [repo](RepositoryApiRepoListStatusesByRefRequest.md#repo)
- [sort](RepositoryApiRepoListStatusesByRefRequest.md#sort)
- [state](RepositoryApiRepoListStatusesByRefRequest.md#state)

## Properties

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** RepositoryApiRepoListStatusesByRef

#### Defined in

[apis/repository-api.ts:15850](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15850)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoListStatusesByRef

#### Defined in

[apis/repository-api.ts:15808](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15808)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoListStatusesByRef

#### Defined in

[apis/repository-api.ts:15843](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15843)

___

### <a id="ref" name="ref"></a> ref

• `Readonly` **ref**: `string`

name of branch/tag/commit

**`memberof`** RepositoryApiRepoListStatusesByRef

#### Defined in

[apis/repository-api.ts:15822](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15822)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoListStatusesByRef

#### Defined in

[apis/repository-api.ts:15815](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15815)

___

### <a id="sort" name="sort"></a> sort

• `Optional` `Readonly` **sort**: ``"oldest"`` \| ``"recentupdate"`` \| ``"leastupdate"`` \| ``"leastindex"`` \| ``"highestindex"``

type of sort

**`memberof`** RepositoryApiRepoListStatusesByRef

#### Defined in

[apis/repository-api.ts:15829](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15829)

___

### <a id="state" name="state"></a> state

• `Optional` `Readonly` **state**: ``"error"`` \| ``"pending"`` \| ``"success"`` \| ``"failure"`` \| ``"warning"``

type of state

**`memberof`** RepositoryApiRepoListStatusesByRef

#### Defined in

[apis/repository-api.ts:15836](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15836)
