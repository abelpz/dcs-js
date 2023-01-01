[dcs-js](../README.md) / [Exports](../modules.md) / GPGKey

# Interface: GPGKey

GPGKey a user GPG key to sign commit and tag in repository

**`export`**

**`interface`** GPGKey

## Table of contents

### Properties

- [can\_certify](GPGKey.md#can_certify)
- [can\_encrypt\_comms](GPGKey.md#can_encrypt_comms)
- [can\_encrypt\_storage](GPGKey.md#can_encrypt_storage)
- [can\_sign](GPGKey.md#can_sign)
- [created\_at](GPGKey.md#created_at)
- [emails](GPGKey.md#emails)
- [expires\_at](GPGKey.md#expires_at)
- [id](GPGKey.md#id)
- [key\_id](GPGKey.md#key_id)
- [primary\_key\_id](GPGKey.md#primary_key_id)
- [public\_key](GPGKey.md#public_key)
- [subkeys](GPGKey.md#subkeys)
- [verified](GPGKey.md#verified)

## Properties

### <a id="can_certify" name="can_certify"></a> can\_certify

• `Optional` **can\_certify**: `boolean`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:31](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L31)

___

### <a id="can_encrypt_comms" name="can_encrypt_comms"></a> can\_encrypt\_comms

• `Optional` **can\_encrypt\_comms**: `boolean`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:37](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L37)

___

### <a id="can_encrypt_storage" name="can_encrypt_storage"></a> can\_encrypt\_storage

• `Optional` **can\_encrypt\_storage**: `boolean`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:43](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L43)

___

### <a id="can_sign" name="can_sign"></a> can\_sign

• `Optional` **can\_sign**: `boolean`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:49](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L49)

___

### <a id="created_at" name="created_at"></a> created\_at

• `Optional` **created\_at**: `string`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:55](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L55)

___

### <a id="emails" name="emails"></a> emails

• `Optional` **emails**: [`GPGKeyEmail`](GPGKeyEmail.md)[]

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:61](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L61)

___

### <a id="expires_at" name="expires_at"></a> expires\_at

• `Optional` **expires\_at**: `string`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:67](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L67)

___

### <a id="id" name="id"></a> id

• `Optional` **id**: `number`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:73](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L73)

___

### <a id="key_id" name="key_id"></a> key\_id

• `Optional` **key\_id**: `string`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:79](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L79)

___

### <a id="primary_key_id" name="primary_key_id"></a> primary\_key\_id

• `Optional` **primary\_key\_id**: `string`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:85](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L85)

___

### <a id="public_key" name="public_key"></a> public\_key

• `Optional` **public\_key**: `string`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:91](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L91)

___

### <a id="subkeys" name="subkeys"></a> subkeys

• `Optional` **subkeys**: [`GPGKey`](GPGKey.md)[]

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:97](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L97)

___

### <a id="verified" name="verified"></a> verified

• `Optional` **verified**: `boolean`

**`memberof`** GPGKey

#### Defined in

[models/gpgkey.ts:103](https://github.com/unfoldingWord/dcs-js/blob/b29eb7a/models/gpgkey.ts#L103)
