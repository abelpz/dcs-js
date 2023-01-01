[dcs-js](../README.md) / [Exports](../modules.md) / UserApiUserCurrentTrackedTimesRequest

# Interface: UserApiUserCurrentTrackedTimesRequest

Request parameters for userCurrentTrackedTimes operation in UserApi.

**`export`**

**`interface`** UserApiUserCurrentTrackedTimesRequest

## Table of contents

### Properties

- [before](UserApiUserCurrentTrackedTimesRequest.md#before)
- [limit](UserApiUserCurrentTrackedTimesRequest.md#limit)
- [page](UserApiUserCurrentTrackedTimesRequest.md#page)
- [since](UserApiUserCurrentTrackedTimesRequest.md#since)

## Properties

### <a id="before" name="before"></a> before

• `Optional` `Readonly` **before**: `string`

Only show times updated before the given time. This is a timestamp in RFC 3339 format

**`memberof`** UserApiUserCurrentTrackedTimes

#### Defined in

[apis/user-api.ts:4694](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L4694)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** UserApiUserCurrentTrackedTimes

#### Defined in

[apis/user-api.ts:4680](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L4680)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** UserApiUserCurrentTrackedTimes

#### Defined in

[apis/user-api.ts:4673](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L4673)

___

### <a id="since" name="since"></a> since

• `Optional` `Readonly` **since**: `string`

Only show times updated after the given time. This is a timestamp in RFC 3339 format

**`memberof`** UserApiUserCurrentTrackedTimes

#### Defined in

[apis/user-api.ts:4687](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L4687)
