[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoTrackedTimesParams

# Interface: repoTrackedTimesParams

[base](../modules/base.md).repoTrackedTimesParams

## Hierarchy

- `baseParams`

  ↳ **`repoTrackedTimesParams`**

## Table of contents

### Properties

- [auth](base.repoTrackedTimesParams.md#auth)
- [before](base.repoTrackedTimesParams.md#before)
- [limit](base.repoTrackedTimesParams.md#limit)
- [options](base.repoTrackedTimesParams.md#options)
- [owner](base.repoTrackedTimesParams.md#owner)
- [page](base.repoTrackedTimesParams.md#page)
- [repo](base.repoTrackedTimesParams.md#repo)
- [since](base.repoTrackedTimesParams.md#since)
- [user](base.repoTrackedTimesParams.md#user)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="before" name="before"></a> before

• `Optional` **before**: `string`

Only show times updated before the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/repository/repo-tracked-times.ts:16

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-tracked-times.ts:20

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

### <a id="owner" name="owner"></a> owner

• **owner**: `string`

owner of the repo

#### Defined in

base/repository/repo-tracked-times.ts:8

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-tracked-times.ts:18

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-tracked-times.ts:10

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `string`

Only show times updated after the given time. This is a timestamp in RFC 3339 format

#### Defined in

base/repository/repo-tracked-times.ts:14

___

### <a id="user" name="user"></a> user

• `Optional` **user**: `string`

optional filter by user (available for issue managers)

#### Defined in

base/repository/repo-tracked-times.ts:12
