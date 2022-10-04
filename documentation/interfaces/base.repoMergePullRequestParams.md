[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoMergePullRequestParams

# Interface: repoMergePullRequestParams

[base](../modules/base.md).repoMergePullRequestParams

## Hierarchy

- `baseParams`

  ↳ **`repoMergePullRequestParams`**

## Table of contents

### Properties

- [auth](base.repoMergePullRequestParams.md#auth)
- [body](base.repoMergePullRequestParams.md#body)
- [index](base.repoMergePullRequestParams.md#index)
- [options](base.repoMergePullRequestParams.md#options)
- [owner](base.repoMergePullRequestParams.md#owner)
- [repo](base.repoMergePullRequestParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`MergePullRequestOption`](base.MergePullRequestOption.md)

#### Defined in

base/repository/repo-merge-pull-request.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request to merge

#### Defined in

base/repository/repo-merge-pull-request.ts:12

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

base/repository/repo-merge-pull-request.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-merge-pull-request.ts:10
