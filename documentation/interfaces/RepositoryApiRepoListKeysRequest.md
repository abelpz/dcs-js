[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoListKeysRequest

# Interface: RepositoryApiRepoListKeysRequest

Request parameters for repoListKeys operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoListKeysRequest

## Table of contents

### Properties

- [fingerprint](RepositoryApiRepoListKeysRequest.md#fingerprint)
- [keyId](RepositoryApiRepoListKeysRequest.md#keyid)
- [limit](RepositoryApiRepoListKeysRequest.md#limit)
- [owner](RepositoryApiRepoListKeysRequest.md#owner)
- [page](RepositoryApiRepoListKeysRequest.md#page)
- [repo](RepositoryApiRepoListKeysRequest.md#repo)

## Properties

### <a id="fingerprint" name="fingerprint"></a> fingerprint

• `Optional` `Readonly` **fingerprint**: `string`

fingerprint of the key

**`memberof`** RepositoryApiRepoListKeys

#### Defined in

[apis/repository-api.ts:15500](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15500)

___

### <a id="keyid" name="keyid"></a> keyId

• `Optional` `Readonly` **keyId**: `number`

the key_id to search for

**`memberof`** RepositoryApiRepoListKeys

#### Defined in

[apis/repository-api.ts:15493](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15493)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** RepositoryApiRepoListKeys

#### Defined in

[apis/repository-api.ts:15514](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15514)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoListKeys

#### Defined in

[apis/repository-api.ts:15479](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15479)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoListKeys

#### Defined in

[apis/repository-api.ts:15507](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15507)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoListKeys

#### Defined in

[apis/repository-api.ts:15486](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L15486)
