[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoAddCollaboratorParams

# Interface: repoAddCollaboratorParams

[base](../modules/base.md).repoAddCollaboratorParams

## Hierarchy

- `baseParams`

  ↳ **`repoAddCollaboratorParams`**

## Table of contents

### Properties

- [auth](base.repoAddCollaboratorParams.md#auth)
- [body](base.repoAddCollaboratorParams.md#body)
- [collaborator](base.repoAddCollaboratorParams.md#collaborator)
- [options](base.repoAddCollaboratorParams.md#options)
- [owner](base.repoAddCollaboratorParams.md#owner)
- [repo](base.repoAddCollaboratorParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`AddCollaboratorOption`](base.AddCollaboratorOption.md)

#### Defined in

base/repository/repo-add-collaborator.ts:13

___

### <a id="collaborator" name="collaborator"></a> collaborator

• **collaborator**: `string`

username of the collaborator to add

#### Defined in

base/repository/repo-add-collaborator.ts:12

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

base/repository/repo-add-collaborator.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-add-collaborator.ts:10
