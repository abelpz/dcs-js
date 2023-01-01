[dcs-js](../README.md) / [Exports](../modules.md) / UpdateFileOptions

# Interface: UpdateFileOptions

UpdateFileOptions options for updating files Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

**`export`**

**`interface`** UpdateFileOptions

## Table of contents

### Properties

- [author](UpdateFileOptions.md#author)
- [branch](UpdateFileOptions.md#branch)
- [committer](UpdateFileOptions.md#committer)
- [content](UpdateFileOptions.md#content)
- [dates](UpdateFileOptions.md#dates)
- [from\_path](UpdateFileOptions.md#from_path)
- [message](UpdateFileOptions.md#message)
- [new\_branch](UpdateFileOptions.md#new_branch)
- [sha](UpdateFileOptions.md#sha)
- [signoff](UpdateFileOptions.md#signoff)

## Properties

### <a id="author" name="author"></a> author

• `Optional` **author**: [`Identity`](Identity.md)

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:34](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L34)

___

### <a id="branch" name="branch"></a> branch

• `Optional` **branch**: `string`

branch (optional) to base this file from. if not given, the default branch is used

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:40](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L40)

___

### <a id="committer" name="committer"></a> committer

• `Optional` **committer**: [`Identity`](Identity.md)

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:46](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L46)

___

### <a id="content" name="content"></a> content

• **content**: `string`

content must be base64 encoded

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:52](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L52)

___

### <a id="dates" name="dates"></a> dates

• `Optional` **dates**: [`CommitDateOptions`](CommitDateOptions.md)

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:58](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L58)

___

### <a id="from_path" name="from_path"></a> from\_path

• `Optional` **from\_path**: `string`

from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:64](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L64)

___

### <a id="message" name="message"></a> message

• `Optional` **message**: `string`

message (optional) for the commit of this file. if not supplied, a default message will be used

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:70](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L70)

___

### <a id="new_branch" name="new_branch"></a> new\_branch

• `Optional` **new\_branch**: `string`

new_branch (optional) will make a new branch from `branch` before creating the file

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:76](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L76)

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha is the SHA for the file that already exists

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:82](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L82)

___

### <a id="signoff" name="signoff"></a> signoff

• `Optional` **signoff**: `boolean`

Add a Signed-off-by trailer by the committer at the end of the commit log message.

**`memberof`** UpdateFileOptions

#### Defined in

[models/update-file-options.ts:88](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/update-file-options.ts#L88)
