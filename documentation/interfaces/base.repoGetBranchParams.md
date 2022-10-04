[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetBranchParams

# Interface: repoGetBranchParams

[base](../modules/base.md).repoGetBranchParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetBranchParams`**

## Table of contents

### Properties

- [auth](base.repoGetBranchParams.md#auth)
- [branch](base.repoGetBranchParams.md#branch)
- [options](base.repoGetBranchParams.md#options)
- [owner](base.repoGetBranchParams.md#owner)
- [repo](base.repoGetBranchParams.md#repo)

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

branch to get

#### Defined in

base/repository/repo-get-branch.ts:11

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

base/repository/repo-get-branch.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-branch.ts:9
