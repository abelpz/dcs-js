[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgRemoveTeamRepositoryParams

# Interface: orgRemoveTeamRepositoryParams

[base](../modules/base.md).orgRemoveTeamRepositoryParams

## Hierarchy

- `baseParams`

  ↳ **`orgRemoveTeamRepositoryParams`**

## Table of contents

### Properties

- [auth](base.orgRemoveTeamRepositoryParams.md#auth)
- [id](base.orgRemoveTeamRepositoryParams.md#id)
- [options](base.orgRemoveTeamRepositoryParams.md#options)
- [org](base.orgRemoveTeamRepositoryParams.md#org)
- [repo](base.orgRemoveTeamRepositoryParams.md#repo)

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

base/organization/org-remove-team-repository.ts:7

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

organization that owns the repo to remove

#### Defined in

base/organization/org-remove-team-repository.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to remove

#### Defined in

base/organization/org-remove-team-repository.ts:11
