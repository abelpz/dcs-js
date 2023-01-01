[dcs-js](../README.md) / [Exports](../modules.md) / UserApi

# Class: UserApi

UserApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UserApi`**

## Table of contents

### Constructors

- [constructor](UserApi.md#constructor)

### Properties

- [axios](UserApi.md#axios)
- [basePath](UserApi.md#basepath)
- [configuration](UserApi.md#configuration)

### Methods

- [createCurrentUserRepo](UserApi.md#createcurrentuserrepo)
- [getUserSettings](UserApi.md#getusersettings)
- [getVerificationToken](UserApi.md#getverificationtoken)
- [updateUserSettings](UserApi.md#updateusersettings)
- [userAddEmail](UserApi.md#useraddemail)
- [userCheckFollowing](UserApi.md#usercheckfollowing)
- [userCreateOAuth2Application](UserApi.md#usercreateoauth2application)
- [userCreateToken](UserApi.md#usercreatetoken)
- [userCurrentCheckFollowing](UserApi.md#usercurrentcheckfollowing)
- [userCurrentCheckStarring](UserApi.md#usercurrentcheckstarring)
- [userCurrentDeleteFollow](UserApi.md#usercurrentdeletefollow)
- [userCurrentDeleteGPGKey](UserApi.md#usercurrentdeletegpgkey)
- [userCurrentDeleteKey](UserApi.md#usercurrentdeletekey)
- [userCurrentDeleteStar](UserApi.md#usercurrentdeletestar)
- [userCurrentGetGPGKey](UserApi.md#usercurrentgetgpgkey)
- [userCurrentGetKey](UserApi.md#usercurrentgetkey)
- [userCurrentListFollowers](UserApi.md#usercurrentlistfollowers)
- [userCurrentListFollowing](UserApi.md#usercurrentlistfollowing)
- [userCurrentListGPGKeys](UserApi.md#usercurrentlistgpgkeys)
- [userCurrentListKeys](UserApi.md#usercurrentlistkeys)
- [userCurrentListRepos](UserApi.md#usercurrentlistrepos)
- [userCurrentListStarred](UserApi.md#usercurrentliststarred)
- [userCurrentListSubscriptions](UserApi.md#usercurrentlistsubscriptions)
- [userCurrentPostGPGKey](UserApi.md#usercurrentpostgpgkey)
- [userCurrentPostKey](UserApi.md#usercurrentpostkey)
- [userCurrentPutFollow](UserApi.md#usercurrentputfollow)
- [userCurrentPutStar](UserApi.md#usercurrentputstar)
- [userCurrentTrackedTimes](UserApi.md#usercurrenttrackedtimes)
- [userDeleteAccessToken](UserApi.md#userdeleteaccesstoken)
- [userDeleteEmail](UserApi.md#userdeleteemail)
- [userDeleteOAuth2Application](UserApi.md#userdeleteoauth2application)
- [userGet](UserApi.md#userget)
- [userGetCurrent](UserApi.md#usergetcurrent)
- [userGetHeatmapData](UserApi.md#usergetheatmapdata)
- [userGetOAuth2Application](UserApi.md#usergetoauth2application)
- [userGetOauth2Application](UserApi.md#usergetoauth2application-1)
- [userGetStopWatches](UserApi.md#usergetstopwatches)
- [userGetTokens](UserApi.md#usergettokens)
- [userListEmails](UserApi.md#userlistemails)
- [userListFollowers](UserApi.md#userlistfollowers)
- [userListFollowing](UserApi.md#userlistfollowing)
- [userListGPGKeys](UserApi.md#userlistgpgkeys)
- [userListKeys](UserApi.md#userlistkeys)
- [userListRepos](UserApi.md#userlistrepos)
- [userListStarred](UserApi.md#userliststarred)
- [userListSubscriptions](UserApi.md#userlistsubscriptions)
- [userListTeams](UserApi.md#userlistteams)
- [userSearch](UserApi.md#usersearch)
- [userUpdateOAuth2Application](UserApi.md#userupdateoauth2application)
- [userVerifyGPGKey](UserApi.md#userverifygpgkey)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new UserApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="createcurrentuserrepo" name="createcurrentuserrepo"></a> createCurrentUserRepo

▸ **createCurrentUserRepo**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiCreateCurrentUserRepoRequest`](../interfaces/UserApiCreateCurrentUserRepoRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/user-api.ts:5160](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5160)

