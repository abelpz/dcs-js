[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueCheckSubscriptionParams

# Interface: issueCheckSubscriptionParams

[base](../modules/base.md).issueCheckSubscriptionParams

## Hierarchy

- `baseParams`

  ↳ **`issueCheckSubscriptionParams`**

## Table of contents

### Properties

- [auth](base.issueCheckSubscriptionParams.md#auth)
- [index](base.issueCheckSubscriptionParams.md#index)
- [options](base.issueCheckSubscriptionParams.md#options)
- [owner](base.issueCheckSubscriptionParams.md#owner)
- [repo](base.issueCheckSubscriptionParams.md#repo)

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

base/issue/issue-check-subscription.ts:11

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

base/issue/issue-check-subscription.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-check-subscription.ts:9
