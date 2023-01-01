[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoListTagsRequest

# Interface: RepositoryApiRepoListTagsRequest

Request parameters for repoListTags operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoListTagsRequest

## Table of contents

### Properties

- [limit](RepositoryApiRepoListTagsRequest.md#limit)
- [owner](RepositoryApiRepoListTagsRequest.md#owner)
- [page](RepositoryApiRepoListTagsRequest.md#page)
- [repo](RepositoryApiRepoListTagsRequest.md#repo)

## Properties

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results, default maximum page size is 50

**`memberof`** RepositoryApiRepoListTags

#### Defined in

[apis/repository-api.ts:15920](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15920)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoListTags

#### Defined in

[apis/repository-api.ts:15899](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15899)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoListTags

#### Defined in

[apis/repository-api.ts:15913](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15913)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoListTags

#### Defined in

[apis/repository-api.ts:15906](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15906)
