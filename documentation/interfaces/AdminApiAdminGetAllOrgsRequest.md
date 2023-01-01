[dcs-js](../README.md) / [Exports](../modules.md) / AdminApiAdminGetAllOrgsRequest

# Interface: AdminApiAdminGetAllOrgsRequest

Request parameters for adminGetAllOrgs operation in AdminApi.

**`export`**

**`interface`** AdminApiAdminGetAllOrgsRequest

## Table of contents

### Properties

- [lang](AdminApiAdminGetAllOrgsRequest.md#lang)
- [limit](AdminApiAdminGetAllOrgsRequest.md#limit)
- [page](AdminApiAdminGetAllOrgsRequest.md#page)

## Properties

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang\&#39;s are ORed.

**`memberof`** AdminApiAdminGetAllOrgs

#### Defined in

[apis/admin-api.ts:1470](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1470)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** AdminApiAdminGetAllOrgs

#### Defined in

[apis/admin-api.ts:1484](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1484)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** AdminApiAdminGetAllOrgs

#### Defined in

[apis/admin-api.ts:1477](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1477)
