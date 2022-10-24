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

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/base.ts#L52)

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

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/base.ts#L50)

## Methods

### <a id="createcurrentuserrepo" name="createcurrentuserrepo"></a> createCurrentUserRepo

▸ **createCurrentUserRepo**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/user-api.ts:4222](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4222)

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

[apis/user-api.ts:4233](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4233)

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

[apis/user-api.ts:4244](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4244)

___

### <a id="updateusersettings" name="updateusersettings"></a> updateUserSettings

▸ **updateUserSettings**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`UserSettings`](../interfaces/UserSettings.md)[]\>\>

**`summary`** Update user settings

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`UserSettingsOptions`](../interfaces/UserSettingsOptions.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`UserSettings`](../interfaces/UserSettings.md)[]\>\>

#### Defined in

[apis/user-api.ts:4256](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4256)

___

### <a id="useraddemail" name="useraddemail"></a> userAddEmail

▸ **userAddEmail**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`Email`](../interfaces/Email.md)[]\>\>

**`summary`** Add email addresses

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`CreateEmailOption`](../interfaces/CreateEmailOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Email`](../interfaces/Email.md)[]\>\>

#### Defined in

[apis/user-api.ts:4268](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4268)

___

### <a id="usercheckfollowing" name="usercheckfollowing"></a> userCheckFollowing

▸ **userCheckFollowing**(`follower`, `followee`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if one user is following another user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `follower` | `string` | username of following user |
| `followee` | `string` | username of followed user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4281](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4281)

___

### <a id="usercreateoauth2application" name="usercreateoauth2application"></a> userCreateOAuth2Application

▸ **userCreateOAuth2Application**(`body`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

**`summary`** creates a new OAuth2 application

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`CreateOAuth2ApplicationOptions`](../interfaces/CreateOAuth2ApplicationOptions.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

#### Defined in

[apis/user-api.ts:4293](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4293)

___

### <a id="usercreatetoken" name="usercreatetoken"></a> userCreateToken

▸ **userCreateToken**(`username`, `userCreateToken?`, `options?`): `Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)\>\>

**`summary`** Create an access token

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `userCreateToken?` | [`CreateAccessTokenOption`](../interfaces/CreateAccessTokenOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)\>\>

#### Defined in

[apis/user-api.ts:4306](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4306)

___

### <a id="usercurrentcheckfollowing" name="usercurrentcheckfollowing"></a> userCurrentCheckFollowing

▸ **userCurrentCheckFollowing**(`username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check whether a user is followed by the authenticated user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of followed user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4318](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4318)

___

### <a id="usercurrentcheckstarring" name="usercurrentcheckstarring"></a> userCurrentCheckStarring

▸ **userCurrentCheckStarring**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Whether the authenticated is starring the repo

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4331](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4331)

___

### <a id="usercurrentdeletefollow" name="usercurrentdeletefollow"></a> userCurrentDeleteFollow

▸ **userCurrentDeleteFollow**(`username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unfollow a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user to unfollow |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4343](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4343)

___

### <a id="usercurrentdeletegpgkey" name="usercurrentdeletegpgkey"></a> userCurrentDeleteGPGKey

▸ **userCurrentDeleteGPGKey**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a GPG key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of key to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4355](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4355)

___

### <a id="usercurrentdeletekey" name="usercurrentdeletekey"></a> userCurrentDeleteKey

▸ **userCurrentDeleteKey**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a public key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of key to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4367](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4367)

___

### <a id="usercurrentdeletestar" name="usercurrentdeletestar"></a> userCurrentDeleteStar

▸ **userCurrentDeleteStar**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unstar the given repo

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to unstar |
| `repo` | `string` | name of the repo to unstar |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4380](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4380)

___

### <a id="usercurrentgetgpgkey" name="usercurrentgetgpgkey"></a> userCurrentGetGPGKey

▸ **userCurrentGetGPGKey**(`id`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

**`summary`** Get a GPG key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of key to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

#### Defined in

[apis/user-api.ts:4392](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4392)

___

### <a id="usercurrentgetkey" name="usercurrentgetkey"></a> userCurrentGetKey

▸ **userCurrentGetKey**(`id`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

**`summary`** Get a public key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of key to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

#### Defined in

[apis/user-api.ts:4404](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4404)

___

### <a id="usercurrentlistfollowers" name="usercurrentlistfollowers"></a> userCurrentListFollowers

▸ **userCurrentListFollowers**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the authenticated user\'s followers

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:4417](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4417)

___

### <a id="usercurrentlistfollowing" name="usercurrentlistfollowing"></a> userCurrentListFollowing

▸ **userCurrentListFollowing**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the users that the authenticated user is following

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:4430](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4430)

