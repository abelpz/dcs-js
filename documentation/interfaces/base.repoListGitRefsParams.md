[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListGitRefsParams

# Interface: repoListGitRefsParams

[base](../modules/base.md).repoListGitRefsParams

## Hierarchy

- `baseParams`

  ↳ **`repoListGitRefsParams`**

## Table of contents

### Properties

- [auth](base.repoListGitRefsParams.md#auth)
- [options](base.repoListGitRefsParams.md#options)
- [owner](base.repoListGitRefsParams.md#owner)
- [ref](base.repoListGitRefsParams.md#ref)
- [repo](base.repoListGitRefsParams.md#repo)

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

base/repository/repo-list-git-refs.ts:7

___

### <a id="ref" name="ref"></a> ref

• **ref**: `string`

part or full name of the ref

#### Defined in

base/repository/repo-list-git-refs.ts:11

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-git-refs.ts:9