___

### <a id="getusersettings" name="getusersettings"></a> getUserSettings

▸ **getUserSettings**(`options?`): `Promise`<`AxiosResponse`<[`UserSettings`](../interfaces/UserSettings.md)[]\>\>

**`summary`** Get user settings

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`UserSettings`](../interfaces/UserSettings.md)[]\>\>

#### Defined in

[apis/user-api.ts:5171](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5171)

___

### <a id="getverificationtoken" name="getverificationtoken"></a> getVerificationToken

▸ **getVerificationToken**(`options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get a Token to verify

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/user-api.ts:5182](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5182)

___

### <a id="updateusersettings" name="updateusersettings"></a> updateUserSettings

▸ **updateUserSettings**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`UserSettings`](../interfaces/UserSettings.md)[]\>\>

**`summary`** Update user settings

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUpdateUserSettingsRequest`](../interfaces/UserApiUpdateUserSettingsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserSettings`](../interfaces/UserSettings.md)[]\>\>

#### Defined in

[apis/user-api.ts:5194](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5194)

___

### <a id="useraddemail" name="useraddemail"></a> userAddEmail

▸ **userAddEmail**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Email`](../interfaces/Email.md)[]\>\>

**`summary`** Add email addresses

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserAddEmailRequest`](../interfaces/UserApiUserAddEmailRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Email`](../interfaces/Email.md)[]\>\>

#### Defined in

[apis/user-api.ts:5206](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5206)

___

### <a id="usercheckfollowing" name="usercheckfollowing"></a> userCheckFollowing

▸ **userCheckFollowing**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if one user is following another user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCheckFollowingRequest`](../interfaces/UserApiUserCheckFollowingRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5218](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5218)

___

### <a id="usercreateoauth2application" name="usercreateoauth2application"></a> userCreateOAuth2Application

▸ **userCreateOAuth2Application**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

**`summary`** creates a new OAuth2 application

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCreateOAuth2ApplicationRequest`](../interfaces/UserApiUserCreateOAuth2ApplicationRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

#### Defined in

[apis/user-api.ts:5230](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5230)

___

### <a id="usercreatetoken" name="usercreatetoken"></a> userCreateToken

▸ **userCreateToken**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)\>\>

**`summary`** Create an access token

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCreateTokenRequest`](../interfaces/UserApiUserCreateTokenRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)\>\>

#### Defined in

[apis/user-api.ts:5242](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5242)

___

### <a id="usercurrentcheckfollowing" name="usercurrentcheckfollowing"></a> userCurrentCheckFollowing

▸ **userCurrentCheckFollowing**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check whether a user is followed by the authenticated user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentCheckFollowingRequest`](../interfaces/UserApiUserCurrentCheckFollowingRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5254](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5254)

___

### <a id="usercurrentcheckstarring" name="usercurrentcheckstarring"></a> userCurrentCheckStarring

▸ **userCurrentCheckStarring**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Whether the authenticated is starring the repo

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentCheckStarringRequest`](../interfaces/UserApiUserCurrentCheckStarringRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5266](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5266)

___

### <a id="usercurrentdeletefollow" name="usercurrentdeletefollow"></a> userCurrentDeleteFollow

▸ **userCurrentDeleteFollow**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unfollow a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentDeleteFollowRequest`](../interfaces/UserApiUserCurrentDeleteFollowRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5278](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5278)

___

### <a id="usercurrentdeletegpgkey" name="usercurrentdeletegpgkey"></a> userCurrentDeleteGPGKey

▸ **userCurrentDeleteGPGKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a GPG key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentDeleteGPGKeyRequest`](../interfaces/UserApiUserCurrentDeleteGPGKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5290](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5290)

___

### <a id="usercurrentdeletekey" name="usercurrentdeletekey"></a> userCurrentDeleteKey

▸ **userCurrentDeleteKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a public key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentDeleteKeyRequest`](../interfaces/UserApiUserCurrentDeleteKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5302](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5302)

___

### <a id="usercurrentdeletestar" name="usercurrentdeletestar"></a> userCurrentDeleteStar

▸ **userCurrentDeleteStar**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unstar the given repo

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentDeleteStarRequest`](../interfaces/UserApiUserCurrentDeleteStarRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5314](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5314)

___

### <a id="usercurrentgetgpgkey" name="usercurrentgetgpgkey"></a> userCurrentGetGPGKey

▸ **userCurrentGetGPGKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

**`summary`** Get a GPG key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentGetGPGKeyRequest`](../interfaces/UserApiUserCurrentGetGPGKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

#### Defined in

[apis/user-api.ts:5326](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5326)

___

### <a id="usercurrentgetkey" name="usercurrentgetkey"></a> userCurrentGetKey

▸ **userCurrentGetKey**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

**`summary`** Get a public key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentGetKeyRequest`](../interfaces/UserApiUserCurrentGetKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

#### Defined in

[apis/user-api.ts:5338](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5338)

___

### <a id="usercurrentlistfollowers" name="usercurrentlistfollowers"></a> userCurrentListFollowers

▸ **userCurrentListFollowers**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the authenticated user\'s followers

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentListFollowersRequest`](../interfaces/UserApiUserCurrentListFollowersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:5350](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5350)

___

### <a id="usercurrentlistfollowing" name="usercurrentlistfollowing"></a> userCurrentListFollowing

▸ **userCurrentListFollowing**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the users that the authenticated user is following

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentListFollowingRequest`](../interfaces/UserApiUserCurrentListFollowingRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:5362](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5362)

___

### <a id="usercurrentlistgpgkeys" name="usercurrentlistgpgkeys"></a> userCurrentListGPGKeys

▸ **userCurrentListGPGKeys**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

**`summary`** List the authenticated user\'s GPG keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentListGPGKeysRequest`](../interfaces/UserApiUserCurrentListGPGKeysRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:5374](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5374)

___

### <a id="usercurrentlistkeys" name="usercurrentlistkeys"></a> userCurrentListKeys

▸ **userCurrentListKeys**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

**`summary`** List the authenticated user\'s public keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentListKeysRequest`](../interfaces/UserApiUserCurrentListKeysRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:5386](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5386)

___

### <a id="usercurrentlistrepos" name="usercurrentlistrepos"></a> userCurrentListRepos

▸ **userCurrentListRepos**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List the repos that the authenticated user owns

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentListReposRequest`](../interfaces/UserApiUserCurrentListReposRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:5398](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5398)

___

### <a id="usercurrentliststarred" name="usercurrentliststarred"></a> userCurrentListStarred

▸ **userCurrentListStarred**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** The repos that the authenticated user has starred

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentListStarredRequest`](../interfaces/UserApiUserCurrentListStarredRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:5410](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5410)

___

### <a id="usercurrentlistsubscriptions" name="usercurrentlistsubscriptions"></a> userCurrentListSubscriptions

▸ **userCurrentListSubscriptions**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List repositories watched by the authenticated user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentListSubscriptionsRequest`](../interfaces/UserApiUserCurrentListSubscriptionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:5422](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5422)

___

### <a id="usercurrentpostgpgkey" name="usercurrentpostgpgkey"></a> userCurrentPostGPGKey

▸ **userCurrentPostGPGKey**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

**`summary`** Create a GPG key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentPostGPGKeyRequest`](../interfaces/UserApiUserCurrentPostGPGKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

#### Defined in

[apis/user-api.ts:5434](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5434)

___

### <a id="usercurrentpostkey" name="usercurrentpostkey"></a> userCurrentPostKey

▸ **userCurrentPostKey**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

**`summary`** Create a public key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentPostKeyRequest`](../interfaces/UserApiUserCurrentPostKeyRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

#### Defined in

[apis/user-api.ts:5446](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5446)

___

### <a id="usercurrentputfollow" name="usercurrentputfollow"></a> userCurrentPutFollow

▸ **userCurrentPutFollow**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Follow a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentPutFollowRequest`](../interfaces/UserApiUserCurrentPutFollowRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5458](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5458)

