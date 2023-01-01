[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoTestHookRequest

# Interface: RepositoryApiRepoTestHookRequest

Request parameters for repoTestHook operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoTestHookRequest

## Table of contents

### Properties

- [id](RepositoryApiRepoTestHookRequest.md#id)
- [owner](RepositoryApiRepoTestHookRequest.md#owner)
- [ref](RepositoryApiRepoTestHookRequest.md#ref)
- [repo](RepositoryApiRepoTestHookRequest.md#repo)

## Properties

### <a id="id" name="id"></a> id

• `Readonly` **id**: `number`

id of the hook to test

**`memberof`** RepositoryApiRepoTestHook

#### Defined in

[apis/repository-api.ts:16333](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16333)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoTestHook

#### Defined in

[apis/repository-api.ts:16319](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16319)

___

### <a id="ref" name="ref"></a> ref

• `Optional` `Readonly` **ref**: `string`

The name of the commit/branch/tag, indicates which commit will be loaded to the webhook payload.

**`memberof`** RepositoryApiRepoTestHook

#### Defined in

[apis/repository-api.ts:16340](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16340)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoTestHook

#### Defined in

[apis/repository-api.ts:16326](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16326)
