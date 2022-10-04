[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoEditReleaseAttachmentParams

# Interface: repoEditReleaseAttachmentParams

[base](../modules/base.md).repoEditReleaseAttachmentParams

## Hierarchy

- `baseParams`

  ↳ **`repoEditReleaseAttachmentParams`**

## Table of contents

### Properties

- [attachmentId](base.repoEditReleaseAttachmentParams.md#attachmentid)
- [auth](base.repoEditReleaseAttachmentParams.md#auth)
- [body](base.repoEditReleaseAttachmentParams.md#body)
- [id](base.repoEditReleaseAttachmentParams.md#id)
- [options](base.repoEditReleaseAttachmentParams.md#options)
- [owner](base.repoEditReleaseAttachmentParams.md#owner)
- [repo](base.repoEditReleaseAttachmentParams.md#repo)

## Properties

### <a id="attachmentid" name="attachmentid"></a> attachmentId

• **attachmentId**: `number`

id of the attachment to edit

#### Defined in

base/repository/repo-edit-release-attachment.ts:13

___

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="body" name="body"></a> body

• **body**: [`EditAttachmentOptions`](base.EditAttachmentOptions.md)

#### Defined in

base/repository/repo-edit-release-attachment.ts:14

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the release

#### Defined in

base/repository/repo-edit-release-attachment.ts:11

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

base/repository/repo-edit-release-attachment.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-edit-release-attachment.ts:9