___

### <a id="usercurrentlistgpgkeys" name="usercurrentlistgpgkeys"></a> userCurrentListGPGKeys

▸ **userCurrentListGPGKeys**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

**`summary`** List the authenticated user\'s GPG keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:4443](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4443)

___

### <a id="usercurrentlistkeys" name="usercurrentlistkeys"></a> userCurrentListKeys

▸ **userCurrentListKeys**(`fingerprint?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

**`summary`** List the authenticated user\'s public keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `fingerprint?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:4457](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4457)

___

### <a id="usercurrentlistrepos" name="usercurrentlistrepos"></a> userCurrentListRepos

▸ **userCurrentListRepos**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List the repos that the authenticated user owns

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:4470](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4470)

___

### <a id="usercurrentliststarred" name="usercurrentliststarred"></a> userCurrentListStarred

▸ **userCurrentListStarred**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** The repos that the authenticated user has starred

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:4483](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4483)

___

### <a id="usercurrentlistsubscriptions" name="usercurrentlistsubscriptions"></a> userCurrentListSubscriptions

▸ **userCurrentListSubscriptions**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List repositories watched by the authenticated user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:4496](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4496)

___

### <a id="usercurrentpostgpgkey" name="usercurrentpostgpgkey"></a> userCurrentPostGPGKey

▸ **userCurrentPostGPGKey**(`form?`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

**`summary`** Create a GPG key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `form?` | [`CreateGPGKeyOption`](../interfaces/CreateGPGKeyOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)\>\>

#### Defined in

[apis/user-api.ts:4508](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4508)

___

### <a id="usercurrentpostkey" name="usercurrentpostkey"></a> userCurrentPostKey

▸ **userCurrentPostKey**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

**`summary`** Create a public key

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`CreateKeyOption`](../interfaces/CreateKeyOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

#### Defined in

[apis/user-api.ts:4520](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4520)

___

### <a id="usercurrentputfollow" name="usercurrentputfollow"></a> userCurrentPutFollow

▸ **userCurrentPutFollow**(`username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Follow a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user to follow |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4532](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4532)

___

### <a id="usercurrentputstar" name="usercurrentputstar"></a> userCurrentPutStar

▸ **userCurrentPutStar**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Star the given repo

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to star |
| `repo` | `string` | name of the repo to star |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4545](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4545)

___

### <a id="usercurrenttrackedtimes" name="usercurrenttrackedtimes"></a> userCurrentTrackedTimes

▸ **userCurrentTrackedTimes**(`since?`, `before?`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List the current user\'s tracked times

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `since?` | `string` |
| `before?` | `string` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/user-api.ts:4558](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4558)

___

### <a id="userdeleteaccesstoken" name="userdeleteaccesstoken"></a> userDeleteAccessToken

▸ **userDeleteAccessToken**(`username`, `token`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** delete an access token

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `token` | `string` | token to be deleted, identified by ID and if not available by name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4571](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4571)

___

### <a id="userdeleteemail" name="userdeleteemail"></a> userDeleteEmail

▸ **userDeleteEmail**(`body?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete email addresses

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`DeleteEmailOption`](../interfaces/DeleteEmailOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4583](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4583)

___

### <a id="userdeleteoauth2application" name="userdeleteoauth2application"></a> userDeleteOAuth2Application

▸ **userDeleteOAuth2Application**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** delete an OAuth2 Application

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | token to be deleted |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/user-api.ts:4595](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4595)

___

### <a id="userget" name="userget"></a> userGet

▸ **userGet**(`username`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** Get a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/user-api.ts:4607](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4607)

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

[apis/user-api.ts:4618](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4618)

___

### <a id="usergetheatmapdata" name="usergetheatmapdata"></a> userGetHeatmapData

▸ **userGetHeatmapData**(`username`, `options?`): `Promise`<`AxiosResponse`<[`UserHeatmapData`](../interfaces/UserHeatmapData.md)[]\>\>

