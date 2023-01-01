[dcs-js](../README.md) / [Exports](../modules.md) / ContentsResponse

# Interface: ContentsResponse

ContentsResponse contains information about a repo\'s entry\'s (dir, file, symlink, submodule) metadata and content

**`export`**

**`interface`** ContentsResponse

## Table of contents

### Properties

- [\_links](ContentsResponse.md#_links)
- [content](ContentsResponse.md#content)
- [download\_url](ContentsResponse.md#download_url)
- [encoding](ContentsResponse.md#encoding)
- [git\_url](ContentsResponse.md#git_url)
- [html\_url](ContentsResponse.md#html_url)
- [name](ContentsResponse.md#name)
- [path](ContentsResponse.md#path)
- [sha](ContentsResponse.md#sha)
- [size](ContentsResponse.md#size)
- [submodule\_git\_url](ContentsResponse.md#submodule_git_url)
- [target](ContentsResponse.md#target)
- [type](ContentsResponse.md#type)
- [url](ContentsResponse.md#url)

## Properties

### <a id="_links" name="_links"></a> \_links

• `Optional` **\_links**: [`FileLinksResponse`](FileLinksResponse.md)

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:31](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L31)

___

### <a id="content" name="content"></a> content

• `Optional` **content**: `string`

`content` is populated when `type` is `file`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:37](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L37)

___

### <a id="download_url" name="download_url"></a> download\_url

• `Optional` **download\_url**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:43](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L43)

___

### <a id="encoding" name="encoding"></a> encoding

• `Optional` **encoding**: `string`

`encoding` is populated when `type` is `file`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:49](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L49)

___

### <a id="git_url" name="git_url"></a> git\_url

• `Optional` **git\_url**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:55](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L55)

___

### <a id="html_url" name="html_url"></a> html\_url

• `Optional` **html\_url**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:61](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L61)

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:67](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L67)

___

### <a id="path" name="path"></a> path

• `Optional` **path**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:73](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L73)

___

### <a id="sha" name="sha"></a> sha

• `Optional` **sha**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:79](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L79)

___

### <a id="size" name="size"></a> size

• `Optional` **size**: `number`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:85](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L85)

___

### <a id="submodule_git_url" name="submodule_git_url"></a> submodule\_git\_url

• `Optional` **submodule\_git\_url**: `string`

`submodule_git_url` is populated when `type` is `submodule`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:91](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L91)

___

### <a id="target" name="target"></a> target

• `Optional` **target**: `string`

`target` is populated when `type` is `symlink`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:97](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L97)

___

### <a id="type" name="type"></a> type

• `Optional` **type**: `string`

`type` will be `file`, `dir`, `symlink`, or `submodule`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:103](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L103)

___

### <a id="url" name="url"></a> url

• `Optional` **url**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:109](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/contents-response.ts#L109)
