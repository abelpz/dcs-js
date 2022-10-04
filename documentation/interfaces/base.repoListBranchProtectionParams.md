[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListBranchProtectionParams

# Interface: repoListBranchProtectionParams

[base](../modules/base.md).repoListBranchProtectionParams

## Hierarchy

- `baseParams`

  ↳ **`repoListBranchProtectionParams`**

## Table of contents

### Properties

- [auth](base.repoListBranchProtectionParams.md#auth)
- [options](base.repoListBranchProtectionParams.md#options)
- [owner](base.repoListBranchProtectionParams.md#owner)
- [repo](base.repoListBranchProtectionParams.md#repo)

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

### <a id="owner" name="owner"></a> owner

• **owner**: `string`

owner of the repo

#### Defined in

base/repository/repo-list-branch-protection.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-branch-protection.ts:8
