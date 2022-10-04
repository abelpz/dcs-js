[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListGitHooksParams

# Interface: repoListGitHooksParams

[base](../modules/base.md).repoListGitHooksParams

## Hierarchy

- `baseParams`

  ↳ **`repoListGitHooksParams`**

## Table of contents

### Properties

- [auth](base.repoListGitHooksParams.md#auth)
- [options](base.repoListGitHooksParams.md#options)
- [owner](base.repoListGitHooksParams.md#owner)
- [repo](base.repoListGitHooksParams.md#repo)

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

base/repository/repo-list-git-hooks.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-git-hooks.ts:8
