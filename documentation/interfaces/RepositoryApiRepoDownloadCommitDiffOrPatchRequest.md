[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoDownloadCommitDiffOrPatchRequest

# Interface: RepositoryApiRepoDownloadCommitDiffOrPatchRequest

Request parameters for repoDownloadCommitDiffOrPatch operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoDownloadCommitDiffOrPatchRequest

## Table of contents

### Properties

- [diffType](RepositoryApiRepoDownloadCommitDiffOrPatchRequest.md#difftype)
- [owner](RepositoryApiRepoDownloadCommitDiffOrPatchRequest.md#owner)
- [repo](RepositoryApiRepoDownloadCommitDiffOrPatchRequest.md#repo)
- [sha](RepositoryApiRepoDownloadCommitDiffOrPatchRequest.md#sha)

## Properties

### <a id="difftype" name="difftype"></a> diffType

• `Readonly` **diffType**: ``"patch"`` \| ``"diff"``

whether the output is diff or patch

**`memberof`** RepositoryApiRepoDownloadCommitDiffOrPatch

#### Defined in

[apis/repository-api.ts:13960](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13960)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoDownloadCommitDiffOrPatch

#### Defined in

[apis/repository-api.ts:13939](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13939)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoDownloadCommitDiffOrPatch

#### Defined in

[apis/repository-api.ts:13946](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13946)

___

### <a id="sha" name="sha"></a> sha

• `Readonly` **sha**: `string`

SHA of the commit to get

**`memberof`** RepositoryApiRepoDownloadCommitDiffOrPatch

#### Defined in

[apis/repository-api.ts:13953](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13953)
