[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCheckTeamParams

# Interface: repoCheckTeamParams

[base](../modules/base.md).repoCheckTeamParams

## Hierarchy

- `baseParams`

  ↳ **`repoCheckTeamParams`**

## Table of contents

### Properties

- [auth](base.repoCheckTeamParams.md#auth)
- [options](base.repoCheckTeamParams.md#options)
- [owner](base.repoCheckTeamParams.md#owner)
- [repo](base.repoCheckTeamParams.md#repo)
- [team](base.repoCheckTeamParams.md#team)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

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

### <a id="owner" name="owner"></a> owner

• **owner**: `string`

owner of the repo

#### Defined in

base/repository/repo-check-team.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-check-team.ts:10

___

### <a id="team" name="team"></a> team

• **team**: `string`

team name

#### Defined in

base/repository/repo-check-team.ts:12
