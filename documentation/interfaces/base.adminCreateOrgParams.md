[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminCreateOrgParams

# Interface: adminCreateOrgParams

[base](../modules/base.md).adminCreateOrgParams

## Hierarchy

- `baseParams`

  ↳ **`adminCreateOrgParams`**

## Table of contents

### Properties

- [auth](base.adminCreateOrgParams.md#auth)
- [body](base.adminCreateOrgParams.md#body)
- [options](base.adminCreateOrgParams.md#options)
- [username](base.adminCreateOrgParams.md#username)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateOrgOption`](base.CreateOrgOption.md)

#### Defined in

base/admin/admin-create-org.ts:10

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

username of the user that will own the created organization

#### Defined in

base/admin/admin-create-org.ts:9
