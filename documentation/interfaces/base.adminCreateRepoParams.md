[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / adminCreateRepoParams

# Interface: adminCreateRepoParams

[base](../modules/base.md).adminCreateRepoParams

## Hierarchy

- `baseParams`

  ↳ **`adminCreateRepoParams`**

## Table of contents

### Properties

- [auth](base.adminCreateRepoParams.md#auth)
- [body](base.adminCreateRepoParams.md#body)
- [options](base.adminCreateRepoParams.md#options)
- [username](base.adminCreateRepoParams.md#username)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateRepoOption`](base.CreateRepoOption.md)

#### Defined in

base/admin/admin-create-repo.ts:12

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

username of the user. This user will own the created repository

#### Defined in

base/admin/admin-create-repo.ts:11
