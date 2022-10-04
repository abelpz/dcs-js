[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditBranchProtectionParams

# Interface: repoEditBranchProtectionParams

[base](../modules/base.md).repoEditBranchProtectionParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditBranchProtectionParams`**

## Table of contents

### Properties

- [auth](base.repoEditBranchProtectionParams.md#auth)
- [body](base.repoEditBranchProtectionParams.md#body)
- [name](base.repoEditBranchProtectionParams.md#name)
- [options](base.repoEditBranchProtectionParams.md#options)
- [owner](base.repoEditBranchProtectionParams.md#owner)
- [repo](base.repoEditBranchProtectionParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditBranchProtectionOption`](base.EditBranchProtectionOption.md)

#### Defined in

base/repository/repo-edit-branch-protection.ts:14

___

### <a id="name" name="name"></a> name

• **name**: `string`

name of protected branch

#### Defined in

base/repository/repo-edit-branch-protection.ts:13

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

base/repository/repo-edit-branch-protection.ts:9

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-edit-branch-protection.ts:11
