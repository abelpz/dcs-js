[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueDeleteSubscriptionParams

# Interface: issueDeleteSubscriptionParams

[base](../modules/base.md).issueDeleteSubscriptionParams

## Hierarchy

- `baseParams`

  ↳ **`issueDeleteSubscriptionParams`**

## Table of contents

### Properties

- [auth](base.issueDeleteSubscriptionParams.md#auth)
- [index](base.issueDeleteSubscriptionParams.md#index)
- [options](base.issueDeleteSubscriptionParams.md#options)
- [owner](base.issueDeleteSubscriptionParams.md#owner)
- [repo](base.issueDeleteSubscriptionParams.md#repo)
- [user](base.issueDeleteSubscriptionParams.md#user)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue

#### Defined in

base/issue/issue-delete-subscription.ts:10

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

base/issue/issue-delete-subscription.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-delete-subscription.ts:8

___

### <a id="user" name="user"></a> user

• **user**: `string`

user witch unsubscribe

#### Defined in

base/issue/issue-delete-subscription.ts:12
