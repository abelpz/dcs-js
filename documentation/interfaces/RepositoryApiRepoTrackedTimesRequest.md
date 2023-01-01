[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoTrackedTimesRequest

# Interface: RepositoryApiRepoTrackedTimesRequest

Request parameters for repoTrackedTimes operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoTrackedTimesRequest

## Table of contents

### Properties

- [before](RepositoryApiRepoTrackedTimesRequest.md#before)
- [limit](RepositoryApiRepoTrackedTimesRequest.md#limit)
- [owner](RepositoryApiRepoTrackedTimesRequest.md#owner)
- [page](RepositoryApiRepoTrackedTimesRequest.md#page)
- [repo](RepositoryApiRepoTrackedTimesRequest.md#repo)
- [since](RepositoryApiRepoTrackedTimesRequest.md#since)
- [user](RepositoryApiRepoTrackedTimesRequest.md#user)

## Properties

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

Only show times updated before the given time. This is a timestamp in RFC 3339 format

**`memberof`** RepositoryApiRepoTrackedTimes

#### Defined in

[apis/repository-api.ts:16382](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16382)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** RepositoryApiRepoTrackedTimes

#### Defined in

[apis/repository-api.ts:16396](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16396)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiRepoTrackedTimes

#### Defined in

[apis/repository-api.ts:16354](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16354)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoTrackedTimes

#### Defined in

[apis/repository-api.ts:16389](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16389)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiRepoTrackedTimes

#### Defined in

[apis/repository-api.ts:16361](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16361)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

Only show times updated after the given time. This is a timestamp in RFC 3339 format

**`memberof`** RepositoryApiRepoTrackedTimes

#### Defined in

[apis/repository-api.ts:16375](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16375)

___

### <a id="user" name="user"></a> user

• `Optional` `Readonly` **user**: `string`

optional filter by user (available for issue managers)

**`memberof`** RepositoryApiRepoTrackedTimes

#### Defined in

[apis/repository-api.ts:16368](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16368)
