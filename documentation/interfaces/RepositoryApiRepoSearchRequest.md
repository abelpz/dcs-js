[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiRepoSearchRequest

# Interface: RepositoryApiRepoSearchRequest

Request parameters for repoSearch operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiRepoSearchRequest

## Table of contents

### Properties

- [\_private](RepositoryApiRepoSearchRequest.md#_private)
- [archived](RepositoryApiRepoSearchRequest.md#archived)
- [book](RepositoryApiRepoSearchRequest.md#book)
- [exclusive](RepositoryApiRepoSearchRequest.md#exclusive)
- [includeDesc](RepositoryApiRepoSearchRequest.md#includedesc)
- [includeMetadata](RepositoryApiRepoSearchRequest.md#includemetadata)
- [isPrivate](RepositoryApiRepoSearchRequest.md#isprivate)
- [lang](RepositoryApiRepoSearchRequest.md#lang)
- [limit](RepositoryApiRepoSearchRequest.md#limit)
- [mode](RepositoryApiRepoSearchRequest.md#mode)
- [order](RepositoryApiRepoSearchRequest.md#order)
- [owner](RepositoryApiRepoSearchRequest.md#owner)
- [page](RepositoryApiRepoSearchRequest.md#page)
- [priorityOwnerId](RepositoryApiRepoSearchRequest.md#priorityownerid)
- [q](RepositoryApiRepoSearchRequest.md#q)
- [repo](RepositoryApiRepoSearchRequest.md#repo)
- [sort](RepositoryApiRepoSearchRequest.md#sort)
- [starredBy](RepositoryApiRepoSearchRequest.md#starredby)
- [subject](RepositoryApiRepoSearchRequest.md#subject)
- [teamId](RepositoryApiRepoSearchRequest.md#teamid)
- [template](RepositoryApiRepoSearchRequest.md#template)
- [topic](RepositoryApiRepoSearchRequest.md#topic)
- [uid](RepositoryApiRepoSearchRequest.md#uid)

## Properties

### <a id="_private" name="_private"></a> \_private

• `Optional` `Readonly` **\_private**: `boolean`

include private repositories this user has access to (defaults to true)

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16137](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16137)

___

### <a id="archived" name="archived"></a> archived

• `Optional` `Readonly` **archived**: `boolean`

show only archived, non-archived or all repositories (defaults to all)

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16158](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16158)

___

### <a id="book" name="book"></a> book

• `Optional` `Readonly` **book**: `string`

book (project id) that exist in a resource. If the resource contains the the book, its repository will be included in the results. Multiple book\&#39;s are ORed.

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16207](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16207)

___

### <a id="exclusive" name="exclusive"></a> exclusive

• `Optional` `Readonly` **exclusive**: `boolean`

if &#x60;uid&#x60; is given, search only for repos that the user owns

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16172](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16172)

___

### <a id="includedesc" name="includedesc"></a> includeDesc

• `Optional` `Readonly` **includeDesc**: `boolean`

include search of keyword within repository description (defaults to false)

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16102](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16102)

___

### <a id="includemetadata" name="includemetadata"></a> includeMetadata

• `Optional` `Readonly` **includeMetadata**: `boolean`

if false, q value will only be searched for in the repo name, owner, description and title and subject; otherwise search all values of the manifest file. (defaults to false)

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16214](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16214)

___

### <a id="isprivate" name="isprivate"></a> isPrivate

• `Optional` `Readonly` **isPrivate**: `boolean`

show only pubic, private or all repositories (defaults to all)

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16144](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16144)

___

### <a id="lang" name="lang"></a> lang

• `Optional` `Readonly` **lang**: `string`

If the repo is a resource of the given language(s), the repo will be in the results. Multiple lang\&#39;s are ORed.

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16193](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16193)

___

### <a id="limit" name="limit"></a> limit

• `Optional` `Readonly` **limit**: `number`

page size of results

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16242](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16242)

___

### <a id="mode" name="mode"></a> mode

• `Optional` `Readonly` **mode**: `string`

type of repository to search for. Supported values are \&quot;fork\&quot;, \&quot;source\&quot;, \&quot;mirror\&quot; and \&quot;collaborative\&quot;

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16165](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16165)

___

### <a id="order" name="order"></a> order

• `Optional` `Readonly` **order**: `string`

sort order, either \&quot;asc\&quot; (ascending) or \&quot;desc\&quot; (descending). Default is \&quot;asc\&quot;, ignored if \&quot;sort\&quot; is not specified.

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16228](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16228)

___

### <a id="owner" name="owner"></a> owner

• `Optional` `Readonly` **owner**: `string`

owner of the repo. Multiple owner\&#39;s are ORed.

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16186](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16186)

___

### <a id="page" name="page"></a> page

• `Optional` `Readonly` **page**: `number`

page number of results to return (1-based)

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16235](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16235)

___

### <a id="priorityownerid" name="priorityownerid"></a> priorityOwnerId

• `Optional` `Readonly` **priorityOwnerId**: `number`

repo owner to prioritize in the results

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16116](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16116)

___

### <a id="q" name="q"></a> q

• `Optional` `Readonly` **q**: `string`

keyword

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16088](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16088)

___

### <a id="repo" name="repo"></a> repo

• `Optional` `Readonly` **repo**: `string`

name of the repo. Multiple repo\&#39;s are ORed.

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16179](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16179)

___

### <a id="sort" name="sort"></a> sort

• `Optional` `Readonly` **sort**: `string`

sort repos by attribute. Supported values are \&quot;alpha\&quot;, \&quot;created\&quot;, \&quot;updated\&quot;, \&quot;size\&quot;, and \&quot;id\&quot;. Default is \&quot;alpha\&quot;

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16221](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16221)

___

### <a id="starredby" name="starredby"></a> starredBy

• `Optional` `Readonly` **starredBy**: `number`

search only for repos that the user with the given id has starred

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16130](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16130)

___

### <a id="subject" name="subject"></a> subject

• `Optional` `Readonly` **subject**: `string`

resource subject. Multiple subject\&#39;s are ORed.

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16200](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16200)

___

### <a id="teamid" name="teamid"></a> teamId

• `Optional` `Readonly` **teamId**: `number`

search only for repos that belong to the given team id

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16123](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16123)

___

### <a id="template" name="template"></a> template

• `Optional` `Readonly` **template**: `boolean`

include template repositories this user has access to (defaults to true)

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16151](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16151)

___

### <a id="topic" name="topic"></a> topic

• `Optional` `Readonly` **topic**: `boolean`

Limit search to repositories with keyword as topic

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16095](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16095)

___

### <a id="uid" name="uid"></a> uid

• `Optional` `Readonly` **uid**: `number`

search only for repos that the user with the given id owns or contributes to

**`memberof`** RepositoryApiRepoSearch

#### Defined in

[apis/repository-api.ts:16109](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L16109)
