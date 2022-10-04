[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / CreateFileOptions

# Interface: CreateFileOptions

[base](../modules/base.md).CreateFileOptions

CreateFileOptions options for creating files
Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

**`export`**

**`interface`** CreateFileOptions

## Table of contents

### Properties

- [author](base.CreateFileOptions.md#author)
- [branch](base.CreateFileOptions.md#branch)
- [committer](base.CreateFileOptions.md#committer)
- [content](base.CreateFileOptions.md#content)
- [dates](base.CreateFileOptions.md#dates)
- [message](base.CreateFileOptions.md#message)
- [new\_branch](base.CreateFileOptions.md#new_branch)
- [signoff](base.CreateFileOptions.md#signoff)

## Properties

### <a id="author" name="author"></a> author

• **author**: [`Identity`](base.Identity.md)

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:17

___

### <a id="branch" name="branch"></a> branch

• **branch**: `string`

branch (optional) to base this file from. if not given, the default branch is used

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:23

___

### <a id="committer" name="committer"></a> committer

• **committer**: [`Identity`](base.Identity.md)

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:29

___

### <a id="content" name="content"></a> content

• **content**: `string`

content must be base64 encoded

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:35

___

### <a id="dates" name="dates"></a> dates

• **dates**: [`CommitDateOptions`](base.CommitDateOptions.md)

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:41

___

### <a id="message" name="message"></a> message

• **message**: `string`

message (optional) for the commit of this file. if not supplied, a default message will be used

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:47

___

### <a id="new_branch" name="new_branch"></a> new\_branch

• **new\_branch**: `string`

new_branch (optional) will make a new branch from `branch` before creating the file

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:53

___

### <a id="signoff" name="signoff"></a> signoff

• **signoff**: `boolean`

Add a Signed-off-by trailer by the committer at the end of the commit log message.

**`memberof`** CreateFileOptions

#### Defined in

base/models/create-file-options.ts:59
