[dcs-js](../README.md) / [Exports](../modules.md) / OrganizationApiTeamSearchRequest

# Interface: OrganizationApiTeamSearchRequest

Request parameters for teamSearch operation in OrganizationApi.

**`export`**

**`interface`** OrganizationApiTeamSearchRequest

## Table of contents

### Properties

- [includeDesc](OrganizationApiTeamSearchRequest.md#includedesc)
- [limit](OrganizationApiTeamSearchRequest.md#limit)
- [org](OrganizationApiTeamSearchRequest.md#org)
- [page](OrganizationApiTeamSearchRequest.md#page)
- [q](OrganizationApiTeamSearchRequest.md#q)

## Properties

### <a id="includedesc" name="includedesc"></a> includeDesc

• `Optional` `Readonly` **includeDesc**: `boolean`

include search within team description (defaults to true)

**`memberof`** OrganizationApiTeamSearch

#### Defined in

[apis/organization-api.ts:4642](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4642)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** OrganizationApiTeamSearch

#### Defined in

[apis/organization-api.ts:4656](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4656)

___

### <a id="org" name="org"></a> org

• `Readonly` **org**: `string`

name of the organization

**`memberof`** OrganizationApiTeamSearch

#### Defined in

[apis/organization-api.ts:4628](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4628)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** OrganizationApiTeamSearch

#### Defined in

[apis/organization-api.ts:4649](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4649)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

keywords to search

**`memberof`** OrganizationApiTeamSearch

#### Defined in

[apis/organization-api.ts:4635](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/organization-api.ts#L4635)
