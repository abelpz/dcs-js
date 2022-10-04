[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgGetUserPermissionsParams

# Interface: orgGetUserPermissionsParams

[base](../modules/base.md).orgGetUserPermissionsParams

## Hierarchy

- `baseParams`

  ↳ **`orgGetUserPermissionsParams`**

## Table of contents

### Properties

- [auth](base.orgGetUserPermissionsParams.md#auth)
- [options](base.orgGetUserPermissionsParams.md#options)
- [org](base.orgGetUserPermissionsParams.md#org)
- [username](base.orgGetUserPermissionsParams.md#username)

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

base/organization/org-get-user-permissions.ts:10

___

### <a id="username" name="username"></a> username

• **username**: `string`

username of user

#### Defined in

base/organization/org-get-user-permissions.ts:8
