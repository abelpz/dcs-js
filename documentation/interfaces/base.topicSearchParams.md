[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / topicSearchParams

# Interface: topicSearchParams

[base](../modules/base.md).topicSearchParams

## Hierarchy

- `baseParams`

  ↳ **`topicSearchParams`**

## Table of contents

### Properties

- [auth](base.topicSearchParams.md#auth)
- [limit](base.topicSearchParams.md#limit)
- [options](base.topicSearchParams.md#options)
- [page](base.topicSearchParams.md#page)
- [q](base.topicSearchParams.md#q)

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

base/repository/topic-search.ts:11

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

base/repository/topic-search.ts:9

___

### <a id="q" name="q"></a> q

• **q**: `string`

keywords to search

#### Defined in

base/repository/topic-search.ts:7
