[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteCollaboratorParams

# Interface: repoDeleteCollaboratorParams

[base](../modules/base.md).repoDeleteCollaboratorParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteCollaboratorParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteCollaboratorParams.md#auth)
- [collaborator](base.repoDeleteCollaboratorParams.md#collaborator)
- [options](base.repoDeleteCollaboratorParams.md#options)
- [owner](base.repoDeleteCollaboratorParams.md#owner)
- [repo](base.repoDeleteCollaboratorParams.md#repo)

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

username of the collaborator to delete

#### Defined in

base/repository/repo-delete-collaborator.ts:11

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

base/repository/repo-delete-collaborator.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-collaborator.ts:9
