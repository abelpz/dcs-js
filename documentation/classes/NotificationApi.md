[dcs-js](../README.md) / [Exports](../modules.md) / NotificationApi

# Class: NotificationApi

NotificationApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`NotificationApi`**

## Table of contents

### Constructors

- [constructor](NotificationApi.md#constructor)

### Properties

- [axios](NotificationApi.md#axios)
- [basePath](NotificationApi.md#basepath)
- [configuration](NotificationApi.md#configuration)

### Methods

- [notifyGetList](NotificationApi.md#notifygetlist)
- [notifyGetRepoList](NotificationApi.md#notifygetrepolist)
- [notifyGetThread](NotificationApi.md#notifygetthread)
- [notifyNewAvailable](NotificationApi.md#notifynewavailable)
- [notifyReadList](NotificationApi.md#notifyreadlist)
- [notifyReadRepoList](NotificationApi.md#notifyreadrepolist)
- [notifyReadThread](NotificationApi.md#notifyreadthread)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new NotificationApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="notifygetlist" name="notifygetlist"></a> notifyGetList

▸ **notifyGetList**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** List users\'s notification threads

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationApiNotifyGetListRequest`](../interfaces/NotificationApiNotifyGetListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1022](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L1022)

___

### <a id="notifygetrepolist" name="notifygetrepolist"></a> notifyGetRepoList

▸ **notifyGetRepoList**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** List users\'s notification threads on a specific repo

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationApiNotifyGetRepoListRequest`](../interfaces/NotificationApiNotifyGetRepoListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1034](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L1034)

___

### <a id="notifygetthread" name="notifygetthread"></a> notifyGetThread

▸ **notifyGetThread**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

**`summary`** Get notification thread by ID

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationApiNotifyGetThreadRequest`](../interfaces/NotificationApiNotifyGetThreadRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

#### Defined in

[apis/notification-api.ts:1046](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L1046)

___

### <a id="notifynewavailable" name="notifynewavailable"></a> notifyNewAvailable

▸ **notifyNewAvailable**(`options?`): `Promise`<`AxiosResponse`<[`NotificationCount`](../interfaces/NotificationCount.md)\>\>

**`summary`** Check if unread notifications exist

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationCount`](../interfaces/NotificationCount.md)\>\>

#### Defined in

[apis/notification-api.ts:1057](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L1057)

___

### <a id="notifyreadlist" name="notifyreadlist"></a> notifyReadList

▸ **notifyReadList**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** Mark notification threads as read, pinned or unread

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationApiNotifyReadListRequest`](../interfaces/NotificationApiNotifyReadListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1069](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L1069)

___

### <a id="notifyreadrepolist" name="notifyreadrepolist"></a> notifyReadRepoList

▸ **notifyReadRepoList**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** Mark notification threads as read, pinned or unread on a specific repo

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationApiNotifyReadRepoListRequest`](../interfaces/NotificationApiNotifyReadRepoListRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1081](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L1081)

___

### <a id="notifyreadthread" name="notifyreadthread"></a> notifyReadThread

▸ **notifyReadThread**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

**`summary`** Mark notification thread as read by ID

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`NotificationApiNotifyReadThreadRequest`](../interfaces/NotificationApiNotifyReadThreadRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

#### Defined in

[apis/notification-api.ts:1093](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/notification-api.ts#L1093)
