[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgAddTeamMemberParams

# Interface: orgAddTeamMemberParams

[base](../modules/base.md).orgAddTeamMemberParams

## Hierarchy

- `baseParams`

  ↳ **`orgAddTeamMemberParams`**

## Table of contents

### Properties

- [auth](base.orgAddTeamMemberParams.md#auth)
- [id](base.orgAddTeamMemberParams.md#id)
- [options](base.orgAddTeamMemberParams.md#options)
- [username](base.orgAddTeamMemberParams.md#username)

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

base/organization/org-add-team-member.ts:7

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

### <a id="username" name="username"></a> username

• **username**: `string`

username of the user to add

#### Defined in

base/organization/org-add-team-member.ts:9
