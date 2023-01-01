[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiGetTreeRequest

# Interface: RepositoryApiGetTreeRequest

Request parameters for getTree operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiGetTreeRequest

## Table of contents

### Properties

- [owner](RepositoryApiGetTreeRequest.md#owner)
- [page](RepositoryApiGetTreeRequest.md#page)
- [perPage](RepositoryApiGetTreeRequest.md#perpage)
- [recursive](RepositoryApiGetTreeRequest.md#recursive)
- [repo](RepositoryApiGetTreeRequest.md#repo)
- [sha](RepositoryApiGetTreeRequest.md#sha)

## Properties

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiGetTree

#### Defined in

[apis/repository-api.ts:12630](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12630)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number; the \&#39;truncated\&#39; field in the response will be true if there are still more items after this page, false if the last page

**`memberof`** RepositoryApiGetTree

#### Defined in

[apis/repository-api.ts:12658](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12658)

___

### <a id="perpage" name="perpage"></a> perPage

• `Optional` `Readonly` **perPage**: `number`

number of items per page

**`memberof`** RepositoryApiGetTree

#### Defined in

[apis/repository-api.ts:12665](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12665)

___

### <a id="recursive" name="recursive"></a> recursive

• `Optional` `Readonly` **recursive**: `boolean`

show all directories and files

**`memberof`** RepositoryApiGetTree

#### Defined in

[apis/repository-api.ts:12651](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12651)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiGetTree

#### Defined in

[apis/repository-api.ts:12637](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12637)

___

### <a id="sha" name="sha"></a> sha

• `Readonly` **sha**: `string`

sha of the commit

**`memberof`** RepositoryApiGetTree

#### Defined in

[apis/repository-api.ts:12644](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12644)
