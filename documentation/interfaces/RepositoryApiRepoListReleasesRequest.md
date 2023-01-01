[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoListReleasesRequest

# Interface: RepositoryApiRepoListReleasesRequest

Request parameters for repoListReleases operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoListReleasesRequest

## Table of contents

### Properties

- [draft](RepositoryApiRepoListReleasesRequest.md#draft)
- [limit](RepositoryApiRepoListReleasesRequest.md#limit)
- [owner](RepositoryApiRepoListReleasesRequest.md#owner)
- [page](RepositoryApiRepoListReleasesRequest.md#page)
- [perPage](RepositoryApiRepoListReleasesRequest.md#perpage)
- [preRelease](RepositoryApiRepoListReleasesRequest.md#prerelease)
- [repo](RepositoryApiRepoListReleasesRequest.md#repo)

## Properties

### <a id="draft" name="draft"></a> draft

• `Optional` `Readonly` **draft**: `boolean`

filter (exclude / include) drafts, if you dont have repo write access none will show

**`memberof`** RepositoryApiRepoListReleases

#### Defined in

[apis/repository-api.ts:15675](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15675)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** RepositoryApiRepoListReleases

#### Defined in

[apis/repository-api.ts:15703](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15703)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoListReleases

#### Defined in

[apis/repository-api.ts:15661](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15661)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoListReleases

#### Defined in

[apis/repository-api.ts:15696](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15696)

___

### <a id="perpage" name="perpage"></a> perPage

• `Optional` `Readonly` **perPage**: `number`

page size of results, deprecated - use limit

**`memberof`** RepositoryApiRepoListReleases

#### Defined in

[apis/repository-api.ts:15689](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15689)

___

### <a id="prerelease" name="prerelease"></a> preRelease

• `Optional` `Readonly` **preRelease**: `boolean`

filter (exclude / include) pre-releases

**`memberof`** RepositoryApiRepoListReleases

#### Defined in

[apis/repository-api.ts:15682](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15682)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoListReleases

#### Defined in

[apis/repository-api.ts:15668](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15668)
