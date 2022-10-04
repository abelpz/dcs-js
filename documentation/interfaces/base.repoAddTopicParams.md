[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoAddTopicParams

# Interface: repoAddTopicParams

[base](../modules/base.md).repoAddTopicParams

## Hierarchy

- `baseParams`

  ↳ **`repoAddTopicParams`**

## Table of contents

### Properties

- [auth](base.repoAddTopicParams.md#auth)
- [options](base.repoAddTopicParams.md#options)
- [owner](base.repoAddTopicParams.md#owner)
- [repo](base.repoAddTopicParams.md#repo)
- [topic](base.repoAddTopicParams.md#topic)

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

base/repository/repo-add-topic.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-add-topic.ts:9

___

### <a id="topic" name="topic"></a> topic

• **topic**: `string`

name of the topic to add

#### Defined in

base/repository/repo-add-topic.ts:11
