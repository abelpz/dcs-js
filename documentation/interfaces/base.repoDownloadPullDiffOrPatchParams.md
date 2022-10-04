[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDownloadPullDiffOrPatchParams

# Interface: repoDownloadPullDiffOrPatchParams

[base](../modules/base.md).repoDownloadPullDiffOrPatchParams

## Hierarchy

- `baseParams`

  ↳ **`repoDownloadPullDiffOrPatchParams`**

## Table of contents

### Properties

- [auth](base.repoDownloadPullDiffOrPatchParams.md#auth)
- [binary](base.repoDownloadPullDiffOrPatchParams.md#binary)
- [diffType](base.repoDownloadPullDiffOrPatchParams.md#difftype)
- [index](base.repoDownloadPullDiffOrPatchParams.md#index)
- [options](base.repoDownloadPullDiffOrPatchParams.md#options)
- [owner](base.repoDownloadPullDiffOrPatchParams.md#owner)
- [repo](base.repoDownloadPullDiffOrPatchParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="binary" name="binary"></a> binary

• `Optional` **binary**: `boolean`

whether to include binary file changes. if true, the diff is applicable with `git apply`

#### Defined in

base/repository/repo-download-pull-diff-or-patch.ts:15

___

### <a id="difftype" name="difftype"></a> diffType

• **diffType**: `string`

whether the output is diff or patch

#### Defined in

base/repository/repo-download-pull-diff-or-patch.ts:13

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the pull request to get

#### Defined in

base/repository/repo-download-pull-diff-or-patch.ts:11

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

base/repository/repo-download-pull-diff-or-patch.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-download-pull-diff-or-patch.ts:9
