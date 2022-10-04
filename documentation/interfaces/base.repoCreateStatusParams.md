[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateStatusParams

# Interface: repoCreateStatusParams

[base](../modules/base.md).repoCreateStatusParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateStatusParams`**

## Table of contents

### Properties

- [auth](base.repoCreateStatusParams.md#auth)
- [body](base.repoCreateStatusParams.md#body)
- [options](base.repoCreateStatusParams.md#options)
- [owner](base.repoCreateStatusParams.md#owner)
- [repo](base.repoCreateStatusParams.md#repo)
- [sha](base.repoCreateStatusParams.md#sha)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateStatusOption`](base.CreateStatusOption.md)

#### Defined in

base/repository/repo-create-status.ts:13

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

base/repository/repo-create-status.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-status.ts:10

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha of the commit

#### Defined in

base/repository/repo-create-status.ts:12
