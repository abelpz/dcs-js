[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / UpdateFileOptions

# Interface: UpdateFileOptions

[base](../modules/base.md).UpdateFileOptions

UpdateFileOptions options for updating files
Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

**`export`**

**`interface`** UpdateFileOptions

## Table of contents

### Properties

- [author](base.UpdateFileOptions.md#author)
- [branch](base.UpdateFileOptions.md#branch)
- [committer](base.UpdateFileOptions.md#committer)
- [content](base.UpdateFileOptions.md#content)
- [dates](base.UpdateFileOptions.md#dates)
- [from\_path](base.UpdateFileOptions.md#from_path)
- [message](base.UpdateFileOptions.md#message)
- [new\_branch](base.UpdateFileOptions.md#new_branch)
- [sha](base.UpdateFileOptions.md#sha)
- [signoff](base.UpdateFileOptions.md#signoff)

## Properties

### <a id="author" name="author"></a> author

• **author**: [`Identity`](base.Identity.md)

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:17

___

### <a id="branch" name="branch"></a> branch

• **branch**: `string`

branch (optional) to base this file from. if not given, the default branch is used

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:23

___

### <a id="committer" name="committer"></a> committer

• **committer**: [`Identity`](base.Identity.md)

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:29

___

### <a id="content" name="content"></a> content

• **content**: `string`

content must be base64 encoded

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:35

___

### <a id="dates" name="dates"></a> dates

• **dates**: [`CommitDateOptions`](base.CommitDateOptions.md)

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:41

___

### <a id="from_path" name="from_path"></a> from\_path

• **from\_path**: `string`

from_path (optional) is the path of the original file which will be movedrenamed to the path in the URL

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:47

___

### <a id="message" name="message"></a> message

• **message**: `string`

message (optional) for the commit of this file. if not supplied, a default message will be used

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:53

___

### <a id="new_branch" name="new_branch"></a> new\_branch

• **new\_branch**: `string`

new_branch (optional) will make a new branch from `branch` before creating the file

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:59

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha is the SHA for the file that already exists

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:65

___

### <a id="signoff" name="signoff"></a> signoff

• **signoff**: `boolean`

Add a Signed-off-by trailer by the committer at the end of the commit log message.

**`memberof`** UpdateFileOptions

#### Defined in

base/models/update-file-options.ts:71
