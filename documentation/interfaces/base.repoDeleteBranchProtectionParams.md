[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteBranchProtectionParams

# Interface: repoDeleteBranchProtectionParams

[base](../modules/base.md).repoDeleteBranchProtectionParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteBranchProtectionParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteBranchProtectionParams.md#auth)
- [name](base.repoDeleteBranchProtectionParams.md#name)
- [options](base.repoDeleteBranchProtectionParams.md#options)
- [owner](base.repoDeleteBranchProtectionParams.md#owner)
- [repo](base.repoDeleteBranchProtectionParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="name" name="name"></a> name

• **name**: `string`

name of protected branch

#### Defined in

base/repository/repo-delete-branch-protection.ts:11

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

base/repository/repo-delete-branch-protection.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-branch-protection.ts:9
