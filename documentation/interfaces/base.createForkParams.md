[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / createForkParams

# Interface: createForkParams

[base](../modules/base.md).createForkParams

## Hierarchy

- `baseParams`

  ↳ **`createForkParams`**

## Table of contents

### Properties

- [auth](base.createForkParams.md#auth)
- [body](base.createForkParams.md#body)
- [options](base.createForkParams.md#options)
- [owner](base.createForkParams.md#owner)
- [repo](base.createForkParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateForkOption`](base.CreateForkOption.md)

#### Defined in

base/repository/create-fork.ts:12

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

owner of the repo to fork

#### Defined in

base/repository/create-fork.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to fork

#### Defined in

base/repository/create-fork.ts:11