**`summary`** Get a user\'s heatmap

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`UserHeatmapData`](../interfaces/UserHeatmapData.md)[]\>\>

#### Defined in

[apis/user-api.ts:4630](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4630)

___

### <a id="usergetoauth2application" name="usergetoauth2application"></a> userGetOAuth2Application

▸ **userGetOAuth2Application**(`id`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

**`summary`** get an OAuth2 Application

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Application ID to be found |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

#### Defined in

[apis/user-api.ts:4642](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4642)

___

### <a id="usergetoauth2application-1" name="usergetoauth2application-1"></a> userGetOauth2Application

▸ **userGetOauth2Application**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)[]\>\>

**`summary`** List the authenticated user\'s oauth2 applications

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)[]\>\>

#### Defined in

[apis/user-api.ts:4655](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4655)

___

### <a id="usergetstopwatches" name="usergetstopwatches"></a> userGetStopWatches

▸ **userGetStopWatches**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`StopWatch`](../interfaces/StopWatch.md)[]\>\>

**`summary`** Get list of all existing stopwatches

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`StopWatch`](../interfaces/StopWatch.md)[]\>\>

#### Defined in

[apis/user-api.ts:4668](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4668)

___

### <a id="usergettokens" name="usergettokens"></a> userGetTokens

▸ **userGetTokens**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)[]\>\>

**`summary`** List the authenticated user\'s access tokens

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AccessToken`](../interfaces/AccessToken.md)[]\>\>

#### Defined in

[apis/user-api.ts:4682](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4682)

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

[apis/user-api.ts:4693](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4693)

___

### <a id="userlistfollowers" name="userlistfollowers"></a> userListFollowers

▸ **userListFollowers**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the given user\'s followers

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:4707](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4707)

___

### <a id="userlistfollowing" name="userlistfollowing"></a> userListFollowing

▸ **userListFollowing**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List the users that the given user is following

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/user-api.ts:4721](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4721)

___

### <a id="userlistgpgkeys" name="userlistgpgkeys"></a> userListGPGKeys

▸ **userListGPGKeys**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

**`summary`** List the given user\'s GPG keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GPGKey`](../interfaces/GPGKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:4735](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4735)

___

### <a id="userlistkeys" name="userlistkeys"></a> userListKeys

▸ **userListKeys**(`username`, `fingerprint?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

**`summary`** List the given user\'s public keys

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `fingerprint?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)[]\>\>

#### Defined in

[apis/user-api.ts:4750](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4750)

___

### <a id="userlistrepos" name="userlistrepos"></a> userListRepos

▸ **userListRepos**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List the repos owned by the given user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:4764](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4764)

___

### <a id="userliststarred" name="userliststarred"></a> userListStarred

▸ **userListStarred**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** The repos that the given user has starred

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:4778](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4778)

___

### <a id="userlistsubscriptions" name="userlistsubscriptions"></a> userListSubscriptions

▸ **userListSubscriptions**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List the repositories watched by a user

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of the user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/user-api.ts:4792](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4792)

___

### <a id="userlistteams" name="userlistteams"></a> userListTeams

▸ **userListTeams**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List all the teams a user belongs to

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/user-api.ts:4805](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4805)

___

### <a id="usersearch" name="usersearch"></a> userSearch

▸ **userSearch**(`q?`, `uid?`, `lang?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`UserSearch200Response`](../interfaces/UserSearch200Response.md)\>\>

**`summary`** Search for users

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `q?` | `string` |
| `uid?` | `number` |
| `lang?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`UserSearch200Response`](../interfaces/UserSearch200Response.md)\>\>

#### Defined in

[apis/user-api.ts:4821](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4821)

___

### <a id="userupdateoauth2application" name="userupdateoauth2application"></a> userUpdateOAuth2Application

▸ **userUpdateOAuth2Application**(`id`, `body`, `options?`): `Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

**`summary`** update an OAuth2 Application, this includes regenerating the client secret

**`throws`** {RequiredError}

**`memberof`** UserApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | application to be updated |
| `body` | [`CreateOAuth2ApplicationOptions`](../interfaces/CreateOAuth2ApplicationOptions.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OAuth2Application`](../interfaces/OAuth2Application.md)\>\>

#### Defined in

[apis/user-api.ts:4834](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4834)

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

[apis/user-api.ts:4845](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/user-api.ts#L4845)
