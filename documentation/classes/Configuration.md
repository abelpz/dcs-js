[dcs-js](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [baseOptions](Configuration.md#baseoptions)
- [basePath](Configuration.md#basepath)
- [formDataCtor](Configuration.md#formdatactor)
- [password](Configuration.md#password)
- [username](Configuration.md#username)

### Methods

- [isJsonMime](Configuration.md#isjsonmime)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Configuration**(`param?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[configuration.ts:77](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L77)

## Properties

### <a id="accesstoken" name="accesstoken"></a> accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `Promise`<`string`\>

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

#### Defined in

[configuration.ts:53](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L53)

___

### <a id="apikey" name="apikey"></a> apiKey

• `Optional` **apiKey**: `string` \| `Promise`<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`<`string`\>

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

#### Defined in

[configuration.ts:32](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L32)

___

### <a id="baseoptions" name="baseoptions"></a> baseOptions

• `Optional` **baseOptions**: `any`

base options for axios calls

**`memberof`** Configuration

#### Defined in

[configuration.ts:67](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L67)

___

### <a id="basepath" name="basepath"></a> basePath

• `Optional` **basePath**: `string`

override base path

**`memberof`** Configuration

#### Defined in

[configuration.ts:60](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L60)

___

### <a id="formdatactor" name="formdatactor"></a> formDataCtor

• `Optional` **formDataCtor**: () => `any`

#### Type declaration

• **new Configuration**()

The FormData constructor that will be used to create multipart form data
requests. You can inject this here so that execution environments that
do not support the FormData class can still run the generated client.

#### Defined in

[configuration.ts:75](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L75)

___

### <a id="password" name="password"></a> password

• `Optional` **password**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[configuration.ts:46](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L46)

___

### <a id="username" name="username"></a> username

• `Optional` **username**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[configuration.ts:39](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L39)

## Methods

### <a id="isjsonmime" name="isjsonmime"></a> isJsonMime

▸ **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

#### Defined in

[configuration.ts:97](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/configuration.ts#L97)
