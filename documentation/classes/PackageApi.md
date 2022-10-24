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

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/base.ts#L52)

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

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/base.ts#L50)

## Methods

### <a id="deletepackage" name="deletepackage"></a> deletePackage

▸ **deletePackage**(`owner`, `type`, `name`, `version`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a package

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the package |
| `type` | `string` | type of the package |
| `name` | `string` | name of the package |
| `version` | `string` | version of the package |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/package-api.ts:464](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/apis/package-api.ts#L464)

___

### <a id="getpackage" name="getpackage"></a> getPackage

▸ **getPackage**(`owner`, `type`, `name`, `version`, `options?`): `Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)\>\>

**`summary`** Gets a package

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the package |
| `type` | `string` | type of the package |
| `name` | `string` | name of the package |
| `version` | `string` | version of the package |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)\>\>

#### Defined in

[apis/package-api.ts:479](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/apis/package-api.ts#L479)

___

### <a id="listpackagefiles" name="listpackagefiles"></a> listPackageFiles

▸ **listPackageFiles**(`owner`, `type`, `name`, `version`, `options?`): `Promise`<`AxiosResponse`<[`PackageFile`](../interfaces/PackageFile.md)[]\>\>

**`summary`** Gets all files of a package

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the package |
| `type` | `string` | type of the package |
| `name` | `string` | name of the package |
| `version` | `string` | version of the package |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PackageFile`](../interfaces/PackageFile.md)[]\>\>

#### Defined in

[apis/package-api.ts:494](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/apis/package-api.ts#L494)

___

### <a id="listpackages" name="listpackages"></a> listPackages

▸ **listPackages**(`owner`, `page?`, `limit?`, `type?`, `q?`, `options?`): `Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)[]\>\>

**`summary`** Gets all packages of an owner

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the packages |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `type?` | ``"composer"`` \| ``"conan"`` \| ``"container"`` \| ``"generic"`` \| ``"helm"`` \| ``"maven"`` \| ``"npm"`` \| ``"nuget"`` \| ``"pypi"`` \| ``"rubygems"`` | - |
| `q?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Package`](../interfaces/Package.md)[]\>\>

#### Defined in

[apis/package-api.ts:510](https://github.com/unfoldingWord/dcs-js/blob/42a7ab5/apis/package-api.ts#L510)
