[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoUpdatePullRequestRequest

# Interface: RepositoryApiRepoUpdatePullRequestRequest

Request parameters for repoUpdatePullRequest operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoUpdatePullRequestRequest

## Table of contents

### Properties

- [index](RepositoryApiRepoUpdatePullRequestRequest.md#index)
- [owner](RepositoryApiRepoUpdatePullRequestRequest.md#owner)
- [repo](RepositoryApiRepoUpdatePullRequestRequest.md#repo)
- [style](RepositoryApiRepoUpdatePullRequestRequest.md#style)

## Properties

### <a id="index" name="index"></a> index

• `Readonly` **index**: `number`

index of the pull request to get

**`memberof`** RepositoryApiRepoUpdatePullRequest

#### Defined in

[apis/repository-api.ts:16557](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16557)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoUpdatePullRequest

#### Defined in

[apis/repository-api.ts:16543](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16543)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoUpdatePullRequest

#### Defined in

[apis/repository-api.ts:16550](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16550)

___

### <a id="style" name="style"></a> style

• `Optional` `Readonly` **style**: ``"merge"`` \| ``"rebase"``

how to update pull request

**`memberof`** RepositoryApiRepoUpdatePullRequest

#### Defined in

[apis/repository-api.ts:16564](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16564)
