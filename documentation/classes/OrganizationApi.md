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

### <a id="createorgrepo" name="createorgrepo"></a> createOrgRepo

▸ **createOrgRepo**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository in an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of organization |
| `body?` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:3702](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3702)

___

### <a id="createorgrepodeprecated" name="createorgrepodeprecated"></a> createOrgRepoDeprecated

▸ **createOrgRepoDeprecated**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository in an organization

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of organization |
| `body?` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:3716](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3716)

___

### <a id="orgaddteammember" name="orgaddteammember"></a> orgAddTeamMember

▸ **orgAddTeamMember**(`id`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a team member

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `username` | `string` | username of the user to add |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3729](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3729)

___

### <a id="orgaddteamrepository" name="orgaddteamrepository"></a> orgAddTeamRepository

▸ **orgAddTeamRepository**(`id`, `org`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a repository to a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `org` | `string` | organization that owns the repo to add |
| `repo` | `string` | name of the repo to add |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3743](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3743)

___

### <a id="orgconcealmember" name="orgconcealmember"></a> orgConcealMember

▸ **orgConcealMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Conceal a user\'s membership

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3756](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3756)

___

### <a id="orgcreate" name="orgcreate"></a> orgCreate

▸ **orgCreate**(`organization`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Create an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | [`CreateOrgOption`](../interfaces/CreateOrgOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:3768](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3768)

___

### <a id="orgcreatehook" name="orgcreatehook"></a> orgCreateHook

▸ **orgCreateHook**(`org`, `body`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Create a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `body` | [`CreateHookOption`](../interfaces/CreateHookOption.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:3781](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3781)

___

### <a id="orgcreatelabel" name="orgcreatelabel"></a> orgCreateLabel

▸ **orgCreateLabel**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Create a label for an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `body?` | [`CreateLabelOption`](../interfaces/CreateLabelOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:3794](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3794)

___

### <a id="orgcreateteam" name="orgcreateteam"></a> orgCreateTeam

▸ **orgCreateTeam**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Create a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `body?` | [`CreateTeamOption`](../interfaces/CreateTeamOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:3807](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3807)

___

### <a id="orgdelete" name="orgdelete"></a> orgDelete

▸ **orgDelete**(`org`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | organization that is to be deleted |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3819](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3819)

___

### <a id="orgdeletehook" name="orgdeletehook"></a> orgDeleteHook

▸ **orgDeleteHook**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the hook to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3832](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3832)

___

### <a id="orgdeletelabel" name="orgdeletelabel"></a> orgDeleteLabel

▸ **orgDeleteLabel**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the label to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3845](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3845)

___

### <a id="orgdeletemember" name="orgdeletemember"></a> orgDeleteMember

▸ **orgDeleteMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a member from an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3858](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3858)

___

### <a id="orgdeleteteam" name="orgdeleteteam"></a> orgDeleteTeam

▸ **orgDeleteTeam**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:3870](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3870)

___

### <a id="orgedit" name="orgedit"></a> orgEdit

▸ **orgEdit**(`org`, `body`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Edit an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization to edit |
| `body` | [`EditOrgOption`](../interfaces/EditOrgOption.md) |  |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:3883](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3883)

___

### <a id="orgedithook" name="orgedithook"></a> orgEditHook

▸ **orgEditHook**(`org`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Update a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the hook to update |
| `body?` | [`EditHookOption`](../interfaces/EditHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:3897](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3897)

___

### <a id="orgeditlabel" name="orgeditlabel"></a> orgEditLabel

▸ **orgEditLabel**(`org`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Update a label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the label to edit |
| `body?` | [`EditLabelOption`](../interfaces/EditLabelOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:3911](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3911)

___

### <a id="orgeditteam" name="orgeditteam"></a> orgEditTeam

▸ **orgEditTeam**(`id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Edit a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team to edit |
| `body?` | [`EditTeamOption`](../interfaces/EditTeamOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:3924](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3924)

___

### <a id="orgget" name="orgget"></a> orgGet

▸ **orgGet**(`org`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Get an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:3936](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3936)

___

### <a id="orggetall" name="orggetall"></a> orgGetAll

▸ **orgGetAll**(`lang?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** Get list of organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:3950](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3950)

___

### <a id="orggethook" name="orggethook"></a> orgGetHook

▸ **orgGetHook**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Get a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:3963](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3963)

___

### <a id="orggetlabel" name="orggetlabel"></a> orgGetLabel

▸ **orgGetLabel**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Get a single label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the label to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:3976](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3976)

___

### <a id="orggetteam" name="orggetteam"></a> orgGetTeam

