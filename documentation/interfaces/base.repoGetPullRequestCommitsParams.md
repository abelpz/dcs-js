[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetPullRequestCommitsParams

# Interface: repoGetPullRequestCommitsParams

[base](../modules/base.md).repoGetPullRequestCommitsParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetPullRequestCommitsParams`**

## Table of contents

### Properties

- [auth](base.repoGetPullRequestCommitsParams.md#auth)
- [index](base.repoGetPullRequestCommitsParams.md#index)
- [limit](base.repoGetPullRequestCommitsParams.md#limit)
- [options](base.repoGetPullRequestCommitsParams.md#options)
- [owner](base.repoGetPullRequestCommitsParams.md#owner)
- [page](base.repoGetPullRequestCommitsParams.md#page)
- [repo](base.repoGetPullRequestCommitsParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request to get

#### Defined in

base/repository/repo-get-pull-request-commits.ts:11

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-get-pull-request-commits.ts:15

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

base/repository/repo-get-pull-request-commits.ts:7

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-get-pull-request-commits.ts:13

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-pull-request-commits.ts:9
