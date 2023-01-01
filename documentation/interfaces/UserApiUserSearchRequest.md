[dcs-js](../README.md) / [Exports](../modules.md) / UserApiUserSearchRequest

# Interface: UserApiUserSearchRequest

Request parameters for userSearch operation in UserApi.

**`export`**

**`interface`** UserApiUserSearchRequest

## Table of contents

### Properties

- [lang](UserApiUserSearchRequest.md#lang)
- [limit](UserApiUserSearchRequest.md#limit)
- [page](UserApiUserSearchRequest.md#page)
- [q](UserApiUserSearchRequest.md#q)
- [uid](UserApiUserSearchRequest.md#uid)

## Properties

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang\&#39;s are ORed.

**`memberof`** UserApiUserSearch

#### Defined in

[apis/user-api.ts:5107](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5107)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** UserApiUserSearch

#### Defined in

[apis/user-api.ts:5121](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5121)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** UserApiUserSearch

#### Defined in

[apis/user-api.ts:5114](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5114)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

keyword

**`memberof`** UserApiUserSearch

#### Defined in

[apis/user-api.ts:5093](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5093)

___

### <a id="uid" name="uid"></a> uid

• `Optional` `Readonly` **uid**: `number`

ID of the user to search for

**`memberof`** UserApiUserSearch

#### Defined in

[apis/user-api.ts:5100](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/user-api.ts#L5100)
