[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCurrentListSubscriptionsParams

# Interface: userCurrentListSubscriptionsParams

[base](../modules/base.md).userCurrentListSubscriptionsParams

## Hierarchy

- `baseParams`

  ↳ **`userCurrentListSubscriptionsParams`**

## Table of contents

### Properties

- [auth](base.userCurrentListSubscriptionsParams.md#auth)
- [limit](base.userCurrentListSubscriptionsParams.md#limit)
- [options](base.userCurrentListSubscriptionsParams.md#options)
- [page](base.userCurrentListSubscriptionsParams.md#page)

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

base/user/user-current-list-subscriptions.ts:8

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

base/user/user-current-list-subscriptions.ts:6
