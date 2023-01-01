[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoDownloadPullDiffOrPatchRequest

# Interface: RepositoryApiRepoDownloadPullDiffOrPatchRequest

Request parameters for repoDownloadPullDiffOrPatch operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoDownloadPullDiffOrPatchRequest

## Table of contents

### Properties

- [binary](RepositoryApiRepoDownloadPullDiffOrPatchRequest.md#binary)
- [diffType](RepositoryApiRepoDownloadPullDiffOrPatchRequest.md#difftype)
- [index](RepositoryApiRepoDownloadPullDiffOrPatchRequest.md#index)
- [owner](RepositoryApiRepoDownloadPullDiffOrPatchRequest.md#owner)
- [repo](RepositoryApiRepoDownloadPullDiffOrPatchRequest.md#repo)

## Properties

### <a id="binary" name="binary"></a> binary

• `Optional` `Readonly` **binary**: `boolean`

whether to include binary file changes. if true, the diff is applicable with &#x60;git apply&#x60;

**`memberof`** RepositoryApiRepoDownloadPullDiffOrPatch

#### Defined in

[apis/repository-api.ts:14002](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14002)

___

### <a id="difftype" name="difftype"></a> diffType

• `Readonly` **diffType**: ``"patch"`` \| ``"diff"``

whether the output is diff or patch

**`memberof`** RepositoryApiRepoDownloadPullDiffOrPatch

#### Defined in

[apis/repository-api.ts:13995](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13995)

___

### <a id="index" name="index"></a> index

• `Readonly` **index**: `number`

index of the pull request to get

**`memberof`** RepositoryApiRepoDownloadPullDiffOrPatch

#### Defined in

[apis/repository-api.ts:13988](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13988)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoDownloadPullDiffOrPatch

#### Defined in

[apis/repository-api.ts:13974](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13974)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoDownloadPullDiffOrPatch

#### Defined in

[apis/repository-api.ts:13981](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L13981)
