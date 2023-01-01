[dcs-js](../README.md) / [Exports](../modules.md) / PackageApi

# Class: PackageApi

PackageApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PackageApi`**

## Table of contents

### Constructors

- [constructor](PackageApi.md#constructor)

### Properties

- [axios](PackageApi.md#axios)
- [basePath](PackageApi.md#basepath)
- [configuration](PackageApi.md#configuration)

### Methods

- [deletePackage](PackageApi.md#deletepackage)
- [getPackage](PackageApi.md#getpackage)
- [listPackageFiles](PackageApi.md#listpackagefiles)
- [listPackages](PackageApi.md#listpackages)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new PackageApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="deletepackage" name="deletepackage"></a> deletePackage

▸ **deletePackage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a package

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiDeletePackageRequest`](../interfaces/PackageApiDeletePackageRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/package-api.ts:608](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L608)

___

### <a id="getpackage" name="getpackage"></a> getPackage

▸ **getPackage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)\>\>

**`summary`** Gets a package

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiGetPackageRequest`](../interfaces/PackageApiGetPackageRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)\>\>

#### Defined in

[apis/package-api.ts:620](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L620)

___

### <a id="listpackagefiles" name="listpackagefiles"></a> listPackageFiles

▸ **listPackageFiles**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PackageFile`](../interfaces/PackageFile.md)[]\>\>

**`summary`** Gets all files of a package

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiListPackageFilesRequest`](../interfaces/PackageApiListPackageFilesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PackageFile`](../interfaces/PackageFile.md)[]\>\>

#### Defined in

[apis/package-api.ts:632](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L632)

___

### <a id="listpackages" name="listpackages"></a> listPackages

▸ **listPackages**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)[]\>\>

**`summary`** Gets all packages of an owner

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiListPackagesRequest`](../interfaces/PackageApiListPackagesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)[]\>\>

#### Defined in

[apis/package-api.ts:644](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L644)
