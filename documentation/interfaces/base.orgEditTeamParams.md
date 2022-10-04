[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgEditTeamParams

# Interface: orgEditTeamParams

[base](../modules/base.md).orgEditTeamParams

## Hierarchy

- `baseParams`

  ↳ **`orgEditTeamParams`**

## Table of contents

### Properties

- [auth](base.orgEditTeamParams.md#auth)
- [body](base.orgEditTeamParams.md#body)
- [id](base.orgEditTeamParams.md#id)
- [options](base.orgEditTeamParams.md#options)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditTeamOption`](base.EditTeamOption.md)

#### Defined in

base/organization/org-edit-team.ts:8

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the team to edit

#### Defined in

base/organization/org-edit-team.ts:7

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
