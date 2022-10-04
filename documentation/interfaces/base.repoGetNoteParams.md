[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoGetNoteParams

# Interface: repoGetNoteParams

[base](../modules/base.md).repoGetNoteParams

## Hierarchy

- `baseParams`

  ↳ **`repoGetNoteParams`**

## Table of contents

### Properties

- [auth](base.repoGetNoteParams.md#auth)
- [options](base.repoGetNoteParams.md#options)
- [owner](base.repoGetNoteParams.md#owner)
- [repo](base.repoGetNoteParams.md#repo)
- [sha](base.repoGetNoteParams.md#sha)

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

base/repository/repo-get-note.ts:8

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-get-note.ts:10

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

a git ref or commit sha

#### Defined in

base/repository/repo-get-note.ts:12
