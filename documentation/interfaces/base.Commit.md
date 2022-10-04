[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / Commit

# Interface: Commit

[base](../modules/base.md).Commit

Commit contains information generated from a Git commit.

**`export`**

**`interface`** Commit

## Table of contents

### Properties

- [author](base.Commit.md#author)
- [commit](base.Commit.md#commit)
- [committer](base.Commit.md#committer)
- [created](base.Commit.md#created)
- [files](base.Commit.md#files)
- [html\_url](base.Commit.md#html_url)
- [parents](base.Commit.md#parents)
- [sha](base.Commit.md#sha)
- [url](base.Commit.md#url)

## Properties

### <a id="author" name="author"></a> author

• **author**: [`User`](base.User.md)

**`memberof`** Commit

#### Defined in

base/models/commit.ts:18

___

### <a id="commit" name="commit"></a> commit

• **commit**: [`RepoCommit`](base.RepoCommit.md)

**`memberof`** Commit

#### Defined in

base/models/commit.ts:24

___

### <a id="committer" name="committer"></a> committer

• **committer**: [`User`](base.User.md)

**`memberof`** Commit

#### Defined in

base/models/commit.ts:30

___

### <a id="created" name="created"></a> created

• **created**: `string`

**`memberof`** Commit

#### Defined in

base/models/commit.ts:36

___

### <a id="files" name="files"></a> files

• **files**: [`CommitAffectedFiles`](base.CommitAffectedFiles.md)[]

**`memberof`** Commit

#### Defined in

base/models/commit.ts:42

___

### <a id="html_url" name="html_url"></a> html\_url

• **html\_url**: `string`

**`memberof`** Commit

#### Defined in

base/models/commit.ts:48

___

### <a id="parents" name="parents"></a> parents

• **parents**: [`CommitMeta`](base.CommitMeta.md)[]

**`memberof`** Commit

#### Defined in

base/models/commit.ts:54

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

**`memberof`** Commit

#### Defined in

base/models/commit.ts:60

___

### <a id="url" name="url"></a> url

• **url**: `string`

**`memberof`** Commit

#### Defined in

base/models/commit.ts:66
