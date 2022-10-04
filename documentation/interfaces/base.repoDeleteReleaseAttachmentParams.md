[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoDeleteReleaseAttachmentParams

# Interface: repoDeleteReleaseAttachmentParams

[base](../modules/base.md).repoDeleteReleaseAttachmentParams

## Hierarchy

- `baseParams`

  ↳ **`repoDeleteReleaseAttachmentParams`**

## Table of contents

### Properties

- [attachmentId](base.repoDeleteReleaseAttachmentParams.md#attachmentid)
- [auth](base.repoDeleteReleaseAttachmentParams.md#auth)
- [id](base.repoDeleteReleaseAttachmentParams.md#id)
- [options](base.repoDeleteReleaseAttachmentParams.md#options)
- [owner](base.repoDeleteReleaseAttachmentParams.md#owner)
- [repo](base.repoDeleteReleaseAttachmentParams.md#repo)

## Properties

### <a id="attachmentid" name="attachmentid"></a> attachmentId

• **attachmentId**: `number`

id of the attachment to delete

#### Defined in

base/repository/repo-delete-release-attachment.ts:12

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

base/repository/repo-delete-release-attachment.ts:10

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

base/repository/repo-delete-release-attachment.ts:6

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-delete-release-attachment.ts:8
