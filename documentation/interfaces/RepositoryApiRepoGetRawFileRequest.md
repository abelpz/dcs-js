[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoGetRawFileRequest

# Interface: RepositoryApiRepoGetRawFileRequest

Request parameters for repoGetRawFile operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoGetRawFileRequest

## Table of contents

### Properties

- [filepath](RepositoryApiRepoGetRawFileRequest.md#filepath)
- [owner](RepositoryApiRepoGetRawFileRequest.md#owner)
- [ref](RepositoryApiRepoGetRawFileRequest.md#ref)
- [repo](RepositoryApiRepoGetRawFileRequest.md#repo)

## Properties

### <a id="filepath" name="filepath"></a> filepath

• `Readonly` **filepath**: `string`

filepath of the file to get

**`memberof`** RepositoryApiRepoGetRawFile

#### Defined in

[apis/repository-api.ts:14933](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14933)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoGetRawFile

#### Defined in

[apis/repository-api.ts:14919](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14919)

___

### <a id="ref" name="ref"></a> ref

• `Optional` `Readonly` **ref**: `string`

The name of the commit/branch/tag. Default the repository’s default branch (usually master)

**`memberof`** RepositoryApiRepoGetRawFile

#### Defined in

[apis/repository-api.ts:14940](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14940)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoGetRawFile

#### Defined in

[apis/repository-api.ts:14926](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L14926)
