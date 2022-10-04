/**
 * Email an email address belonging to a user
 * @export
 * @interface Email
 */

export interface Email {
  /**
   *
   * @type {string}
   * @memberof Email
   */
  email: string;
  /**
   *
   * @type {boolean}
   * @memberof Email
   */
  primary: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Email
   */
  verified: boolean;
}
