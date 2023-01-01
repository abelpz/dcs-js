[dcs-js](../README.md) / [Exports](../modules.md) / CatalogApi

# Class: CatalogApi

CatalogApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`CatalogApi`**

## Table of contents

### Constructors

- [constructor](CatalogApi.md#constructor)

### Properties

- [axios](CatalogApi.md#axios)
- [basePath](CatalogApi.md#basepath)
- [configuration](CatalogApi.md#configuration)

### Methods

- [catalogGetEntry](CatalogApi.md#cataloggetentry)
- [catalogGetMetadata](CatalogApi.md#cataloggetmetadata)
- [catalogSearch](CatalogApi.md#catalogsearch)
- [catalogSearchOwner](CatalogApi.md#catalogsearchowner)
- [catalogSearchRepo](CatalogApi.md#catalogsearchrepo)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new CatalogApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/dd84989/base.ts#L52)

## Properties

### <a id="axios" name="axios"></a> axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### <a id="basepath" name="basepath"></a> basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/dd84989/base.ts#L50)

## Methods

### <a id="cataloggetentry" name="cataloggetentry"></a> catalogGetEntry

▸ **catalogGetEntry**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<[`CatalogEntry`](../interfaces/CatalogEntry.md)\>\>

**`summary`** Catalog entry

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | name of the owner |
| `repo` | `string` | name of the repo |
| `tag` | `string` | release tag or default branch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogEntry`](../interfaces/CatalogEntry.md)\>\>

#### Defined in

apis/catalog-api.ts:832

___

### <a id="cataloggetmetadata" name="cataloggetmetadata"></a> catalogGetMetadata

▸ **catalogGetMetadata**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<{ `[key: string]`: `object`;  }\>\>

**`summary`** Catalog entry metadata (manifest.yaml in JSON format)

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | name of the owner |
| `repo` | `string` | name of the repo |
| `tag` | `string` | release tag or default branch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<{ `[key: string]`: `object`;  }\>\>

#### Defined in

apis/catalog-api.ts:846

___

### <a id="catalogsearch" name="catalogsearch"></a> catalogSearch

▸ **catalogSearch**(`q?`, `owner?`, `repo?`, `tag?`, `lang?`, `stage?`, `subject?`, `checkingLevel?`, `book?`, `partialMatch?`, `includeHistory?`, `includeMetadata?`, `showIngredients?`, `sort?`, `order?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

**`summary`** Catalog search

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `q?` | `string` |
| `owner?` | `string` |
| `repo?` | `string` |
| `tag?` | `string` |
| `lang?` | `string` |
| `stage?` | `string` |
| `subject?` | `string` |
| `checkingLevel?` | `string` |
| `book?` | `string` |
| `partialMatch?` | `boolean` |
| `includeHistory?` | `boolean` |
| `includeMetadata?` | `boolean` |
| `showIngredients?` | `boolean` |
| `sort?` | `string` |
| `order?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

#### Defined in

apis/catalog-api.ts:874

___

### <a id="catalogsearchowner" name="catalogsearchowner"></a> catalogSearchOwner

▸ **catalogSearchOwner**(`owner`, `q?`, `repo?`, `tag?`, `lang?`, `stage?`, `subject?`, `checkingLevel?`, `book?`, `partialMatch?`, `includeHistory?`, `includeMetadata?`, `showIngredients?`, `sort?`, `order?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

**`summary`** Catalog search by owner

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the returned entries |
| `q?` | `string` | - |
| `repo?` | `string` | - |
| `tag?` | `string` | - |
| `lang?` | `string` | - |
| `stage?` | `string` | - |
| `subject?` | `string` | - |
| `checkingLevel?` | `string` | - |
| `book?` | `string` | - |
| `partialMatch?` | `boolean` | - |
| `includeHistory?` | `boolean` | - |
| `includeMetadata?` | `boolean` | - |
| `showIngredients?` | `boolean` | - |
| `sort?` | `string` | - |
| `order?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

#### Defined in

apis/catalog-api.ts:902

___

### <a id="catalogsearchrepo" name="catalogsearchrepo"></a> catalogSearchRepo

▸ **catalogSearchRepo**(`owner`, `repo`, `q?`, `owner2?`, `repo2?`, `tag?`, `lang?`, `stage?`, `subject?`, `checkingLevel?`, `book?`, `partialMatch?`, `includeHistory?`, `includeMetadata?`, `showIngredients?`, `sort?`, `order?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

**`summary`** Catalog search by repo

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the returned entries |
| `repo` | `string` | name of the repo of the returned entries |
| `q?` | `string` | - |
| `owner2?` | `string` | - |
| `repo2?` | `string` | - |
| `tag?` | `string` | - |
| `lang?` | `string` | - |
| `stage?` | `string` | - |
| `subject?` | `string` | - |
| `checkingLevel?` | `string` | - |
| `book?` | `string` | - |
| `partialMatch?` | `boolean` | - |
| `includeHistory?` | `boolean` | - |
| `includeMetadata?` | `boolean` | - |
| `showIngredients?` | `boolean` | - |
| `sort?` | `string` | - |
| `order?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

#### Defined in

apis/catalog-api.ts:932
