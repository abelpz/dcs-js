[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetContentsListParams

# Interface: repoGetContentsListParams

[base](../modules/base.md).repoGetContentsListParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetContentsListParams`**

## Table of contents

### Properties

- [auth](base.repoGetContentsListParams.md#auth)
- [options](base.repoGetContentsListParams.md#options)
- [owner](base.repoGetContentsListParams.md#owner)
- [ref](base.repoGetContentsListParams.md#ref)
- [repo](base.repoGetContentsListParams.md#repo)

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

base/repository/repo-get-contents-list.ts:7

___

### <a id="ref" name="ref"></a> ref

• `Optional` **ref**: `string`

The name of the commit/branch/tag. Default the repository’s default branch (usually master)

#### Defined in

base/repository/repo-get-contents-list.ts:11

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-contents-list.ts:9
