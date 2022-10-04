[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteTagParams

# Interface: repoDeleteTagParams

[base](../modules/base.md).repoDeleteTagParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteTagParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteTagParams.md#auth)
- [options](base.repoDeleteTagParams.md#options)
- [owner](base.repoDeleteTagParams.md#owner)
- [repo](base.repoDeleteTagParams.md#repo)
- [tag](base.repoDeleteTagParams.md#tag)

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

base/repository/repo-delete-tag.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-tag.ts:10

___

### <a id="tag" name="tag"></a> tag

• **tag**: `string`

name of tag to delete

#### Defined in

base/repository/repo-delete-tag.ts:12
