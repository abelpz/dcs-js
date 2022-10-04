/**
 * CreateGPGKeyOption options create user GPG key
 * @export
 * @interface CreateGpgKeyOption
 */

export interface CreateGpgKeyOption {
  /**
   * An armored GPG key to add
   * @type {string}
   * @memberof CreateGpgKeyOption
   */
  armored_public_key: string;
  /**
   *
   * @type {string}
   * @memberof CreateGpgKeyOption
   */
  armored_signature: string;
}
