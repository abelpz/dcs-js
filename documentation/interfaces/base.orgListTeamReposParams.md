[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgListTeamReposParams

# Interface: orgListTeamReposParams

[base](../modules/base.md).orgListTeamReposParams

## Hierarchy

- `baseParams`

  ↳ **`orgListTeamReposParams`**

## Table of contents

### Properties

- [auth](base.orgListTeamReposParams.md#auth)
- [id](base.orgListTeamReposParams.md#id)
- [limit](base.orgListTeamReposParams.md#limit)
- [options](base.orgListTeamReposParams.md#options)
- [page](base.orgListTeamReposParams.md#page)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the team

#### Defined in

base/organization/org-list-team-repos.ts:6

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/organization/org-list-team-repos.ts:10

___

### <a id="options" name="options"></a> options

• `Optional` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basePath?` | `string` |
| `headers?` | { `[key: string]`: `any`;  } |
| `query?` | { `[key: string]`: `any`;  } |

#### Inherited from

baseParams.options

#### Defined in

base/utils.ts:3

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/organization/org-list-team-repos.ts:8
