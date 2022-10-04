[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteTopicParams

# Interface: repoDeleteTopicParams

[base](../modules/base.md).repoDeleteTopicParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteTopicParams`**

## Table of contents

### Properties

- [auth](base.repoDeleteTopicParams.md#auth)
- [options](base.repoDeleteTopicParams.md#options)
- [owner](base.repoDeleteTopicParams.md#owner)
- [repo](base.repoDeleteTopicParams.md#repo)
- [topic](base.repoDeleteTopicParams.md#topic)

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

base/repository/repo-delete-topic.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-topic.ts:9

___

### <a id="topic" name="topic"></a> topic

• **topic**: `string`

name of the topic to delete

#### Defined in

base/repository/repo-delete-topic.ts:11
