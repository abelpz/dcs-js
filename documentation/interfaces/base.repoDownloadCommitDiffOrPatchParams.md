[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDownloadCommitDiffOrPatchParams

# Interface: repoDownloadCommitDiffOrPatchParams

[base](../modules/base.md).repoDownloadCommitDiffOrPatchParams

## Hierarchy

- `baseParams`

  ↳ **`repoDownloadCommitDiffOrPatchParams`**

## Table of contents

### Properties

- [auth](base.repoDownloadCommitDiffOrPatchParams.md#auth)
- [diffType](base.repoDownloadCommitDiffOrPatchParams.md#difftype)
- [options](base.repoDownloadCommitDiffOrPatchParams.md#options)
- [owner](base.repoDownloadCommitDiffOrPatchParams.md#owner)
- [repo](base.repoDownloadCommitDiffOrPatchParams.md#repo)
- [sha](base.repoDownloadCommitDiffOrPatchParams.md#sha)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="difftype" name="difftype"></a> diffType

• **diffType**: `string`

whether the output is diff or patch

#### Defined in

base/repository/repo-download-commit-diff-or-patch.ts:13

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

base/repository/repo-download-commit-diff-or-patch.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-download-commit-diff-or-patch.ts:9

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

SHA of the commit to get

#### Defined in

base/repository/repo-download-commit-diff-or-patch.ts:11
