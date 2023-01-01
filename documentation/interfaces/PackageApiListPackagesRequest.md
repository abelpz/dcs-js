[dcs-js](../README.md) / [Exports](../modules.md) / PackageApiListPackagesRequest

# Interface: PackageApiListPackagesRequest

Request parameters for listPackages operation in PackageApi.

**`export`**

**`interface`** PackageApiListPackagesRequest

## Table of contents

### Properties

- [limit](PackageApiListPackagesRequest.md#limit)
- [owner](PackageApiListPackagesRequest.md#owner)
- [page](PackageApiListPackagesRequest.md#page)
- [q](PackageApiListPackagesRequest.md#q)
- [type](PackageApiListPackagesRequest.md#type)

## Properties

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** PackageApiListPackages

#### Defined in

[apis/package-api.ts:576](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L576)

___

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the packages

**`memberof`** PackageApiListPackages

#### Defined in

[apis/package-api.ts:562](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L562)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** PackageApiListPackages

#### Defined in

[apis/package-api.ts:569](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L569)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

name filter

**`memberof`** PackageApiListPackages

#### Defined in

[apis/package-api.ts:590](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L590)

___

### <a id="type" name="type"></a> type

• `Optional` `Readonly` **type**: ``"composer"`` \| ``"conan"`` \| ``"container"`` \| ``"generic"`` \| ``"helm"`` \| ``"maven"`` \| ``"npm"`` \| ``"nuget"`` \| ``"pypi"`` \| ``"rubygems"``

package type filter

**`memberof`** PackageApiListPackages

#### Defined in

[apis/package-api.ts:583](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/package-api.ts#L583)
