[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateBranchProtectionParams

# Interface: repoCreateBranchProtectionParams

[base](../modules/base.md).repoCreateBranchProtectionParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateBranchProtectionParams`**

## Table of contents

### Properties

- [auth](base.repoCreateBranchProtectionParams.md#auth)
- [body](base.repoCreateBranchProtectionParams.md#body)
- [options](base.repoCreateBranchProtectionParams.md#options)
- [owner](base.repoCreateBranchProtectionParams.md#owner)
- [repo](base.repoCreateBranchProtectionParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateBranchProtectionOption`](base.CreateBranchProtectionOption.md)

#### Defined in

base/repository/repo-create-branch-protection.ts:13

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

base/repository/repo-create-branch-protection.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-branch-protection.ts:12
