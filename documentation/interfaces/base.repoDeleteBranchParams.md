[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteBranchParams

# Interface: repoDeleteBranchParams

[base](../modules/base.md).repoDeleteBranchParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteBranchParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteBranchParams.md#auth)
- [branch](base.repoDeleteBranchParams.md#branch)
- [options](base.repoDeleteBranchParams.md#options)
- [owner](base.repoDeleteBranchParams.md#owner)
- [repo](base.repoDeleteBranchParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="branch" name="branch"></a> branch

• **branch**: `string`

branch to delete

#### Defined in

base/repository/repo-delete-branch.ts:12

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

base/repository/repo-delete-branch.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-branch.ts:10
