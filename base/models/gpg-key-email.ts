/**
 * GPGKeyEmail an email attached to a GPGKey
 * @export
 * @interface GpgKeyEmail
 */

export interface GpgKeyEmail {
  /**
   *
   * @type {string}
   * @memberof GpgKeyEmail
   */
  email: string;
  /**
   *
   * @type {boolean}
   * @memberof GpgKeyEmail
   */
  verified: boolean;
}
