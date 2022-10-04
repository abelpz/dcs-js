[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListTeamsParams

# Interface: repoListTeamsParams

[base](../modules/base.md).repoListTeamsParams

## Hierarchy

- `baseParams`

  ↳ **`repoListTeamsParams`**

## Table of contents

### Properties

- [auth](base.repoListTeamsParams.md#auth)
- [options](base.repoListTeamsParams.md#options)
- [owner](base.repoListTeamsParams.md#owner)
- [repo](base.repoListTeamsParams.md#repo)

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

base/repository/repo-list-teams.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-teams.ts:8
