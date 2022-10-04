[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListKeysParams

# Interface: repoListKeysParams

[base](../modules/base.md).repoListKeysParams

## Hierarchy

- `baseParams`

  ↳ **`repoListKeysParams`**

## Table of contents

### Properties

- [auth](base.repoListKeysParams.md#auth)
- [fingerprint](base.repoListKeysParams.md#fingerprint)
- [keyId](base.repoListKeysParams.md#keyid)
- [limit](base.repoListKeysParams.md#limit)
- [options](base.repoListKeysParams.md#options)
- [owner](base.repoListKeysParams.md#owner)
- [page](base.repoListKeysParams.md#page)
- [repo](base.repoListKeysParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="fingerprint" name="fingerprint"></a> fingerprint

• `Optional` **fingerprint**: `string`

fingerprint of the key

#### Defined in

base/repository/repo-list-keys.ts:12

___

### <a id="keyid" name="keyid"></a> keyId

• `Optional` **keyId**: `number`

the key_id to search for

#### Defined in

base/repository/repo-list-keys.ts:10

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-list-keys.ts:16

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

base/repository/repo-list-keys.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-keys.ts:14

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-keys.ts:8
