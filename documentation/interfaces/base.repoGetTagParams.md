[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetTagParams

# Interface: repoGetTagParams

[base](../modules/base.md).repoGetTagParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetTagParams`**

## Table of contents

### Properties

- [auth](base.repoGetTagParams.md#auth)
- [options](base.repoGetTagParams.md#options)
- [owner](base.repoGetTagParams.md#owner)
- [repo](base.repoGetTagParams.md#repo)
- [tag](base.repoGetTagParams.md#tag)

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

base/repository/repo-get-tag.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-tag.ts:9

___

### <a id="tag" name="tag"></a> tag

• **tag**: `string`

name of tag

#### Defined in

base/repository/repo-get-tag.ts:11