▸ **orgGetTeam**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Get a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:3988](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L3988)

___

### <a id="orggetuserpermissions" name="orggetuserpermissions"></a> orgGetUserPermissions

▸ **orgGetUserPermissions**(`username`, `org`, `options?`): `Promise`<`AxiosResponse`<[`OrganizationPermissions`](../interfaces/OrganizationPermissions.md)\>\>

**`summary`** Get user permissions in organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `org` | `string` | name of the organization |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OrganizationPermissions`](../interfaces/OrganizationPermissions.md)\>\>

#### Defined in

[apis/organization-api.ts:4001](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4001)

___

### <a id="orgismember" name="orgismember"></a> orgIsMember

▸ **orgIsMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a member of an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4014](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4014)

___

### <a id="orgispublicmember" name="orgispublicmember"></a> orgIsPublicMember

▸ **orgIsPublicMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a public member of an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4027](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4027)

___

### <a id="orglistcurrentuserorgs" name="orglistcurrentuserorgs"></a> orgListCurrentUserOrgs

▸ **orgListCurrentUserOrgs**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List the current user\'s organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4040](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4040)

___

### <a id="orglisthooks" name="orglisthooks"></a> orgListHooks

▸ **orgListHooks**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

**`summary`** List an organization\'s webhooks

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4054](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4054)

___

### <a id="orglistlabels" name="orglistlabels"></a> orgListLabels

▸ **orgListLabels**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** List an organization\'s labels

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4068](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4068)

___

### <a id="orglistmembers" name="orglistmembers"></a> orgListMembers

▸ **orgListMembers**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List an organization\'s members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4082](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4082)

___

### <a id="orglistpublicmembers" name="orglistpublicmembers"></a> orgListPublicMembers

▸ **orgListPublicMembers**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List an organization\'s public members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4096](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4096)

___

### <a id="orglistrepos" name="orglistrepos"></a> orgListRepos

▸ **orgListRepos**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List an organization\'s repos

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4110](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4110)

___

### <a id="orglistteammember" name="orglistteammember"></a> orgListTeamMember

▸ **orgListTeamMember**(`id`, `username`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** List a particular member of team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `username` | `string` | username of the member to list |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/organization-api.ts:4123](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4123)

___

### <a id="orglistteammembers" name="orglistteammembers"></a> orgListTeamMembers

▸ **orgListTeamMembers**(`id`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a team\'s members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4137](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4137)

___

### <a id="orglistteamrepo" name="orglistteamrepo"></a> orgListTeamRepo

▸ **orgListTeamRepo**(`id`, `org`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** List a particular repo of team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `org` | `string` | organization that owns the repo to list |
| `repo` | `string` | name of the repo to list |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:4151](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4151)

___

### <a id="orglistteamrepos" name="orglistteamrepos"></a> orgListTeamRepos

▸ **orgListTeamRepos**(`id`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List a team\'s repos

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4165](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4165)

___

### <a id="orglistteams" name="orglistteams"></a> orgListTeams

▸ **orgListTeams**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List an organization\'s teams

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4179](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4179)

___

### <a id="orglistuserorgs" name="orglistuserorgs"></a> orgListUserOrgs

▸ **orgListUserOrgs**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List a user\'s organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:4193](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4193)

___

### <a id="orgpublicizemember" name="orgpublicizemember"></a> orgPublicizeMember

▸ **orgPublicizeMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Publicize a user\'s membership

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4206](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4206)

___

### <a id="orgremoveteammember" name="orgremoveteammember"></a> orgRemoveTeamMember

▸ **orgRemoveTeamMember**(`id`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a team member

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `username` | `string` | username of the user to remove |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4219](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4219)

___

### <a id="orgremoveteamrepository" name="orgremoveteamrepository"></a> orgRemoveTeamRepository

▸ **orgRemoveTeamRepository**(`id`, `org`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

This does not delete the repository, it only removes the repository from the team.

**`summary`** Remove a repository from a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `org` | `string` | organization that owns the repo to remove |
| `repo` | `string` | name of the repo to remove |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:4233](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4233)

___

### <a id="teamsearch" name="teamsearch"></a> teamSearch

▸ **teamSearch**(`org`, `q?`, `includeDesc?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TeamSearch200Response`](../interfaces/TeamSearch200Response.md)\>\>

**`summary`** Search for teams within an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `q?` | `string` | - |
| `includeDesc?` | `boolean` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TeamSearch200Response`](../interfaces/TeamSearch200Response.md)\>\>

#### Defined in

[apis/organization-api.ts:4249](https://github.com/unfoldingWord/dcs-js/blob/dd84989/apis/organization-api.ts#L4249)
