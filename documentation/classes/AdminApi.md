[dcs-js](../README.md) / [Exports](../modules.md) / AdminApi

# Class: AdminApi

AdminApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`AdminApi`**

## Table of contents

### Constructors

- [constructor](AdminApi.md#constructor)

### Properties

- [axios](AdminApi.md#axios)
- [basePath](AdminApi.md#basepath)
- [configuration](AdminApi.md#configuration)

### Methods

- [adminAdoptRepository](AdminApi.md#adminadoptrepository)
- [adminCreateOrg](AdminApi.md#admincreateorg)
- [adminCreatePublicKey](AdminApi.md#admincreatepublickey)
- [adminCreateRepo](AdminApi.md#admincreaterepo)
- [adminCreateUser](AdminApi.md#admincreateuser)
- [adminCronList](AdminApi.md#admincronlist)
- [adminCronRun](AdminApi.md#admincronrun)
- [adminDeleteUnadoptedRepository](AdminApi.md#admindeleteunadoptedrepository)
- [adminDeleteUser](AdminApi.md#admindeleteuser)
- [adminDeleteUserPublicKey](AdminApi.md#admindeleteuserpublickey)
- [adminEditUser](AdminApi.md#adminedituser)
- [adminGetAllOrgs](AdminApi.md#admingetallorgs)
- [adminGetAllUsers](AdminApi.md#admingetallusers)
- [adminUnadoptedList](AdminApi.md#adminunadoptedlist)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new AdminApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="adminadoptrepository" name="adminadoptrepository"></a> adminAdoptRepository

▸ **adminAdoptRepository**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Adopt unadopted files as a repository

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminAdoptRepositoryRequest`](../interfaces/AdminApiAdminAdoptRepositoryRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1558](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1558)

___

### <a id="admincreateorg" name="admincreateorg"></a> adminCreateOrg

▸ **adminCreateOrg**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Create an organization

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminCreateOrgRequest`](../interfaces/AdminApiAdminCreateOrgRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/admin-api.ts:1570](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1570)

___

### <a id="admincreatepublickey" name="admincreatepublickey"></a> adminCreatePublicKey

▸ **adminCreatePublicKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

**`summary`** Add a public key on behalf of a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminCreatePublicKeyRequest`](../interfaces/AdminApiAdminCreatePublicKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

#### Defined in

[apis/admin-api.ts:1582](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1582)

___

### <a id="admincreaterepo" name="admincreaterepo"></a> adminCreateRepo

▸ **adminCreateRepo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository on behalf of a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminCreateRepoRequest`](../interfaces/AdminApiAdminCreateRepoRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/admin-api.ts:1594](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1594)

___

### <a id="admincreateuser" name="admincreateuser"></a> adminCreateUser

▸ **adminCreateUser**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** Create a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminCreateUserRequest`](../interfaces/AdminApiAdminCreateUserRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/admin-api.ts:1606](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1606)

___

### <a id="admincronlist" name="admincronlist"></a> adminCronList

▸ **adminCronList**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Cron`](../interfaces/Cron.md)[]\>\>

**`summary`** List cron tasks

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminCronListRequest`](../interfaces/AdminApiAdminCronListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Cron`](../interfaces/Cron.md)[]\>\>

#### Defined in

[apis/admin-api.ts:1618](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1618)

___

### <a id="admincronrun" name="admincronrun"></a> adminCronRun

▸ **adminCronRun**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Run cron task

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminCronRunRequest`](../interfaces/AdminApiAdminCronRunRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1630](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1630)

___

### <a id="admindeleteunadoptedrepository" name="admindeleteunadoptedrepository"></a> adminDeleteUnadoptedRepository

▸ **adminDeleteUnadoptedRepository**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete unadopted files

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminDeleteUnadoptedRepositoryRequest`](../interfaces/AdminApiAdminDeleteUnadoptedRepositoryRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1642](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1642)

___

### <a id="admindeleteuser" name="admindeleteuser"></a> adminDeleteUser

▸ **adminDeleteUser**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminDeleteUserRequest`](../interfaces/AdminApiAdminDeleteUserRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1654](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1654)

___

### <a id="admindeleteuserpublickey" name="admindeleteuserpublickey"></a> adminDeleteUserPublicKey

▸ **adminDeleteUserPublicKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a user\'s public key

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminDeleteUserPublicKeyRequest`](../interfaces/AdminApiAdminDeleteUserPublicKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1666](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1666)

___

### <a id="adminedituser" name="adminedituser"></a> adminEditUser

▸ **adminEditUser**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** Edit an existing user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminEditUserRequest`](../interfaces/AdminApiAdminEditUserRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/admin-api.ts:1678](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1678)

___

### <a id="admingetallorgs" name="admingetallorgs"></a> adminGetAllOrgs

▸ **adminGetAllOrgs**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List all organizations

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminGetAllOrgsRequest`](../interfaces/AdminApiAdminGetAllOrgsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/admin-api.ts:1690](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1690)

___

### <a id="admingetallusers" name="admingetallusers"></a> adminGetAllUsers

▸ **adminGetAllUsers**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List all users

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminGetAllUsersRequest`](../interfaces/AdminApiAdminGetAllUsersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/admin-api.ts:1702](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1702)

___

### <a id="adminunadoptedlist" name="adminunadoptedlist"></a> adminUnadoptedList

▸ **adminUnadoptedList**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`string`[]\>\>

**`summary`** List unadopted repositories

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AdminApiAdminUnadoptedListRequest`](../interfaces/AdminApiAdminUnadoptedListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`[]\>\>

#### Defined in

[apis/admin-api.ts:1714](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/admin-api.ts#L1714)
