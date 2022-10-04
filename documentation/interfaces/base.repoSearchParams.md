[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoSearchParams

# Interface: repoSearchParams

[base](../modules/base.md).repoSearchParams

## Hierarchy

- `baseParams`

  ↳ **`repoSearchParams`**

## Table of contents

### Properties

- [\_private](base.repoSearchParams.md#_private)
- [archived](base.repoSearchParams.md#archived)
- [auth](base.repoSearchParams.md#auth)
- [book](base.repoSearchParams.md#book)
- [exclusive](base.repoSearchParams.md#exclusive)
- [includeDesc](base.repoSearchParams.md#includedesc)
- [includeMetadata](base.repoSearchParams.md#includemetadata)
- [isPrivate](base.repoSearchParams.md#isprivate)
- [lang](base.repoSearchParams.md#lang)
- [limit](base.repoSearchParams.md#limit)
- [mode](base.repoSearchParams.md#mode)
- [options](base.repoSearchParams.md#options)
- [order](base.repoSearchParams.md#order)
- [owner](base.repoSearchParams.md#owner)
- [page](base.repoSearchParams.md#page)
- [priorityOwnerId](base.repoSearchParams.md#priorityownerid)
- [q](base.repoSearchParams.md#q)
- [repo](base.repoSearchParams.md#repo)
- [sort](base.repoSearchParams.md#sort)
- [starredBy](base.repoSearchParams.md#starredby)
- [subject](base.repoSearchParams.md#subject)
- [teamId](base.repoSearchParams.md#teamid)
- [template](base.repoSearchParams.md#template)
- [topic](base.repoSearchParams.md#topic)
- [uid](base.repoSearchParams.md#uid)

## Properties

### <a id="_private" name="_private"></a> \_private

• `Optional` **\_private**: `boolean`

include private repositories this user has access to (defaults to true)

#### Defined in

base/repository/repo-search.ts:21

___

### <a id="archived" name="archived"></a> archived

• `Optional` **archived**: `boolean`

show only archived, non-archived or all repositories (defaults to all)

#### Defined in

base/repository/repo-search.ts:27

___

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="book" name="book"></a> book

• `Optional` **book**: `string`

book (project id) that exist in a resource. If the resource contains the the book, its repository will be included in the results. Multiple book&#39;s are ORed.

#### Defined in

base/repository/repo-search.ts:41

___

### <a id="exclusive" name="exclusive"></a> exclusive

• `Optional` **exclusive**: `boolean`

if `uid` is given, search only for repos that the user owns

#### Defined in

base/repository/repo-search.ts:31

___

### <a id="includedesc" name="includedesc"></a> includeDesc

• `Optional` **includeDesc**: `boolean`

include search of keyword within repository description (defaults to false)

#### Defined in

base/repository/repo-search.ts:11

___

### <a id="includemetadata" name="includemetadata"></a> includeMetadata

• `Optional` **includeMetadata**: `boolean`

if false, q value will only be searched for in the repo name, owner, description and title and subject; otherwise search all values of the manifest file. (defaults to false)

#### Defined in

base/repository/repo-search.ts:43

___

### <a id="isprivate" name="isprivate"></a> isPrivate

• `Optional` **isPrivate**: `boolean`

show only pubic, private or all repositories (defaults to all)

#### Defined in

base/repository/repo-search.ts:23

___

### <a id="lang" name="lang"></a> lang

• `Optional` **lang**: `string`

If the repo is a resource of the given language(s), the repo will be in the results. Multiple lang&#39;s are ORed.

#### Defined in

base/repository/repo-search.ts:37

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-search.ts:51

___

### <a id="mode" name="mode"></a> mode

• `Optional` **mode**: `string`

type of repository to search for. Supported values are &quot;fork&quot;, &quot;source&quot;, &quot;mirror&quot; and &quot;collaborative&quot;

#### Defined in

base/repository/repo-search.ts:29

___

### <a id="options" name="options"></a> options

• `Optional` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basePath?` | `string` |
| `headers?` | { `[key: string]`: `any`;  } |
| `query?` | { `[key: string]`: `any`;  } |

#### Inherited from

baseParams.options

#### Defined in

base/utils.ts:3

___

### <a id="order" name="order"></a> order

• `Optional` **order**: `string`

sort order, either &quot;asc&quot; (ascending) or &quot;desc&quot; (descending). Default is &quot;asc&quot;, ignored if &quot;sort&quot; is not specified.

#### Defined in

base/repository/repo-search.ts:47

___

### <a id="owner" name="owner"></a> owner

• `Optional` **owner**: `string`

owner of the repo. Multiple owner&#39;s are ORed.

#### Defined in

base/repository/repo-search.ts:35

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-search.ts:49

___

### <a id="priorityownerid" name="priorityownerid"></a> priorityOwnerId

• `Optional` **priorityOwnerId**: `number`

repo owner to prioritize in the results

#### Defined in

base/repository/repo-search.ts:15

___

### <a id="q" name="q"></a> q

• `Optional` **q**: `string`

keyword

#### Defined in

base/repository/repo-search.ts:7

___

### <a id="repo" name="repo"></a> repo

• `Optional` **repo**: `string`

name of the repo. Multiple repo&#39;s are ORed.

#### Defined in

base/repository/repo-search.ts:33

___

### <a id="sort" name="sort"></a> sort

• `Optional` **sort**: `string`

sort repos by attribute. Supported values are &quot;alpha&quot;, &quot;created&quot;, &quot;updated&quot;, &quot;size&quot;, and &quot;id&quot;. Default is &quot;alpha&quot;

#### Defined in

base/repository/repo-search.ts:45

___

### <a id="starredby" name="starredby"></a> starredBy

• `Optional` **starredBy**: `number`

search only for repos that the user with the given id has starred

#### Defined in

base/repository/repo-search.ts:19

___

### <a id="subject" name="subject"></a> subject

• `Optional` **subject**: `string`

resource subject. Multiple subject&#39;s are ORed.

#### Defined in

base/repository/repo-search.ts:39

___

### <a id="teamid" name="teamid"></a> teamId

• `Optional` **teamId**: `number`

search only for repos that belong to the given team id

#### Defined in

base/repository/repo-search.ts:17

___

### <a id="template" name="template"></a> template

• `Optional` **template**: `boolean`

include template repositories this user has access to (defaults to true)

#### Defined in

base/repository/repo-search.ts:25

___

### <a id="topic" name="topic"></a> topic

• `Optional` **topic**: `boolean`

Limit search to repositories with keyword as topic

#### Defined in

base/repository/repo-search.ts:9

___

### <a id="uid" name="uid"></a> uid

• `Optional` **uid**: `number`

search only for repos that the user with the given id owns or contributes to

#### Defined in

base/repository/repo-search.ts:13
