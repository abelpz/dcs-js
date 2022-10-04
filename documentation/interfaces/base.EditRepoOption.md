[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / EditRepoOption

# Interface: EditRepoOption

[base](../modules/base.md).EditRepoOption

EditRepoOption options when editing a repository&#39;s properties

**`export`**

**`interface`** EditRepoOption

## Table of contents

### Properties

- [allow\_manual\_merge](base.EditRepoOption.md#allow_manual_merge)
- [allow\_merge\_commits](base.EditRepoOption.md#allow_merge_commits)
- [allow\_rebase](base.EditRepoOption.md#allow_rebase)
- [allow\_rebase\_explicit](base.EditRepoOption.md#allow_rebase_explicit)
- [allow\_squash\_merge](base.EditRepoOption.md#allow_squash_merge)
- [archived](base.EditRepoOption.md#archived)
- [autodetect\_manual\_merge](base.EditRepoOption.md#autodetect_manual_merge)
- [default\_branch](base.EditRepoOption.md#default_branch)
- [default\_delete\_branch\_after\_merge](base.EditRepoOption.md#default_delete_branch_after_merge)
- [default\_merge\_style](base.EditRepoOption.md#default_merge_style)
- [description](base.EditRepoOption.md#description)
- [enable\_prune](base.EditRepoOption.md#enable_prune)
- [external\_tracker](base.EditRepoOption.md#external_tracker)
- [external\_wiki](base.EditRepoOption.md#external_wiki)
- [has\_issues](base.EditRepoOption.md#has_issues)
- [has\_projects](base.EditRepoOption.md#has_projects)
- [has\_pull\_requests](base.EditRepoOption.md#has_pull_requests)
- [has\_wiki](base.EditRepoOption.md#has_wiki)
- [ignore\_whitespace\_conflicts](base.EditRepoOption.md#ignore_whitespace_conflicts)
- [internal\_tracker](base.EditRepoOption.md#internal_tracker)
- [mirror\_interval](base.EditRepoOption.md#mirror_interval)
- [name](base.EditRepoOption.md#name)
- [private](base.EditRepoOption.md#private)
- [template](base.EditRepoOption.md#template)
- [website](base.EditRepoOption.md#website)

## Properties

### <a id="allow_manual_merge" name="allow_manual_merge"></a> allow\_manual\_merge

• **allow\_manual\_merge**: `boolean`

either `true` to allow mark pr as merged manually, or `false` to prevent it. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:17

___

### <a id="allow_merge_commits" name="allow_merge_commits"></a> allow\_merge\_commits

• **allow\_merge\_commits**: `boolean`

either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:23

___

### <a id="allow_rebase" name="allow_rebase"></a> allow\_rebase

• **allow\_rebase**: `boolean`

either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:29

___

### <a id="allow_rebase_explicit" name="allow_rebase_explicit"></a> allow\_rebase\_explicit

• **allow\_rebase\_explicit**: `boolean`

either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:35

___

### <a id="allow_squash_merge" name="allow_squash_merge"></a> allow\_squash\_merge

• **allow\_squash\_merge**: `boolean`

either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:41

___

### <a id="archived" name="archived"></a> archived

• **archived**: `boolean`

set to `true` to archive this repository.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:47

___

### <a id="autodetect_manual_merge" name="autodetect_manual_merge"></a> autodetect\_manual\_merge

• **autodetect\_manual\_merge**: `boolean`

either `true` to enable AutodetectManualMerge, or `false` to prevent it. `has_pull_requests` must be `true`, Note: In some special cases, misjudgments can occur.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:53

___

### <a id="default_branch" name="default_branch"></a> default\_branch

• **default\_branch**: `string`

sets the default branch for this repository.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:59

___

### <a id="default_delete_branch_after_merge" name="default_delete_branch_after_merge"></a> default\_delete\_branch\_after\_merge

• **default\_delete\_branch\_after\_merge**: `boolean`

set to `true` to delete pr branch after merge by default

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:65

___

### <a id="default_merge_style" name="default_merge_style"></a> default\_merge\_style

• **default\_merge\_style**: `string`

set to a merge style to be used by this repository: &quot;merge&quot;, &quot;rebase&quot;, &quot;rebase-merge&quot;, or &quot;squash&quot;. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:71

___

### <a id="description" name="description"></a> description

• **description**: `string`

a short description of the repository.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:77

___

### <a id="enable_prune" name="enable_prune"></a> enable\_prune

• **enable\_prune**: `boolean`

enable prune - remove obsolete remote-tracking references

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:83

___

### <a id="external_tracker" name="external_tracker"></a> external\_tracker

• **external\_tracker**: [`ExternalTracker`](base.ExternalTracker.md)

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:89

___

### <a id="external_wiki" name="external_wiki"></a> external\_wiki

• **external\_wiki**: [`ExternalWiki`](base.ExternalWiki.md)

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:95

___

### <a id="has_issues" name="has_issues"></a> has\_issues

• **has\_issues**: `boolean`

either `true` to enable issues for this repository or `false` to disable them.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:101

___

### <a id="has_projects" name="has_projects"></a> has\_projects

• **has\_projects**: `boolean`

either `true` to enable project unit, or `false` to disable them.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:107

___

### <a id="has_pull_requests" name="has_pull_requests"></a> has\_pull\_requests

• **has\_pull\_requests**: `boolean`

either `true` to allow pull requests, or `false` to prevent pull request.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:113

___

### <a id="has_wiki" name="has_wiki"></a> has\_wiki

• **has\_wiki**: `boolean`

either `true` to enable the wiki for this repository or `false` to disable it.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:119

___

### <a id="ignore_whitespace_conflicts" name="ignore_whitespace_conflicts"></a> ignore\_whitespace\_conflicts

• **ignore\_whitespace\_conflicts**: `boolean`

either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:125

___

### <a id="internal_tracker" name="internal_tracker"></a> internal\_tracker

• **internal\_tracker**: [`InternalTracker`](base.InternalTracker.md)

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:131

___

### <a id="mirror_interval" name="mirror_interval"></a> mirror\_interval

• **mirror\_interval**: `string`

set to a string like `8h30m0s` to set the mirror interval time

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:137

___

### <a id="name" name="name"></a> name

• **name**: `string`

name of the repository

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:143

___

### <a id="private" name="private"></a> private

• **private**: `boolean`

either `true` to make the repository private or `false` to make it public.
Note: you will get a 422 error if the organization restricts changing repository visibility to organization
owners and a non-owner tries to change the value of private.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:151

___

### <a id="template" name="template"></a> template

• **template**: `boolean`

either `true` to make this repository a template or `false` to make it a normal repository

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:157

___

### <a id="website" name="website"></a> website

• **website**: `string`

a URL with more information about the repository.

**`memberof`** EditRepoOption

#### Defined in

base/models/edit-repo-option.ts:163
