[dcs-js](../README.md) / [Exports](../modules.md) / OrganizationApiOrgGetAllRequest

# Interface: OrganizationApiOrgGetAllRequest

Request parameters for orgGetAll operation in OrganizationApi.

**`export`**

**`interface`** OrganizationApiOrgGetAllRequest

## Table of contents

### Properties

- [lang](OrganizationApiOrgGetAllRequest.md#lang)
- [limit](OrganizationApiOrgGetAllRequest.md#limit)
- [page](OrganizationApiOrgGetAllRequest.md#page)

## Properties

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang\&#39;s are ORed.

**`memberof`** OrganizationApiOrgGetAll

#### Defined in

[apis/organization-api.ts:4089](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4089)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** OrganizationApiOrgGetAll

#### Defined in

[apis/organization-api.ts:4103](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4103)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** OrganizationApiOrgGetAll

#### Defined in

[apis/organization-api.ts:4096](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4096)
