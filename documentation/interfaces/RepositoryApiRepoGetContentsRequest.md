[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoGetContentsRequest

# Interface: RepositoryApiRepoGetContentsRequest

Request parameters for repoGetContents operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoGetContentsRequest

## Table of contents

### Properties

- [filepath](RepositoryApiRepoGetContentsRequest.md#filepath)
- [owner](RepositoryApiRepoGetContentsRequest.md#owner)
- [ref](RepositoryApiRepoGetContentsRequest.md#ref)
- [repo](RepositoryApiRepoGetContentsRequest.md#repo)

## Properties

### <a id="filepath" name="filepath"></a> filepath

• `Readonly` **filepath**: `string`

path of the dir, file, symlink or submodule in the repo

**`memberof`** RepositoryApiRepoGetContents

#### Defined in

[apis/repository-api.ts:14541](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14541)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoGetContents

#### Defined in

[apis/repository-api.ts:14527](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14527)

___

### <a id="ref" name="ref"></a> ref

• `Optional` `Readonly` **ref**: `string`

The name of the commit/branch/tag. Default the repository’s default branch (usually master)

**`memberof`** RepositoryApiRepoGetContents

#### Defined in

[apis/repository-api.ts:14548](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14548)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoGetContents

#### Defined in

[apis/repository-api.ts:14534](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14534)
