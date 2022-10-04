[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetReleaseByTagParams

# Interface: repoGetReleaseByTagParams

[base](../modules/base.md).repoGetReleaseByTagParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetReleaseByTagParams`**

## Table of contents

### Properties

- [auth](base.repoGetReleaseByTagParams.md#auth)
- [options](base.repoGetReleaseByTagParams.md#options)
- [owner](base.repoGetReleaseByTagParams.md#owner)
- [repo](base.repoGetReleaseByTagParams.md#repo)
- [tag](base.repoGetReleaseByTagParams.md#tag)

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

base/repository/repo-get-release-by-tag.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-release-by-tag.ts:9

___

### <a id="tag" name="tag"></a> tag

• **tag**: `string`

tag name of the release to get

#### Defined in

base/repository/repo-get-release-by-tag.ts:11
