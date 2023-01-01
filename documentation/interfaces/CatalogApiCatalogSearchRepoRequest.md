[dcs-js](../README.md) / [Exports](../modules.md) / CatalogApiCatalogSearchRepoRequest

# Interface: CatalogApiCatalogSearchRepoRequest

Request parameters for catalogSearchRepo operation in CatalogApi.

**`export`**

**`interface`** CatalogApiCatalogSearchRepoRequest

## Table of contents

### Properties

- [book](CatalogApiCatalogSearchRepoRequest.md#book)
- [checkingLevel](CatalogApiCatalogSearchRepoRequest.md#checkinglevel)
- [includeHistory](CatalogApiCatalogSearchRepoRequest.md#includehistory)
- [includeMetadata](CatalogApiCatalogSearchRepoRequest.md#includemetadata)
- [lang](CatalogApiCatalogSearchRepoRequest.md#lang)
- [limit](CatalogApiCatalogSearchRepoRequest.md#limit)
- [order](CatalogApiCatalogSearchRepoRequest.md#order)
- [owner](CatalogApiCatalogSearchRepoRequest.md#owner)
- [owner2](CatalogApiCatalogSearchRepoRequest.md#owner2)
- [page](CatalogApiCatalogSearchRepoRequest.md#page)
- [partialMatch](CatalogApiCatalogSearchRepoRequest.md#partialmatch)
- [q](CatalogApiCatalogSearchRepoRequest.md#q)
- [repo](CatalogApiCatalogSearchRepoRequest.md#repo)
- [repo2](CatalogApiCatalogSearchRepoRequest.md#repo2)
- [showIngredients](CatalogApiCatalogSearchRepoRequest.md#showingredients)
- [sort](CatalogApiCatalogSearchRepoRequest.md#sort)
- [stage](CatalogApiCatalogSearchRepoRequest.md#stage)
- [subject](CatalogApiCatalogSearchRepoRequest.md#subject)
- [tag](CatalogApiCatalogSearchRepoRequest.md#tag)

## Properties

### <a id="book" name="book"></a> book

• `Optional` `Readonly` **book**: `string`

search only for entries with the given book(s) (project ids). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive)

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1204](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1204)

___

### <a id="checkinglevel" name="checkinglevel"></a> checkingLevel

• `Optional` `Readonly` **checkingLevel**: `string`

search only for entries with the given checking level(s). Can be 1, 2 or 3

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1197](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1197)

___

### <a id="includehistory" name="includehistory"></a> includeHistory

• `Optional` `Readonly` **includeHistory**: `boolean`

if true, all releases, not just the latest, are included. Default is false

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1218](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1218)

___

### <a id="includemetadata" name="includemetadata"></a> includeMetadata

• `Optional` `Readonly` **includeMetadata**: `boolean`

if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1225](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1225)

___

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1176](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1176)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results, defaults to no limit

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1260](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1260)

___

### <a id="order" name="order"></a> order

• `Optional` `Readonly` **order**: `string`

sort order, either \&quot;asc\&quot; (ascending) or \&quot;desc\&quot; (descending). Default is \&quot;asc\&quot;, ignored if \&quot;sort\&quot; is not specified.

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1246](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1246)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the returned entries

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1134](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1134)

___

### <a id="owner2" name="owner2"></a> owner2

• `Optional` `Readonly` **owner2**: `string`

search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1155](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1155)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1253](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1253)

___

### <a id="partialmatch" name="partialmatch"></a> partialMatch

• `Optional` `Readonly` **partialMatch**: `boolean`

if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1211](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1211)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

keyword(s). Can use multiple &#x60;q&#x3D;&lt;keyword&gt;&#x60;s or a comma-delimited string for more than one keyword. Is case insensitive

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1148](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1148)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo of the returned entries

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1141](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1141)

___

### <a id="repo2" name="repo2"></a> repo2

• `Optional` `Readonly` **repo2**: `string`

search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1162](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1162)

___

### <a id="showingredients" name="showingredients"></a> showIngredients

• `Optional` `Readonly` **showIngredients**: `boolean`

if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1232](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1232)

___

### <a id="sort" name="sort"></a> sort

• `Optional` `Readonly` **sort**: `string`

sort repos alphanumerically by attribute. Supported values are \&quot;subject\&quot;, \&quot;title\&quot;, \&quot;reponame\&quot;, \&quot;tag\&quot;, \&quot;released\&quot;, \&quot;lang\&quot;, \&quot;releases\&quot;, \&quot;stars\&quot;, \&quot;forks\&quot;. Default is by \&quot;language\&quot;, \&quot;subject\&quot; and then \&quot;tag\&quot;

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1239](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1239)

___

### <a id="stage" name="stage"></a> stage

• `Optional` `Readonly` **stage**: `string`

specifies which release stage to be return of these stages: \&quot;prod\&quot; - return only the production releases (default); \&quot;preprod\&quot; - return the pre-production release if it exists instead of the production release; \&quot;draft\&quot; - return the draft release if it exists instead of pre-production or production release; \&quot;latest\&quot; -return the default branch (e.g. master) if it is a valid RC instead of the above

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1183](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1183)

___

### <a id="subject" name="subject"></a> subject

• `Optional` `Readonly` **subject**: `string`

search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch&#x3D;true

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1190](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1190)

___

### <a id="tag" name="tag"></a> tag

• `Optional` `Readonly` **tag**: `string`

search only for entries with the given release tag(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive)

**`memberof`** CatalogApiCatalogSearchRepo

#### Defined in

[apis/catalog-api.ts:1169](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1169)
