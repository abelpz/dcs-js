[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateBranchParams

# Interface: repoCreateBranchParams

[base](../modules/base.md).repoCreateBranchParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateBranchParams`**

## Table of contents

### Properties

- [auth](base.repoCreateBranchParams.md#auth)
- [body](base.repoCreateBranchParams.md#body)
- [options](base.repoCreateBranchParams.md#options)
- [owner](base.repoCreateBranchParams.md#owner)
- [repo](base.repoCreateBranchParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateBranchRepoOption`](base.CreateBranchRepoOption.md)

#### Defined in

base/repository/repo-create-branch.ts:10

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

base/repository/repo-create-branch.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-branch.ts:9
