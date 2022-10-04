[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userUpdateOAuth2ApplicationParams

# Interface: userUpdateOAuth2ApplicationParams

[base](../modules/base.md).userUpdateOAuth2ApplicationParams

## Hierarchy

- `baseParams`

  ↳ **`userUpdateOAuth2ApplicationParams`**

## Table of contents

### Properties

- [auth](base.userUpdateOAuth2ApplicationParams.md#auth)
- [body](base.userUpdateOAuth2ApplicationParams.md#body)
- [id](base.userUpdateOAuth2ApplicationParams.md#id)
- [options](base.userUpdateOAuth2ApplicationParams.md#options)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`CreateOAuth2ApplicationOptions`](base.CreateOAuth2ApplicationOptions.md)

#### Defined in

base/user/user-update-o-auth2-application.ts:9

___

### <a id="id" name="id"></a> id

• **id**: `number`

application to be updated

#### Defined in

base/user/user-update-o-auth2-application.ts:8

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
