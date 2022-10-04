[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetAllCommitsParams

# Interface: repoGetAllCommitsParams

[base](../modules/base.md).repoGetAllCommitsParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetAllCommitsParams`**

## Table of contents

### Properties

- [auth](base.repoGetAllCommitsParams.md#auth)
- [limit](base.repoGetAllCommitsParams.md#limit)
- [options](base.repoGetAllCommitsParams.md#options)
- [owner](base.repoGetAllCommitsParams.md#owner)
- [page](base.repoGetAllCommitsParams.md#page)
- [path](base.repoGetAllCommitsParams.md#path)
- [repo](base.repoGetAllCommitsParams.md#repo)
- [sha](base.repoGetAllCommitsParams.md#sha)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results (ignored if used with &#39;path&#39;)

#### Defined in

base/repository/repo-get-all-commits.ts:18

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

base/repository/repo-get-all-commits.ts:8

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-get-all-commits.ts:16

___

### <a id="path" name="path"></a> path

• `Optional` **path**: `string`

filepath of a file/dir

#### Defined in

base/repository/repo-get-all-commits.ts:14

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-all-commits.ts:10

___

### <a id="sha" name="sha"></a> sha

• `Optional` **sha**: `string`

SHA or branch to start listing commits from (usually &#39;master&#39;)

#### Defined in

base/repository/repo-get-all-commits.ts:12
