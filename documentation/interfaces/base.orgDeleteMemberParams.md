[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgDeleteMemberParams

# Interface: orgDeleteMemberParams

[base](../modules/base.md).orgDeleteMemberParams

## Hierarchy

- `baseParams`

  ↳ **`orgDeleteMemberParams`**

## Table of contents

### Properties

- [auth](base.orgDeleteMemberParams.md#auth)
- [options](base.orgDeleteMemberParams.md#options)
- [org](base.orgDeleteMemberParams.md#org)
- [username](base.orgDeleteMemberParams.md#username)

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

### <a id="org" name="org"></a> org

• **org**: `string`

name of the organization

#### Defined in

base/organization/org-delete-member.ts:5

___

### <a id="username" name="username"></a> username

• **username**: `string`

username of the user

#### Defined in

base/organization/org-delete-member.ts:7
