[dcs-js](../README.md) / [Exports](../modules.md) / CatalogApiCatalogSearchOwnerRequest

# Interface: CatalogApiCatalogSearchOwnerRequest

Request parameters for catalogSearchOwner operation in CatalogApi.

**`export`**

**`interface`** CatalogApiCatalogSearchOwnerRequest

## Table of contents

### Properties

- [book](CatalogApiCatalogSearchOwnerRequest.md#book)
- [checkingLevel](CatalogApiCatalogSearchOwnerRequest.md#checkinglevel)
- [includeHistory](CatalogApiCatalogSearchOwnerRequest.md#includehistory)
- [includeMetadata](CatalogApiCatalogSearchOwnerRequest.md#includemetadata)
- [lang](CatalogApiCatalogSearchOwnerRequest.md#lang)
- [limit](CatalogApiCatalogSearchOwnerRequest.md#limit)
- [order](CatalogApiCatalogSearchOwnerRequest.md#order)
- [owner](CatalogApiCatalogSearchOwnerRequest.md#owner)
- [page](CatalogApiCatalogSearchOwnerRequest.md#page)
- [partialMatch](CatalogApiCatalogSearchOwnerRequest.md#partialmatch)
- [q](CatalogApiCatalogSearchOwnerRequest.md#q)
- [repo](CatalogApiCatalogSearchOwnerRequest.md#repo)
- [showIngredients](CatalogApiCatalogSearchOwnerRequest.md#showingredients)
- [sort](CatalogApiCatalogSearchOwnerRequest.md#sort)
- [stage](CatalogApiCatalogSearchOwnerRequest.md#stage)
- [subject](CatalogApiCatalogSearchOwnerRequest.md#subject)
- [tag](CatalogApiCatalogSearchOwnerRequest.md#tag)

## Properties

### <a id="book" name="book"></a> book

• `Optional` `Readonly` **book**: `string`

search only for entries with the given book(s) (project ids). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive)

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1064](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1064)

___

### <a id="checkinglevel" name="checkinglevel"></a> checkingLevel

• `Optional` `Readonly` **checkingLevel**: `string`

search only for entries with the given checking level(s). Can be 1, 2 or 3

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1057](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1057)

___

### <a id="includehistory" name="includehistory"></a> includeHistory

• `Optional` `Readonly` **includeHistory**: `boolean`

if true, all releases, not just the latest, are included. Default is false

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1078](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1078)

___

### <a id="includemetadata" name="includemetadata"></a> includeMetadata

• `Optional` `Readonly` **includeMetadata**: `boolean`

if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1085](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1085)

___

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1036](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1036)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results, defaults to no limit

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1120](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1120)

___

### <a id="order" name="order"></a> order

• `Optional` `Readonly` **order**: `string`

sort order, either \&quot;asc\&quot; (ascending) or \&quot;desc\&quot; (descending). Default is \&quot;asc\&quot;, ignored if \&quot;sort\&quot; is not specified.

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1106](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1106)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the returned entries

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1008](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1008)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1113](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1113)

___

### <a id="partialmatch" name="partialmatch"></a> partialMatch

• `Optional` `Readonly` **partialMatch**: `boolean`

if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1071](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1071)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

keyword(s). Can use multiple &#x60;q&#x3D;&lt;keyword&gt;&#x60;s or a comma-delimited string for more than one keyword. Is case insensitive

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1015](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1015)

___

### <a id="repo" name="repo"></a> repo

• `Optional` `Readonly` **repo**: `string`

search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1022](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1022)

___

### <a id="showingredients" name="showingredients"></a> showIngredients

• `Optional` `Readonly` **showIngredients**: `boolean`

if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1092](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1092)

___

### <a id="sort" name="sort"></a> sort

• `Optional` `Readonly` **sort**: `string`

sort repos alphanumerically by attribute. Supported values are \&quot;subject\&quot;, \&quot;title\&quot;, \&quot;reponame\&quot;, \&quot;tag\&quot;, \&quot;released\&quot;, \&quot;lang\&quot;, \&quot;releases\&quot;, \&quot;stars\&quot;, \&quot;forks\&quot;. Default is by \&quot;language\&quot;, \&quot;subject\&quot; and then \&quot;tag\&quot;

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1099](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1099)

___

### <a id="stage" name="stage"></a> stage

• `Optional` `Readonly` **stage**: `string`

specifies which release stage to be return of these stages: \&quot;prod\&quot; - return only the production releases (default); \&quot;preprod\&quot; - return the pre-production release if it exists instead of the production release; \&quot;draft\&quot; - return the draft release if it exists instead of pre-production or production release; \&quot;latest\&quot; -return the default branch (e.g. master) if it is a valid RC instead of the above

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1043](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1043)

___

### <a id="subject" name="subject"></a> subject

• `Optional` `Readonly` **subject**: `string`

search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1050](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1050)

___

### <a id="tag" name="tag"></a> tag

• `Optional` `Readonly` **tag**: `string`

search only for entries with the given release tag(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive)

**`memberof`** CatalogApiCatalogSearchOwner

#### Defined in

[apis/catalog-api.ts:1029](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1029)
