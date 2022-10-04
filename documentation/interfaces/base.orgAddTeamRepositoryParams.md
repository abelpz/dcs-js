[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgAddTeamRepositoryParams

# Interface: orgAddTeamRepositoryParams

[base](../modules/base.md).orgAddTeamRepositoryParams

## Hierarchy

- `baseParams`

  ↳ **`orgAddTeamRepositoryParams`**

## Table of contents

### Properties

- [auth](base.orgAddTeamRepositoryParams.md#auth)
- [id](base.orgAddTeamRepositoryParams.md#id)
- [options](base.orgAddTeamRepositoryParams.md#options)
- [org](base.orgAddTeamRepositoryParams.md#org)
- [repo](base.orgAddTeamRepositoryParams.md#repo)

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

base/organization/org-add-team-repository.ts:7

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

### <a id="org" name="org"></a> org

• **org**: `string`

organization that owns the repo to add

#### Defined in

base/organization/org-add-team-repository.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to add

#### Defined in

base/organization/org-add-team-repository.ts:11
