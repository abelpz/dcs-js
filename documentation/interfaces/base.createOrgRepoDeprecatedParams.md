[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / createOrgRepoDeprecatedParams

# Interface: createOrgRepoDeprecatedParams

[base](../modules/base.md).createOrgRepoDeprecatedParams

## Hierarchy

- `baseParams`

  ↳ **`createOrgRepoDeprecatedParams`**

## Table of contents

### Properties

- [auth](base.createOrgRepoDeprecatedParams.md#auth)
- [body](base.createOrgRepoDeprecatedParams.md#body)
- [options](base.createOrgRepoDeprecatedParams.md#options)
- [org](base.createOrgRepoDeprecatedParams.md#org)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateRepoOption`](base.CreateRepoOption.md)

#### Defined in

base/organization/create-org-repo-deprecated.ts:10

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

### <a id="org" name="org"></a> org

• **org**: `string`

name of organization

#### Defined in

base/organization/create-org-repo-deprecated.ts:9
