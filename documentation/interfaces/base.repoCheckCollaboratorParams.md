[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCheckCollaboratorParams

# Interface: repoCheckCollaboratorParams

[base](../modules/base.md).repoCheckCollaboratorParams

## Hierarchy

- `baseParams`

  ↳ **`repoCheckCollaboratorParams`**

## Table of contents

### Properties

- [auth](base.repoCheckCollaboratorParams.md#auth)
- [collaborator](base.repoCheckCollaboratorParams.md#collaborator)
- [options](base.repoCheckCollaboratorParams.md#options)
- [owner](base.repoCheckCollaboratorParams.md#owner)
- [repo](base.repoCheckCollaboratorParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="collaborator" name="collaborator"></a> collaborator

• **collaborator**: `string`

username of the collaborator

#### Defined in

base/repository/repo-check-collaborator.ts:12

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

base/repository/repo-check-collaborator.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-check-collaborator.ts:10
