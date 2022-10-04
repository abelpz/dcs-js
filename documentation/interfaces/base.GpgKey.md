[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / GpgKey

# Interface: GpgKey

[base](../modules/base.md).GpgKey

GPGKey a user GPG key to sign commit and tag in repository

**`export`**

**`interface`** GpgKey

## Table of contents

### Properties

- [can\_certify](base.GpgKey.md#can_certify)
- [can\_encrypt\_comms](base.GpgKey.md#can_encrypt_comms)
- [can\_encrypt\_storage](base.GpgKey.md#can_encrypt_storage)
- [can\_sign](base.GpgKey.md#can_sign)
- [created\_at](base.GpgKey.md#created_at)
- [emails](base.GpgKey.md#emails)
- [expires\_at](base.GpgKey.md#expires_at)
- [id](base.GpgKey.md#id)
- [key\_id](base.GpgKey.md#key_id)
- [primary\_key\_id](base.GpgKey.md#primary_key_id)
- [public\_key](base.GpgKey.md#public_key)
- [subkeys](base.GpgKey.md#subkeys)
- [verified](base.GpgKey.md#verified)

## Properties

### <a id="can_certify" name="can_certify"></a> can\_certify

• **can\_certify**: `boolean`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:15

___

### <a id="can_encrypt_comms" name="can_encrypt_comms"></a> can\_encrypt\_comms

• **can\_encrypt\_comms**: `boolean`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:21

___

### <a id="can_encrypt_storage" name="can_encrypt_storage"></a> can\_encrypt\_storage

• **can\_encrypt\_storage**: `boolean`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:27

___

### <a id="can_sign" name="can_sign"></a> can\_sign

• **can\_sign**: `boolean`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:33

___

### <a id="created_at" name="created_at"></a> created\_at

• **created\_at**: `string`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:39

___

### <a id="emails" name="emails"></a> emails

• **emails**: [`GpgKeyEmail`](base.GpgKeyEmail.md)[]

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:45

___

### <a id="expires_at" name="expires_at"></a> expires\_at

• **expires\_at**: `string`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:51

___

### <a id="id" name="id"></a> id

• **id**: `number`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:57

___

### <a id="key_id" name="key_id"></a> key\_id

• **key\_id**: `string`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:63

___

### <a id="primary_key_id" name="primary_key_id"></a> primary\_key\_id

• **primary\_key\_id**: `string`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:69

___

### <a id="public_key" name="public_key"></a> public\_key

• **public\_key**: `string`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:75

___

### <a id="subkeys" name="subkeys"></a> subkeys

• **subkeys**: [`GpgKey`](base.GpgKey.md)[]

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:81

___

### <a id="verified" name="verified"></a> verified

• **verified**: `boolean`

**`memberof`** GpgKey

#### Defined in

base/models/gpg-key.ts:87
