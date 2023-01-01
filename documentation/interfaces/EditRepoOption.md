[dcs-js](../README.md) / [Exports](../modules.md) / EditRepoOption

# Interface: EditRepoOption

EditRepoOption options when editing a repository\'s properties

**`export`**

**`interface`** EditRepoOption

## Table of contents

### Properties

- [allow\_manual\_merge](EditRepoOption.md#allow_manual_merge)
- [allow\_merge\_commits](EditRepoOption.md#allow_merge_commits)
- [allow\_rebase](EditRepoOption.md#allow_rebase)
- [allow\_rebase\_explicit](EditRepoOption.md#allow_rebase_explicit)
- [allow\_rebase\_update](EditRepoOption.md#allow_rebase_update)
- [allow\_squash\_merge](EditRepoOption.md#allow_squash_merge)
- [archived](EditRepoOption.md#archived)
- [autodetect\_manual\_merge](EditRepoOption.md#autodetect_manual_merge)
- [default\_branch](EditRepoOption.md#default_branch)
- [default\_delete\_branch\_after\_merge](EditRepoOption.md#default_delete_branch_after_merge)
- [default\_merge\_style](EditRepoOption.md#default_merge_style)
- [description](EditRepoOption.md#description)
- [enable\_prune](EditRepoOption.md#enable_prune)
- [external\_tracker](EditRepoOption.md#external_tracker)
- [external\_wiki](EditRepoOption.md#external_wiki)
- [has\_issues](EditRepoOption.md#has_issues)
- [has\_projects](EditRepoOption.md#has_projects)
- [has\_pull\_requests](EditRepoOption.md#has_pull_requests)
- [has\_wiki](EditRepoOption.md#has_wiki)
- [ignore\_whitespace\_conflicts](EditRepoOption.md#ignore_whitespace_conflicts)
- [internal\_tracker](EditRepoOption.md#internal_tracker)
- [mirror\_interval](EditRepoOption.md#mirror_interval)
- [name](EditRepoOption.md#name)
- [private](EditRepoOption.md#private)
- [template](EditRepoOption.md#template)
- [website](EditRepoOption.md#website)

## Properties

### <a id="allow_manual_merge" name="allow_manual_merge"></a> allow\_manual\_merge

• `Optional` **allow\_manual\_merge**: `boolean`

either `true` to allow mark pr as merged manually, or `false` to prevent it. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:37](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L37)

___

### <a id="allow_merge_commits" name="allow_merge_commits"></a> allow\_merge\_commits

• `Optional` **allow\_merge\_commits**: `boolean`

either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:43](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L43)

___

### <a id="allow_rebase" name="allow_rebase"></a> allow\_rebase

• `Optional` **allow\_rebase**: `boolean`

either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:49](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L49)

___

### <a id="allow_rebase_explicit" name="allow_rebase_explicit"></a> allow\_rebase\_explicit

• `Optional` **allow\_rebase\_explicit**: `boolean`

either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:55](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L55)

___

### <a id="allow_rebase_update" name="allow_rebase_update"></a> allow\_rebase\_update

• `Optional` **allow\_rebase\_update**: `boolean`

either `true` to allow updating pull request branch by rebase, or `false` to prevent it. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:61](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L61)

___

### <a id="allow_squash_merge" name="allow_squash_merge"></a> allow\_squash\_merge

• `Optional` **allow\_squash\_merge**: `boolean`

either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:67](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L67)

___

### <a id="archived" name="archived"></a> archived

• `Optional` **archived**: `boolean`

set to `true` to archive this repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:73](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L73)

___

### <a id="autodetect_manual_merge" name="autodetect_manual_merge"></a> autodetect\_manual\_merge

• `Optional` **autodetect\_manual\_merge**: `boolean`

either `true` to enable AutodetectManualMerge, or `false` to prevent it. `has_pull_requests` must be `true`, Note: In some special cases, misjudgments can occur.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:79](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L79)

___

### <a id="default_branch" name="default_branch"></a> default\_branch

• `Optional` **default\_branch**: `string`

sets the default branch for this repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:85](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L85)

___

### <a id="default_delete_branch_after_merge" name="default_delete_branch_after_merge"></a> default\_delete\_branch\_after\_merge

• `Optional` **default\_delete\_branch\_after\_merge**: `boolean`

set to `true` to delete pr branch after merge by default

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:91](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L91)

___

### <a id="default_merge_style" name="default_merge_style"></a> default\_merge\_style

• `Optional` **default\_merge\_style**: `string`

set to a merge style to be used by this repository: \"merge\", \"rebase\", \"rebase-merge\", or \"squash\". `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:97](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L97)

___

### <a id="description" name="description"></a> description

• `Optional` **description**: `string`

a short description of the repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:103](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L103)

___

### <a id="enable_prune" name="enable_prune"></a> enable\_prune

• `Optional` **enable\_prune**: `boolean`

enable prune - remove obsolete remote-tracking references

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:109](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L109)

___

### <a id="external_tracker" name="external_tracker"></a> external\_tracker

• `Optional` **external\_tracker**: [`ExternalTracker`](ExternalTracker.md)

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:115](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L115)

___

### <a id="external_wiki" name="external_wiki"></a> external\_wiki

• `Optional` **external\_wiki**: [`ExternalWiki`](ExternalWiki.md)

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:121](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L121)

___

### <a id="has_issues" name="has_issues"></a> has\_issues

• `Optional` **has\_issues**: `boolean`

either `true` to enable issues for this repository or `false` to disable them.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:127](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L127)

___

### <a id="has_projects" name="has_projects"></a> has\_projects

• `Optional` **has\_projects**: `boolean`

either `true` to enable project unit, or `false` to disable them.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:133](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L133)

___

### <a id="has_pull_requests" name="has_pull_requests"></a> has\_pull\_requests

• `Optional` **has\_pull\_requests**: `boolean`

either `true` to allow pull requests, or `false` to prevent pull request.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:139](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L139)

___

### <a id="has_wiki" name="has_wiki"></a> has\_wiki

• `Optional` **has\_wiki**: `boolean`

either `true` to enable the wiki for this repository or `false` to disable it.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:145](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L145)

___

### <a id="ignore_whitespace_conflicts" name="ignore_whitespace_conflicts"></a> ignore\_whitespace\_conflicts

• `Optional` **ignore\_whitespace\_conflicts**: `boolean`

either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:151](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L151)

___

### <a id="internal_tracker" name="internal_tracker"></a> internal\_tracker

• `Optional` **internal\_tracker**: [`InternalTracker`](InternalTracker.md)

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:157](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L157)

___

### <a id="mirror_interval" name="mirror_interval"></a> mirror\_interval

• `Optional` **mirror\_interval**: `string`

set to a string like `8h30m0s` to set the mirror interval time

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:163](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L163)

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

name of the repository

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:169](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L169)

___

### <a id="private" name="private"></a> private

• `Optional` **private**: `boolean`

either `true` to make the repository private or `false` to make it public. Note: you will get a 422 error if the organization restricts changing repository visibility to organization owners and a non-owner tries to change the value of private.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:175](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L175)

___

### <a id="template" name="template"></a> template

• `Optional` **template**: `boolean`

either `true` to make this repository a template or `false` to make it a normal repository

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:181](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L181)

___

### <a id="website" name="website"></a> website

• `Optional` **website**: `string`

a URL with more information about the repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:187](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/edit-repo-option.ts#L187)
