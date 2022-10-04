[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userGetStopWatchesParams

# Interface: userGetStopWatchesParams

[base](../modules/base.md).userGetStopWatchesParams

## Hierarchy

- `baseParams`

  ↳ **`userGetStopWatchesParams`**

## Table of contents

### Properties

- [auth](base.userGetStopWatchesParams.md#auth)
- [limit](base.userGetStopWatchesParams.md#limit)
- [options](base.userGetStopWatchesParams.md#options)
- [page](base.userGetStopWatchesParams.md#page)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/user/user-get-stop-watches.ts:8

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

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/user/user-get-stop-watches.ts:6
