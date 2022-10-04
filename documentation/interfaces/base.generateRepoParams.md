[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / generateRepoParams

# Interface: generateRepoParams

[base](../modules/base.md).generateRepoParams

## Hierarchy

- `baseParams`

  ↳ **`generateRepoParams`**

## Table of contents

### Properties

- [auth](base.generateRepoParams.md#auth)
- [body](base.generateRepoParams.md#body)
- [options](base.generateRepoParams.md#options)
- [templateOwner](base.generateRepoParams.md#templateowner)
- [templateRepo](base.generateRepoParams.md#templaterepo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`GenerateRepoOption`](base.GenerateRepoOption.md)

#### Defined in

base/repository/generate-repo.ts:13

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

### <a id="templateowner" name="templateowner"></a> templateOwner

• **templateOwner**: `string`

name of the template repository owner

#### Defined in

base/repository/generate-repo.ts:10

___

### <a id="templaterepo" name="templaterepo"></a> templateRepo

• **templateRepo**: `string`

name of the template repository

#### Defined in

base/repository/generate-repo.ts:12