___

### <a id="usercurrentputstar" name="usercurrentputstar"></a> userCurrentPutStar

▸ **userCurrentPutStar**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Star the given repo

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentPutStarRequest`](../interfaces/UserApiUserCurrentPutStarRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5470](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5470)

___

### <a id="usercurrenttrackedtimes" name="usercurrenttrackedtimes"></a> userCurrentTrackedTimes

▸ **userCurrentTrackedTimes**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List the current user\'s tracked times

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserCurrentTrackedTimesRequest`](../interfaces/UserApiUserCurrentTrackedTimesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/user-api.ts:5482](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5482)

___

### <a id="userdeleteaccesstoken" name="userdeleteaccesstoken"></a> userDeleteAccessToken

▸ **userDeleteAccessToken**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** delete an access token

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserDeleteAccessTokenRequest`](../interfaces/UserApiUserDeleteAccessTokenRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5494](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5494)

___

### <a id="userdeleteemail" name="userdeleteemail"></a> userDeleteEmail

▸ **userDeleteEmail**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete email addresses

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserDeleteEmailRequest`](../interfaces/UserApiUserDeleteEmailRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5506](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5506)

___

### <a id="userdeleteoauth2application" name="userdeleteoauth2application"></a> userDeleteOAuth2Application

▸ **userDeleteOAuth2Application**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** delete an OAuth2 Application

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserDeleteOAuth2ApplicationRequest`](../interfaces/UserApiUserDeleteOAuth2ApplicationRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:5518](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5518)

___

### <a id="userget" name="userget"></a> userGet

▸ **userGet**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** Get a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserGetRequest`](../interfaces/UserApiUserGetRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/user-api.ts:5530](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5530)

___

### <a id="usergetcurrent" name="usergetcurrent"></a> userGetCurrent

▸ **userGetCurrent**(`options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** Get the authenticated user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/user-api.ts:5541](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5541)

___

### <a id="usergetheatmapdata" name="usergetheatmapdata"></a> userGetHeatmapData

▸ **userGetHeatmapData**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`UserHeatmapData`](../interfaces/UserHeatmapData.md)[]\>\>

**`summary`** Get a user\'s heatmap

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserGetHeatmapDataRequest`](../interfaces/UserApiUserGetHeatmapDataRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserHeatmapData`](../interfaces/UserHeatmapData.md)[]\>\>

#### Defined in

[apis/user-api.ts:5553](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5553)

___

### <a id="usergetoauth2application" name="usergetoauth2application"></a> userGetOAuth2Application

▸ **userGetOAuth2Application**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

**`summary`** get an OAuth2 Application

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserGetOAuth2ApplicationRequest`](../interfaces/UserApiUserGetOAuth2ApplicationRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

#### Defined in

[apis/user-api.ts:5565](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5565)

___

### <a id="usergetoauth2application-1" name="usergetoauth2application-1"></a> userGetOauth2Application

▸ **userGetOauth2Application**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)[]\>\>

**`summary`** List the authenticated user\'s oauth2 applications

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserGetOauth2ApplicationRequest`](../interfaces/UserApiUserGetOauth2ApplicationRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)[]\>\>

#### Defined in

[apis/user-api.ts:5577](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5577)

___

### <a id="usergetstopwatches" name="usergetstopwatches"></a> userGetStopWatches

▸ **userGetStopWatches**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`StopWatch`](../interfaces/StopWatch.md)[]\>\>

**`summary`** Get list of all existing stopwatches

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserGetStopWatchesRequest`](../interfaces/UserApiUserGetStopWatchesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`StopWatch`](../interfaces/StopWatch.md)[]\>\>

