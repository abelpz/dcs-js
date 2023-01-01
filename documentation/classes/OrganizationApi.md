[dcs-js](../README.md) / [Exports](../modules.md) / OrganizationApi

# Class: OrganizationApi

OrganizationApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`OrganizationApi`**

## Table of contents

### Constructors

- [constructor](OrganizationApi.md#constructor)

### Properties

- [axios](OrganizationApi.md#axios)
- [basePath](OrganizationApi.md#basepath)
- [configuration](OrganizationApi.md#configuration)

### Methods

- [createOrgRepo](OrganizationApi.md#createorgrepo)
- [createOrgRepoDeprecated](OrganizationApi.md#createorgrepodeprecated)
- [orgAddTeamMember](OrganizationApi.md#orgaddteammember)
- [orgAddTeamRepository](OrganizationApi.md#orgaddteamrepository)
- [orgConcealMember](OrganizationApi.md#orgconcealmember)
- [orgCreate](OrganizationApi.md#orgcreate)
- [orgCreateHook](OrganizationApi.md#orgcreatehook)
- [orgCreateLabel](OrganizationApi.md#orgcreatelabel)
- [orgCreateTeam](OrganizationApi.md#orgcreateteam)
- [orgDelete](OrganizationApi.md#orgdelete)
- [orgDeleteHook](OrganizationApi.md#orgdeletehook)
- [orgDeleteLabel](OrganizationApi.md#orgdeletelabel)
- [orgDeleteMember](OrganizationApi.md#orgdeletemember)
- [orgDeleteTeam](OrganizationApi.md#orgdeleteteam)
- [orgEdit](OrganizationApi.md#orgedit)
- [orgEditHook](OrganizationApi.md#orgedithook)
- [orgEditLabel](OrganizationApi.md#orgeditlabel)
- [orgEditTeam](OrganizationApi.md#orgeditteam)
- [orgGet](OrganizationApi.md#orgget)
- [orgGetAll](OrganizationApi.md#orggetall)
- [orgGetHook](OrganizationApi.md#orggethook)
- [orgGetLabel](OrganizationApi.md#orggetlabel)
- [orgGetTeam](OrganizationApi.md#orggetteam)
- [orgGetUserPermissions](OrganizationApi.md#orggetuserpermissions)
- [orgIsMember](OrganizationApi.md#orgismember)
- [orgIsPublicMember](OrganizationApi.md#orgispublicmember)
- [orgListCurrentUserOrgs](OrganizationApi.md#orglistcurrentuserorgs)
- [orgListHooks](OrganizationApi.md#orglisthooks)
- [orgListLabels](OrganizationApi.md#orglistlabels)
- [orgListMembers](OrganizationApi.md#orglistmembers)
- [orgListPublicMembers](OrganizationApi.md#orglistpublicmembers)
- [orgListRepos](OrganizationApi.md#orglistrepos)
- [orgListTeamMember](OrganizationApi.md#orglistteammember)
- [orgListTeamMembers](OrganizationApi.md#orglistteammembers)
- [orgListTeamRepo](OrganizationApi.md#orglistteamrepo)
- [orgListTeamRepos](OrganizationApi.md#orglistteamrepos)
- [orgListTeams](OrganizationApi.md#orglistteams)
- [orgListUserOrgs](OrganizationApi.md#orglistuserorgs)
- [orgPublicizeMember](OrganizationApi.md#orgpublicizemember)
- [orgRemoveTeamMember](OrganizationApi.md#orgremoveteammember)
- [orgRemoveTeamRepository](OrganizationApi.md#orgremoveteamrepository)
- [teamSearch](OrganizationApi.md#teamsearch)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new OrganizationApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="createorgrepo" name="createorgrepo"></a> createOrgRepo

▸ **createOrgRepo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository in an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiCreateOrgRepoRequest`](../interfaces/OrganizationApiCreateOrgRepoRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:4674](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4674)

___

### <a id="createorgrepodeprecated" name="createorgrepodeprecated"></a> createOrgRepoDeprecated

▸ **createOrgRepoDeprecated**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository in an organization

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiCreateOrgRepoDeprecatedRequest`](../interfaces/OrganizationApiCreateOrgRepoDeprecatedRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:4687](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4687)

___

### <a id="orgaddteammember" name="orgaddteammember"></a> orgAddTeamMember

▸ **orgAddTeamMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a team member

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgAddTeamMemberRequest`](../interfaces/OrganizationApiOrgAddTeamMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4699](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4699)

___

### <a id="orgaddteamrepository" name="orgaddteamrepository"></a> orgAddTeamRepository

▸ **orgAddTeamRepository**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a repository to a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgAddTeamRepositoryRequest`](../interfaces/OrganizationApiOrgAddTeamRepositoryRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4711](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4711)

___

### <a id="orgconcealmember" name="orgconcealmember"></a> orgConcealMember

▸ **orgConcealMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Conceal a user\'s membership

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgConcealMemberRequest`](../interfaces/OrganizationApiOrgConcealMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4723](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4723)

___

### <a id="orgcreate" name="orgcreate"></a> orgCreate

▸ **orgCreate**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Create an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgCreateRequest`](../interfaces/OrganizationApiOrgCreateRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:4735](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4735)

___

### <a id="orgcreatehook" name="orgcreatehook"></a> orgCreateHook

▸ **orgCreateHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Create a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgCreateHookRequest`](../interfaces/OrganizationApiOrgCreateHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:4747](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4747)

___

### <a id="orgcreatelabel" name="orgcreatelabel"></a> orgCreateLabel

▸ **orgCreateLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Create a label for an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgCreateLabelRequest`](../interfaces/OrganizationApiOrgCreateLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:4759](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4759)

___

### <a id="orgcreateteam" name="orgcreateteam"></a> orgCreateTeam

▸ **orgCreateTeam**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Create a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgCreateTeamRequest`](../interfaces/OrganizationApiOrgCreateTeamRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:4771](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4771)

___

### <a id="orgdelete" name="orgdelete"></a> orgDelete

▸ **orgDelete**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgDeleteRequest`](../interfaces/OrganizationApiOrgDeleteRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4783](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4783)

___

### <a id="orgdeletehook" name="orgdeletehook"></a> orgDeleteHook

▸ **orgDeleteHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgDeleteHookRequest`](../interfaces/OrganizationApiOrgDeleteHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4795](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4795)

___

### <a id="orgdeletelabel" name="orgdeletelabel"></a> orgDeleteLabel

▸ **orgDeleteLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgDeleteLabelRequest`](../interfaces/OrganizationApiOrgDeleteLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4807](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4807)

___

### <a id="orgdeletemember" name="orgdeletemember"></a> orgDeleteMember

▸ **orgDeleteMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a member from an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgDeleteMemberRequest`](../interfaces/OrganizationApiOrgDeleteMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4819](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4819)

___

### <a id="orgdeleteteam" name="orgdeleteteam"></a> orgDeleteTeam

▸ **orgDeleteTeam**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgDeleteTeamRequest`](../interfaces/OrganizationApiOrgDeleteTeamRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4831](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4831)

___

### <a id="orgedit" name="orgedit"></a> orgEdit

▸ **orgEdit**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Edit an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgEditRequest`](../interfaces/OrganizationApiOrgEditRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:4843](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4843)

___

### <a id="orgedithook" name="orgedithook"></a> orgEditHook

▸ **orgEditHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Update a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgEditHookRequest`](../interfaces/OrganizationApiOrgEditHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:4855](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4855)

___

### <a id="orgeditlabel" name="orgeditlabel"></a> orgEditLabel

▸ **orgEditLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Update a label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgEditLabelRequest`](../interfaces/OrganizationApiOrgEditLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:4867](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4867)

___

### <a id="orgeditteam" name="orgeditteam"></a> orgEditTeam

▸ **orgEditTeam**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Edit a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgEditTeamRequest`](../interfaces/OrganizationApiOrgEditTeamRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:4879](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4879)

___

### <a id="orgget" name="orgget"></a> orgGet

▸ **orgGet**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Get an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgGetRequest`](../interfaces/OrganizationApiOrgGetRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:4891](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4891)

___

### <a id="orggetall" name="orggetall"></a> orgGetAll

▸ **orgGetAll**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** Get list of organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgGetAllRequest`](../interfaces/OrganizationApiOrgGetAllRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4903](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4903)

___

### <a id="orggethook" name="orggethook"></a> orgGetHook

▸ **orgGetHook**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Get a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgGetHookRequest`](../interfaces/OrganizationApiOrgGetHookRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:4915](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4915)

___

### <a id="orggetlabel" name="orggetlabel"></a> orgGetLabel

▸ **orgGetLabel**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Get a single label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgGetLabelRequest`](../interfaces/OrganizationApiOrgGetLabelRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:4927](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4927)

___

### <a id="orggetteam" name="orggetteam"></a> orgGetTeam

▸ **orgGetTeam**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Get a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgGetTeamRequest`](../interfaces/OrganizationApiOrgGetTeamRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:4939](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4939)

___

### <a id="orggetuserpermissions" name="orggetuserpermissions"></a> orgGetUserPermissions

▸ **orgGetUserPermissions**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`OrganizationPermissions`](../interfaces/OrganizationPermissions.md)\>\>

**`summary`** Get user permissions in organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgGetUserPermissionsRequest`](../interfaces/OrganizationApiOrgGetUserPermissionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OrganizationPermissions`](../interfaces/OrganizationPermissions.md)\>\>

#### Defined in

[apis/organization-api.ts:4951](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4951)

___

### <a id="orgismember" name="orgismember"></a> orgIsMember

▸ **orgIsMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a member of an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgIsMemberRequest`](../interfaces/OrganizationApiOrgIsMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4963](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4963)

___

### <a id="orgispublicmember" name="orgispublicmember"></a> orgIsPublicMember

▸ **orgIsPublicMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a public member of an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgIsPublicMemberRequest`](../interfaces/OrganizationApiOrgIsPublicMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4975](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4975)

___

### <a id="orglistcurrentuserorgs" name="orglistcurrentuserorgs"></a> orgListCurrentUserOrgs

▸ **orgListCurrentUserOrgs**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List the current user\'s organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListCurrentUserOrgsRequest`](../interfaces/OrganizationApiOrgListCurrentUserOrgsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4987](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4987)

___

### <a id="orglisthooks" name="orglisthooks"></a> orgListHooks

▸ **orgListHooks**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

**`summary`** List an organization\'s webhooks

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListHooksRequest`](../interfaces/OrganizationApiOrgListHooksRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4999](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4999)

___

### <a id="orglistlabels" name="orglistlabels"></a> orgListLabels

▸ **orgListLabels**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** List an organization\'s labels

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListLabelsRequest`](../interfaces/OrganizationApiOrgListLabelsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5011](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5011)

___

### <a id="orglistmembers" name="orglistmembers"></a> orgListMembers

▸ **orgListMembers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List an organization\'s members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListMembersRequest`](../interfaces/OrganizationApiOrgListMembersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5023](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5023)

___

### <a id="orglistpublicmembers" name="orglistpublicmembers"></a> orgListPublicMembers

▸ **orgListPublicMembers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List an organization\'s public members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListPublicMembersRequest`](../interfaces/OrganizationApiOrgListPublicMembersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5035](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5035)

___

### <a id="orglistrepos" name="orglistrepos"></a> orgListRepos

▸ **orgListRepos**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List an organization\'s repos

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListReposRequest`](../interfaces/OrganizationApiOrgListReposRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5047](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5047)

___

### <a id="orglistteammember" name="orglistteammember"></a> orgListTeamMember

▸ **orgListTeamMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** List a particular member of team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListTeamMemberRequest`](../interfaces/OrganizationApiOrgListTeamMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/organization-api.ts:5059](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5059)

___

### <a id="orglistteammembers" name="orglistteammembers"></a> orgListTeamMembers

▸ **orgListTeamMembers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a team\'s members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListTeamMembersRequest`](../interfaces/OrganizationApiOrgListTeamMembersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5071](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5071)

___

### <a id="orglistteamrepo" name="orglistteamrepo"></a> orgListTeamRepo

▸ **orgListTeamRepo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** List a particular repo of team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListTeamRepoRequest`](../interfaces/OrganizationApiOrgListTeamRepoRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:5083](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5083)

___

### <a id="orglistteamrepos" name="orglistteamrepos"></a> orgListTeamRepos

▸ **orgListTeamRepos**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List a team\'s repos

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListTeamReposRequest`](../interfaces/OrganizationApiOrgListTeamReposRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5095](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5095)

___

### <a id="orglistteams" name="orglistteams"></a> orgListTeams

▸ **orgListTeams**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List an organization\'s teams

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListTeamsRequest`](../interfaces/OrganizationApiOrgListTeamsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5107](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5107)

___

### <a id="orglistuserorgs" name="orglistuserorgs"></a> orgListUserOrgs

▸ **orgListUserOrgs**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List a user\'s organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgListUserOrgsRequest`](../interfaces/OrganizationApiOrgListUserOrgsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5119](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5119)

___

### <a id="orgpublicizemember" name="orgpublicizemember"></a> orgPublicizeMember

▸ **orgPublicizeMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Publicize a user\'s membership

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgPublicizeMemberRequest`](../interfaces/OrganizationApiOrgPublicizeMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5131](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5131)

___

### <a id="orgremoveteammember" name="orgremoveteammember"></a> orgRemoveTeamMember

▸ **orgRemoveTeamMember**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a team member

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgRemoveTeamMemberRequest`](../interfaces/OrganizationApiOrgRemoveTeamMemberRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5143](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5143)

___

### <a id="orgremoveteamrepository" name="orgremoveteamrepository"></a> orgRemoveTeamRepository

▸ **orgRemoveTeamRepository**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

This does not delete the repository, it only removes the repository from the team.

**`summary`** Remove a repository from a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiOrgRemoveTeamRepositoryRequest`](../interfaces/OrganizationApiOrgRemoveTeamRepositoryRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5155](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5155)

___

### <a id="teamsearch" name="teamsearch"></a> teamSearch

▸ **teamSearch**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TeamSearch200Response`](../interfaces/TeamSearch200Response.md)\>\>

**`summary`** Search for teams within an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrganizationApiTeamSearchRequest`](../interfaces/OrganizationApiTeamSearchRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TeamSearch200Response`](../interfaces/TeamSearch200Response.md)\>\>

#### Defined in

[apis/organization-api.ts:5167](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L5167)
