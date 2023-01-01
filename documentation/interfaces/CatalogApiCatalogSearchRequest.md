[dcs-js](../README.md) / [Exports](../modules.md) / CatalogApiCatalogSearchRequest

# Interface: CatalogApiCatalogSearchRequest

Request parameters for catalogSearch operation in CatalogApi.

**`export`**

**`interface`** CatalogApiCatalogSearchRequest

## Table of contents

### Properties

- [book](CatalogApiCatalogSearchRequest.md#book)
- [checkingLevel](CatalogApiCatalogSearchRequest.md#checkinglevel)
- [includeHistory](CatalogApiCatalogSearchRequest.md#includehistory)
- [includeMetadata](CatalogApiCatalogSearchRequest.md#includemetadata)
- [lang](CatalogApiCatalogSearchRequest.md#lang)
- [limit](CatalogApiCatalogSearchRequest.md#limit)
- [order](CatalogApiCatalogSearchRequest.md#order)
- [owner](CatalogApiCatalogSearchRequest.md#owner)
- [page](CatalogApiCatalogSearchRequest.md#page)
- [partialMatch](CatalogApiCatalogSearchRequest.md#partialmatch)
- [q](CatalogApiCatalogSearchRequest.md#q)
- [repo](CatalogApiCatalogSearchRequest.md#repo)
- [showIngredients](CatalogApiCatalogSearchRequest.md#showingredients)
- [sort](CatalogApiCatalogSearchRequest.md#sort)
- [stage](CatalogApiCatalogSearchRequest.md#stage)
- [subject](CatalogApiCatalogSearchRequest.md#subject)
- [tag](CatalogApiCatalogSearchRequest.md#tag)

## Properties

### <a id="book" name="book"></a> book

• `Optional` `Readonly` **book**: `string`

search only for entries with the given book(s) (project ids). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive)

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:938](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L938)

___

### <a id="checkinglevel" name="checkinglevel"></a> checkingLevel

• `Optional` `Readonly` **checkingLevel**: `string`

search only for entries with the given checking level(s). Can be 1, 2 or 3

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:931](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L931)

___

### <a id="includehistory" name="includehistory"></a> includeHistory

• `Optional` `Readonly` **includeHistory**: `boolean`

if true, all releases, not just the latest, are included. Default is false

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:952](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L952)

___

### <a id="includemetadata" name="includemetadata"></a> includeMetadata

• `Optional` `Readonly` **includeMetadata**: `boolean`

if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:959](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L959)

___

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:910](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L910)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results, defaults to no limit

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:994](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L994)

___

### <a id="order" name="order"></a> order

• `Optional` `Readonly` **order**: `string`

sort order, either \&quot;asc\&quot; (ascending) or \&quot;desc\&quot; (descending). Default is \&quot;asc\&quot;, ignored if \&quot;sort\&quot; is not specified.

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:980](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L980)

___

### <a id="owner" name="owner"></a> owner

• `Optional` `Readonly` **owner**: `string`

search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:889](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L889)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:987](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L987)

___

### <a id="partialmatch" name="partialmatch"></a> partialMatch

• `Optional` `Readonly` **partialMatch**: `boolean`

if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:945](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L945)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

keyword(s). Can use multiple &#x60;q&#x3D;&lt;keyword&gt;&#x60;s or a comma-delimited string for more than one keyword. Is case insensitive

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:882](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L882)

___

### <a id="repo" name="repo"></a> repo

• `Optional` `Readonly` **repo**: `string`

search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:896](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L896)

___

### <a id="showingredients" name="showingredients"></a> showIngredients

• `Optional` `Readonly` **showIngredients**: `boolean`

if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:966](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L966)

___

### <a id="sort" name="sort"></a> sort

• `Optional` `Readonly` **sort**: `string`

sort repos alphanumerically by attribute. Supported values are \&quot;subject\&quot;, \&quot;title\&quot;, \&quot;reponame\&quot;, \&quot;tag\&quot;, \&quot;released\&quot;, \&quot;lang\&quot;, \&quot;releases\&quot;, \&quot;stars\&quot;, \&quot;forks\&quot;. Default is by \&quot;language\&quot;, \&quot;subject\&quot; and then \&quot;tag\&quot;

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:973](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L973)

___

### <a id="stage" name="stage"></a> stage

• `Optional` `Readonly` **stage**: `string`

specifies which release stage to be return of these stages: \&quot;prod\&quot; - return only the production releases (default); \&quot;preprod\&quot; - return the pre-production release if it exists instead of the production release; \&quot;draft\&quot; - return the draft release if it exists instead of pre-production or production release; \&quot;latest\&quot; -return the default branch (e.g. master) if it is a valid RC instead of the above

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:917](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L917)

___

### <a id="subject" name="subject"></a> subject

• `Optional` `Readonly` **subject**: `string`

search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:924](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L924)

___

### <a id="tag" name="tag"></a> tag

• `Optional` `Readonly` **tag**: `string`

search only for entries with the given release tag(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive)

**`memberof`** CatalogApiCatalogSearch

#### Defined in

[apis/catalog-api.ts:903](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L903)
