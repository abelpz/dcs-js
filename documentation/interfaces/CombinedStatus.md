[dcs-js](../README.md) / [Exports](../modules.md) / CombinedStatus

# Interface: CombinedStatus

CombinedStatus holds the combined state of several statuses for a single commit

**`export`**

**`interface`** CombinedStatus

## Table of contents

### Properties

- [commit\_url](CombinedStatus.md#commit_url)
- [repository](CombinedStatus.md#repository)
- [sha](CombinedStatus.md#sha)
- [state](CombinedStatus.md#state)
- [statuses](CombinedStatus.md#statuses)
- [total\_count](CombinedStatus.md#total_count)
- [url](CombinedStatus.md#url)

## Properties

### <a id="commit_url" name="commit_url"></a> commit\_url

• `Optional` **commit\_url**: `string`

**`memberof`** CombinedStatus

#### Defined in

[models/combined-status.ts:34](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/combined-status.ts#L34)

___

### <a id="repository" name="repository"></a> repository

• `Optional` **repository**: [`Repository`](Repository.md)

**`memberof`** CombinedStatus

#### Defined in

[models/combined-status.ts:40](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/combined-status.ts#L40)

___

### <a id="sha" name="sha"></a> sha

• `Optional` **sha**: `string`

**`memberof`** CombinedStatus

#### Defined in

[models/combined-status.ts:46](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/combined-status.ts#L46)

___

### <a id="state" name="state"></a> state

• `Optional` **state**: `string`

CommitStatusState holds the state of a CommitStatus It can be \"pending\", \"success\", \"error\", \"failure\", and \"warning\"

**`memberof`** CombinedStatus

#### Defined in

[models/combined-status.ts:52](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/combined-status.ts#L52)

___

### <a id="statuses" name="statuses"></a> statuses

• `Optional` **statuses**: [`CommitStatus`](CommitStatus.md)[]

**`memberof`** CombinedStatus

#### Defined in

[models/combined-status.ts:58](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/combined-status.ts#L58)

___

### <a id="total_count" name="total_count"></a> total\_count

• `Optional` **total\_count**: `number`

**`memberof`** CombinedStatus

#### Defined in

[models/combined-status.ts:64](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/combined-status.ts#L64)

___

### <a id="url" name="url"></a> url

• `Optional` **url**: `string`

**`memberof`** CombinedStatus

#### Defined in

[models/combined-status.ts:70](https://github.com/unfoldingWord/dcs-js/blob/dd84989/models/combined-status.ts#L70)
