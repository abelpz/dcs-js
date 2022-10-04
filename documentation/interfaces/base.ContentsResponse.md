[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / ContentsResponse

# Interface: ContentsResponse

[base](../modules/base.md).ContentsResponse

ContentsResponse contains information about a repo&#39;s entry&#39;s (dir, file, symlink, submodule) metadata and content

**`export`**

**`interface`** ContentsResponse

## Table of contents

### Properties

- [\_links](base.ContentsResponse.md#_links)
- [content](base.ContentsResponse.md#content)
- [download\_url](base.ContentsResponse.md#download_url)
- [encoding](base.ContentsResponse.md#encoding)
- [git\_url](base.ContentsResponse.md#git_url)
- [html\_url](base.ContentsResponse.md#html_url)
- [name](base.ContentsResponse.md#name)
- [path](base.ContentsResponse.md#path)
- [sha](base.ContentsResponse.md#sha)
- [size](base.ContentsResponse.md#size)
- [submodule\_git\_url](base.ContentsResponse.md#submodule_git_url)
- [target](base.ContentsResponse.md#target)
- [type](base.ContentsResponse.md#type)
- [url](base.ContentsResponse.md#url)

## Properties

### <a id="_links" name="_links"></a> \_links

• **\_links**: [`FileLinksResponse`](base.FileLinksResponse.md)

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:15

___

### <a id="content" name="content"></a> content

• **content**: `string`

`content` is populated when `type` is `file`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:21

___

### <a id="download_url" name="download_url"></a> download\_url

• **download\_url**: `string`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:27

___

### <a id="encoding" name="encoding"></a> encoding

• **encoding**: `string`

`encoding` is populated when `type` is `file`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:33

___

### <a id="git_url" name="git_url"></a> git\_url

• **git\_url**: `string`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:39

___

### <a id="html_url" name="html_url"></a> html\_url

• **html\_url**: `string`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:45

___

### <a id="name" name="name"></a> name

• **name**: `string`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:51

___

### <a id="path" name="path"></a> path

• **path**: `string`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:57

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:63

___

### <a id="size" name="size"></a> size

• **size**: `number`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:69

___

### <a id="submodule_git_url" name="submodule_git_url"></a> submodule\_git\_url

• **submodule\_git\_url**: `string`

`submodule_git_url` is populated when `type` is `submodule`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:75

___

### <a id="target" name="target"></a> target

• **target**: `string`

`target` is populated when `type` is `symlink`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:81

___

### <a id="type" name="type"></a> type

• **type**: `string`

`type` will be `file`, `dir`, `symlink`, or `submodule`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:87

___

### <a id="url" name="url"></a> url

• **url**: `string`

**`memberof`** ContentsResponse

#### Defined in

base/models/contents-response.ts:93
