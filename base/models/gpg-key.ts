import { GpgKeyEmail } from "./gpg-key-email";

/**
 * GPGKey a user GPG key to sign commit and tag in repository
 * @export
 * @interface GpgKey
 */

export interface GpgKey {
  /**
   *
   * @type {boolean}
   * @memberof GpgKey
   */
  can_certify: boolean;
  /**
   *
   * @type {boolean}
   * @memberof GpgKey
   */
  can_encrypt_comms: boolean;
  /**
   *
   * @type {boolean}
   * @memberof GpgKey
   */
  can_encrypt_storage: boolean;
  /**
   *
   * @type {boolean}
   * @memberof GpgKey
   */
  can_sign: boolean;
  /**
   *
   * @type {string}
   * @memberof GpgKey
   */
  created_at: string;
  /**
   *
   * @type {GpgKeyEmail[]}
   * @memberof GpgKey
   */
  emails: GpgKeyEmail[];
  /**
   *
   * @type {string}
   * @memberof GpgKey
   */
  expires_at: string;
  /**
   *
   * @type {number}
   * @memberof GpgKey
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof GpgKey
   */
  key_id: string;
  /**
   *
   * @type {string}
   * @memberof GpgKey
   */
  primary_key_id: string;
  /**
   *
   * @type {string}
   * @memberof GpgKey
   */
  public_key: string;
  /**
   *
   * @type {GpgKey[]}
   * @memberof GpgKey
   */
  subkeys: GpgKey[];
  /**
   *
   * @type {boolean}
   * @memberof GpgKey
   */
  verified: boolean;
}
