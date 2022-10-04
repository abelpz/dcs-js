[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / GetAnnotatedTagParams

# Interface: GetAnnotatedTagParams

[base](../modules/base.md).GetAnnotatedTagParams

## Hierarchy

- `baseParams`

  ↳ **`GetAnnotatedTagParams`**

## Table of contents

### Properties

- [auth](base.GetAnnotatedTagParams.md#auth)
- [options](base.GetAnnotatedTagParams.md#options)
- [owner](base.GetAnnotatedTagParams.md#owner)
- [repo](base.GetAnnotatedTagParams.md#repo)
- [sha](base.GetAnnotatedTagParams.md#sha)

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

base/repository/get-annotated-tag.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/get-annotated-tag.ts:9

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.

#### Defined in

base/repository/get-annotated-tag.ts:11
