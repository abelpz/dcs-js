[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoCreateReleaseAttachmentParams

# Interface: repoCreateReleaseAttachmentParams

[base](../modules/base.md).repoCreateReleaseAttachmentParams

## Hierarchy

- `baseParams`

  ↳ **`repoCreateReleaseAttachmentParams`**

## Table of contents

### Properties

- [attachment](base.repoCreateReleaseAttachmentParams.md#attachment)
- [auth](base.repoCreateReleaseAttachmentParams.md#auth)
- [id](base.repoCreateReleaseAttachmentParams.md#id)
- [name](base.repoCreateReleaseAttachmentParams.md#name)
- [options](base.repoCreateReleaseAttachmentParams.md#options)
- [owner](base.repoCreateReleaseAttachmentParams.md#owner)
- [repo](base.repoCreateReleaseAttachmentParams.md#repo)

## Properties

### <a id="attachment" name="attachment"></a> attachment

• **attachment**: `File`

attachment to upload

#### Defined in

base/repository/repo-create-release-attachment.ts:15

___

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the release

#### Defined in

base/repository/repo-create-release-attachment.ts:11

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

name of the attachment

#### Defined in

base/repository/repo-create-release-attachment.ts:13

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

base/repository/repo-create-release-attachment.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-create-release-attachment.ts:9
