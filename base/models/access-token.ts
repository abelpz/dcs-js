/**
 * AccessToken represents an API access token.
 * @export
 * @interface AccessToken
 */

export interface AccessToken {
  /**
   *
   * @type {number}
   * @memberof AccessToken
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof AccessToken
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof AccessToken
   */
  sha1: string;
  /**
   *
   * @type {string}
   * @memberof AccessToken
   */
  token_last_eight: string;
}
