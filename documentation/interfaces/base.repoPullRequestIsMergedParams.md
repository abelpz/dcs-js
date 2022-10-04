[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoPullRequestIsMergedParams

# Interface: repoPullRequestIsMergedParams

[base](../modules/base.md).repoPullRequestIsMergedParams

## Hierarchy

- `baseParams`

  ↳ **`repoPullRequestIsMergedParams`**

## Table of contents

### Properties

- [auth](base.repoPullRequestIsMergedParams.md#auth)
- [index](base.repoPullRequestIsMergedParams.md#index)
- [options](base.repoPullRequestIsMergedParams.md#options)
- [owner](base.repoPullRequestIsMergedParams.md#owner)
- [repo](base.repoPullRequestIsMergedParams.md#repo)

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

index of the pull request

#### Defined in

base/repository/repo-pull-request-is-merged.ts:9

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

base/repository/repo-pull-request-is-merged.ts:5

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-pull-request-is-merged.ts:7
