[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoGetAllCommitsRequest

# Interface: RepositoryApiRepoGetAllCommitsRequest

Request parameters for repoGetAllCommits operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoGetAllCommitsRequest

## Table of contents

### Properties

- [limit](RepositoryApiRepoGetAllCommitsRequest.md#limit)
- [owner](RepositoryApiRepoGetAllCommitsRequest.md#owner)
- [page](RepositoryApiRepoGetAllCommitsRequest.md#page)
- [path](RepositoryApiRepoGetAllCommitsRequest.md#path)
- [repo](RepositoryApiRepoGetAllCommitsRequest.md#repo)
- [sha](RepositoryApiRepoGetAllCommitsRequest.md#sha)

## Properties

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results (ignored if used with \&#39;path\&#39;)

**`memberof`** RepositoryApiRepoGetAllCommits

#### Defined in

[apis/repository-api.ts:14352](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14352)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoGetAllCommits

#### Defined in

[apis/repository-api.ts:14317](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14317)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoGetAllCommits

#### Defined in

[apis/repository-api.ts:14345](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14345)

___

### <a id="path" name="path"></a> path

• `Optional` `Readonly` **path**: `string`

filepath of a file/dir

**`memberof`** RepositoryApiRepoGetAllCommits

#### Defined in

[apis/repository-api.ts:14338](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14338)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoGetAllCommits

#### Defined in

[apis/repository-api.ts:14324](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14324)

___

### <a id="sha" name="sha"></a> sha

• `Optional` `Readonly` **sha**: `string`

SHA or branch to start listing commits from (usually \&#39;master\&#39;)

**`memberof`** RepositoryApiRepoGetAllCommits

#### Defined in

[apis/repository-api.ts:14331](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14331)
