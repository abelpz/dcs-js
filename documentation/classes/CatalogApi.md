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

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/base.ts#L52)

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

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/base.ts#L50)

## Methods

### <a id="cataloggetentry" name="cataloggetentry"></a> catalogGetEntry

▸ **catalogGetEntry**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CatalogEntry`](../interfaces/CatalogEntry.md)\>\>

**`summary`** Catalog entry

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CatalogApiCatalogGetEntryRequest`](../interfaces/CatalogApiCatalogGetEntryRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogEntry`](../interfaces/CatalogEntry.md)\>\>

#### Defined in

[apis/catalog-api.ts:1278](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1278)

___

### <a id="cataloggetmetadata" name="cataloggetmetadata"></a> catalogGetMetadata

▸ **catalogGetMetadata**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<{ `[key: string]`: `object`;  }\>\>

**`summary`** Catalog entry metadata (manifest.yaml in JSON format)

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CatalogApiCatalogGetMetadataRequest`](../interfaces/CatalogApiCatalogGetMetadataRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<{ `[key: string]`: `object`;  }\>\>

#### Defined in

[apis/catalog-api.ts:1290](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1290)

___

### <a id="catalogsearch" name="catalogsearch"></a> catalogSearch

▸ **catalogSearch**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

**`summary`** Catalog search

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CatalogApiCatalogSearchRequest`](../interfaces/CatalogApiCatalogSearchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

#### Defined in

[apis/catalog-api.ts:1302](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1302)

___

### <a id="catalogsearchowner" name="catalogsearchowner"></a> catalogSearchOwner

▸ **catalogSearchOwner**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

**`summary`** Catalog search by owner

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CatalogApiCatalogSearchOwnerRequest`](../interfaces/CatalogApiCatalogSearchOwnerRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

#### Defined in

[apis/catalog-api.ts:1314](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1314)

___

### <a id="catalogsearchrepo" name="catalogsearchrepo"></a> catalogSearchRepo

▸ **catalogSearchRepo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

**`summary`** Catalog search by repo

**`throws`** {RequiredError}

**`memberof`** CatalogApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CatalogApiCatalogSearchRepoRequest`](../interfaces/CatalogApiCatalogSearchRepoRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CatalogSearchResults`](../interfaces/CatalogSearchResults.md)\>\>

#### Defined in

[apis/catalog-api.ts:1326](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/catalog-api.ts#L1326)
