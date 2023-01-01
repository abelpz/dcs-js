[dcs-js](../README.md) / [Exports](../modules.md) / AdminApiAdminGetAllUsersRequest

# Interface: AdminApiAdminGetAllUsersRequest

Request parameters for adminGetAllUsers operation in AdminApi.

**`export`**

**`interface`** AdminApiAdminGetAllUsersRequest

## Table of contents

### Properties

- [lang](AdminApiAdminGetAllUsersRequest.md#lang)
- [limit](AdminApiAdminGetAllUsersRequest.md#limit)
- [page](AdminApiAdminGetAllUsersRequest.md#page)

## Properties

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang\&#39;s are ORed.

**`memberof`** AdminApiAdminGetAllUsers

#### Defined in

[apis/admin-api.ts:1498](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1498)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** AdminApiAdminGetAllUsers

#### Defined in

[apis/admin-api.ts:1512](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1512)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** AdminApiAdminGetAllUsers

#### Defined in

[apis/admin-api.ts:1505](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1505)