#### Defined in

[apis/user-api.ts:5589](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5589)

___

### <a id="usergettokens" name="usergettokens"></a> userGetTokens

▸ **userGetTokens**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)[]\>\>

**`summary`** List the authenticated user\'s access tokens

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserGetTokensRequest`](../interfaces/UserApiUserGetTokensRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)[]\>\>

#### Defined in

[apis/user-api.ts:5601](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5601)

___

### <a id="userlistemails" name="userlistemails"></a> userListEmails

▸ **userListEmails**(`options?`): `Promise`<`AxiosResponse`<[`Email`](../interfaces/Email.md)[]\>\>

**`summary`** List the authenticated user\'s email addresses

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Email`](../interfaces/Email.md)[]\>\>

#### Defined in

[apis/user-api.ts:5612](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5612)

___

### <a id="userlistfollowers" name="userlistfollowers"></a> userListFollowers

▸ **userListFollowers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the given user\'s followers

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListFollowersRequest`](../interfaces/UserApiUserListFollowersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:5624](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5624)

___

### <a id="userlistfollowing" name="userlistfollowing"></a> userListFollowing

▸ **userListFollowing**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the users that the given user is following

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListFollowingRequest`](../interfaces/UserApiUserListFollowingRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:5636](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5636)

___

### <a id="userlistgpgkeys" name="userlistgpgkeys"></a> userListGPGKeys

▸ **userListGPGKeys**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

**`summary`** List the given user\'s GPG keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListGPGKeysRequest`](../interfaces/UserApiUserListGPGKeysRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:5648](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5648)

___

### <a id="userlistkeys" name="userlistkeys"></a> userListKeys

▸ **userListKeys**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

**`summary`** List the given user\'s public keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListKeysRequest`](../interfaces/UserApiUserListKeysRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:5660](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5660)

___

### <a id="userlistrepos" name="userlistrepos"></a> userListRepos

▸ **userListRepos**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List the repos owned by the given user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListReposRequest`](../interfaces/UserApiUserListReposRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:5672](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5672)

___

### <a id="userliststarred" name="userliststarred"></a> userListStarred

▸ **userListStarred**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** The repos that the given user has starred

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListStarredRequest`](../interfaces/UserApiUserListStarredRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:5684](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5684)

___

### <a id="userlistsubscriptions" name="userlistsubscriptions"></a> userListSubscriptions

▸ **userListSubscriptions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List the repositories watched by a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListSubscriptionsRequest`](../interfaces/UserApiUserListSubscriptionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:5696](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5696)

___

### <a id="userlistteams" name="userlistteams"></a> userListTeams

▸ **userListTeams**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List all the teams a user belongs to

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserListTeamsRequest`](../interfaces/UserApiUserListTeamsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/user-api.ts:5708](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5708)

___

### <a id="usersearch" name="usersearch"></a> userSearch

▸ **userSearch**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`UserSearch200Response`](../interfaces/UserSearch200Response.md)\>\>

**`summary`** Search for users

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserSearchRequest`](../interfaces/UserApiUserSearchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserSearch200Response`](../interfaces/UserSearch200Response.md)\>\>

#### Defined in

[apis/user-api.ts:5720](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5720)

___

### <a id="userupdateoauth2application" name="userupdateoauth2application"></a> userUpdateOAuth2Application

▸ **userUpdateOAuth2Application**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

**`summary`** update an OAuth2 Application, this includes regenerating the client secret

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UserApiUserUpdateOAuth2ApplicationRequest`](../interfaces/UserApiUserUpdateOAuth2ApplicationRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

#### Defined in

[apis/user-api.ts:5732](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5732)

___

### <a id="userverifygpgkey" name="userverifygpgkey"></a> userVerifyGPGKey

▸ **userVerifyGPGKey**(`options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

**`summary`** Verify a GPG key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

#### Defined in

[apis/user-api.ts:5743](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5743)
