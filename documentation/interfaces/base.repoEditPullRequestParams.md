[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditPullRequestParams

# Interface: repoEditPullRequestParams

[base](../modules/base.md).repoEditPullRequestParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditPullRequestParams`**

## Table of contents

### Properties

- [auth](base.repoEditPullRequestParams.md#auth)
- [body](base.repoEditPullRequestParams.md#body)
- [index](base.repoEditPullRequestParams.md#index)
- [options](base.repoEditPullRequestParams.md#options)
- [owner](base.repoEditPullRequestParams.md#owner)
- [repo](base.repoEditPullRequestParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditPullRequestOption`](base.EditPullRequestOption.md)

#### Defined in

base/repository/repo-edit-pull-request.ts:15

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request to edit

#### Defined in

base/repository/repo-edit-pull-request.ts:14

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

base/repository/repo-edit-pull-request.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-edit-pull-request.ts:12
