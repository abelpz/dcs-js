[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetSingleCommitParams

# Interface: repoGetSingleCommitParams

[base](../modules/base.md).repoGetSingleCommitParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetSingleCommitParams`**

## Table of contents

### Properties

- [auth](base.repoGetSingleCommitParams.md#auth)
- [options](base.repoGetSingleCommitParams.md#options)
- [owner](base.repoGetSingleCommitParams.md#owner)
- [repo](base.repoGetSingleCommitParams.md#repo)
- [sha](base.repoGetSingleCommitParams.md#sha)

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

base/repository/repo-get-single-commit.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-single-commit.ts:10

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

a git ref or commit sha

#### Defined in

base/repository/repo-get-single-commit.ts:12
