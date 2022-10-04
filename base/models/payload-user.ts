/**
 * PayloadUser represents the author or committer of a commit
 * @export
 * @interface PayloadUser
 */

export interface PayloadUser {
  /**
   *
   * @type {string}
   * @memberof PayloadUser
   */
  email: string;
  /**
   * Full name of the commit author
   * @type {string}
   * @memberof PayloadUser
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof PayloadUser
   */
  username: string;
}
