[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoMirrorSyncParams

# Interface: repoMirrorSyncParams

[base](../modules/base.md).repoMirrorSyncParams

## Hierarchy

- `baseParams`

  ↳ **`repoMirrorSyncParams`**

## Table of contents

### Properties

- [auth](base.repoMirrorSyncParams.md#auth)
- [options](base.repoMirrorSyncParams.md#options)
- [owner](base.repoMirrorSyncParams.md#owner)
- [repo](base.repoMirrorSyncParams.md#repo)

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

owner of the repo to sync

#### Defined in

base/repository/repo-mirror-sync.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo to sync

#### Defined in

base/repository/repo-mirror-sync.ts:9
