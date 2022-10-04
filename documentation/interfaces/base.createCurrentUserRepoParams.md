[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / createCurrentUserRepoParams

# Interface: createCurrentUserRepoParams

[base](../modules/base.md).createCurrentUserRepoParams

## Hierarchy

- `baseParams`

  ↳ **`createCurrentUserRepoParams`**

## Table of contents

### Properties

- [auth](base.createCurrentUserRepoParams.md#auth)
- [body](base.createCurrentUserRepoParams.md#body)
- [options](base.createCurrentUserRepoParams.md#options)

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

base/repository/create-current-user-repo.ts:7

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
