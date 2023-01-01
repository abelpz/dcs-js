[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApiGetAnnotatedTagRequest

# Interface: RepositoryApiGetAnnotatedTagRequest

Request parameters for getAnnotatedTag operation in RepositoryApi.

**`export`**

**`interface`** RepositoryApiGetAnnotatedTagRequest

## Table of contents

### Properties

- [owner](RepositoryApiGetAnnotatedTagRequest.md#owner)
- [repo](RepositoryApiGetAnnotatedTagRequest.md#repo)
- [sha](RepositoryApiGetAnnotatedTagRequest.md#sha)

## Properties

### <a id="owner" name="owner"></a> owner

• `Readonly` **owner**: `string`

owner of the repo

**`memberof`** RepositoryApiGetAnnotatedTag

#### Defined in

[apis/repository-api.ts:12574](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12574)

___

### <a id="repo" name="repo"></a> repo

• `Readonly` **repo**: `string`

name of the repo

**`memberof`** RepositoryApiGetAnnotatedTag

#### Defined in

[apis/repository-api.ts:12581](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12581)

___

### <a id="sha" name="sha"></a> sha

• `Readonly` **sha**: `string`

sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.

**`memberof`** RepositoryApiGetAnnotatedTag

#### Defined in

[apis/repository-api.ts:12588](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/apis/repository-api.ts#L12588)
