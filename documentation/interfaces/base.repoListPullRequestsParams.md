[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListPullRequestsParams

# Interface: repoListPullRequestsParams

[base](../modules/base.md).repoListPullRequestsParams

## Hierarchy

- `baseParams`

  ↳ **`repoListPullRequestsParams`**

## Table of contents

### Properties

- [auth](base.repoListPullRequestsParams.md#auth)
- [labels](base.repoListPullRequestsParams.md#labels)
- [limit](base.repoListPullRequestsParams.md#limit)
- [milestone](base.repoListPullRequestsParams.md#milestone)
- [options](base.repoListPullRequestsParams.md#options)
- [owner](base.repoListPullRequestsParams.md#owner)
- [page](base.repoListPullRequestsParams.md#page)
- [repo](base.repoListPullRequestsParams.md#repo)
- [sort](base.repoListPullRequestsParams.md#sort)
- [state](base.repoListPullRequestsParams.md#state)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="labels" name="labels"></a> labels

• `Optional` **labels**: `number`[]

Label IDs

#### Defined in

base/repository/repo-list-pull-requests.ts:16

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-list-pull-requests.ts:20

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` **milestone**: `number`

ID of the milestone

#### Defined in

base/repository/repo-list-pull-requests.ts:14

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

base/repository/repo-list-pull-requests.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-pull-requests.ts:18

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-pull-requests.ts:8

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: `string`

Type of sort

#### Defined in

base/repository/repo-list-pull-requests.ts:12

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

State of pull request: open or closed (optional)

#### Defined in

base/repository/repo-list-pull-requests.ts:10
