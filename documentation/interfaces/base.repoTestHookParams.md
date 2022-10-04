[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoTestHookParams

# Interface: repoTestHookParams

[base](../modules/base.md).repoTestHookParams

## Hierarchy

- `baseParams`

  ↳ **`repoTestHookParams`**

## Table of contents

### Properties

- [auth](base.repoTestHookParams.md#auth)
- [id](base.repoTestHookParams.md#id)
- [options](base.repoTestHookParams.md#options)
- [owner](base.repoTestHookParams.md#owner)
- [repo](base.repoTestHookParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the hook to test

#### Defined in

base/repository/repo-test-hook.ts:10

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

base/repository/repo-test-hook.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-test-hook.ts:8
