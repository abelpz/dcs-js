[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / DeleteFileOptions

# Interface: DeleteFileOptions

[base](../modules/base.md).DeleteFileOptions

DeleteFileOptions options for deleting files (used for other File structs below)
Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

**`export`**

**`interface`** DeleteFileOptions

## Table of contents

### Properties

- [author](base.DeleteFileOptions.md#author)
- [branch](base.DeleteFileOptions.md#branch)
- [committer](base.DeleteFileOptions.md#committer)
- [dates](base.DeleteFileOptions.md#dates)
- [message](base.DeleteFileOptions.md#message)
- [new\_branch](base.DeleteFileOptions.md#new_branch)
- [sha](base.DeleteFileOptions.md#sha)
- [signoff](base.DeleteFileOptions.md#signoff)

## Properties

### <a id="author" name="author"></a> author

• **author**: [`Identity`](base.Identity.md)

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:17

___

### <a id="branch" name="branch"></a> branch

• **branch**: `string`

branch (optional) to base this file from. if not given, the default branch is used

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:23

___

### <a id="committer" name="committer"></a> committer

• **committer**: [`Identity`](base.Identity.md)

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:29

___

### <a id="dates" name="dates"></a> dates

• **dates**: [`CommitDateOptions`](base.CommitDateOptions.md)

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:35

___

### <a id="message" name="message"></a> message

• **message**: `string`

message (optional) for the commit of this file. if not supplied, a default message will be used

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:41

___

### <a id="new_branch" name="new_branch"></a> new\_branch

• **new\_branch**: `string`

new_branch (optional) will make a new branch from `branch` before creating the file

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:47

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha is the SHA for the file that already exists

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:53

___

### <a id="signoff" name="signoff"></a> signoff

• **signoff**: `boolean`

Add a Signed-off-by trailer by the committer at the end of the commit log message.

**`memberof`** DeleteFileOptions

#### Defined in

base/models/delete-file-options.ts:59
