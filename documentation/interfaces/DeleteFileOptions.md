[dcs-js](../README.md) / [Exports](../modules.md) / DeleteFileOptions

# Interface: DeleteFileOptions

DeleteFileOptions options for deleting files (used for other File structs below) Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

**`export`**

**`interface`** DeleteFileOptions

## Table of contents

### Properties

- [author](DeleteFileOptions.md#author)
- [branch](DeleteFileOptions.md#branch)
- [committer](DeleteFileOptions.md#committer)
- [dates](DeleteFileOptions.md#dates)
- [message](DeleteFileOptions.md#message)
- [new\_branch](DeleteFileOptions.md#new_branch)
- [sha](DeleteFileOptions.md#sha)
- [signoff](DeleteFileOptions.md#signoff)

## Properties

### <a id="author" name="author"></a> author

• `Optional` **author**: [`Identity`](Identity.md)

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:34](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L34)

___

### <a id="branch" name="branch"></a> branch

• `Optional` **branch**: `string`

branch (optional) to base this file from. if not given, the default branch is used

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:40](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L40)

___

### <a id="committer" name="committer"></a> committer

• `Optional` **committer**: [`Identity`](Identity.md)

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:46](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L46)

___

### <a id="dates" name="dates"></a> dates

• `Optional` **dates**: [`CommitDateOptions`](CommitDateOptions.md)

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:52](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L52)

___

### <a id="message" name="message"></a> message

• `Optional` **message**: `string`

message (optional) for the commit of this file. if not supplied, a default message will be used

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:58](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L58)

___

### <a id="new_branch" name="new_branch"></a> new\_branch

• `Optional` **new\_branch**: `string`

new_branch (optional) will make a new branch from `branch` before creating the file

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:64](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L64)

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha is the SHA for the file that already exists

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:70](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L70)

___

### <a id="signoff" name="signoff"></a> signoff

• `Optional` **signoff**: `boolean`

Add a Signed-off-by trailer by the committer at the end of the commit log message.

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:76](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/delete-file-options.ts#L76)
