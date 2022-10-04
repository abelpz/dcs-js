/**
 * CreateUserOption create user options
 * @export
 * @interface CreateUserOption
 */

export interface CreateUserOption {
  /**
   *
   * @type {string}
   * @memberof CreateUserOption
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof CreateUserOption
   */
  full_name: string;
  /**
   *
   * @type {string}
   * @memberof CreateUserOption
   */
  login_name: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateUserOption
   */
  must_change_password: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateUserOption
   */
  password: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateUserOption
   */
  restricted: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateUserOption
   */
  send_notify: boolean;
  /**
   *
   * @type {number}
   * @memberof CreateUserOption
   */
  source_id: number;
  /**
   *
   * @type {string}
   * @memberof CreateUserOption
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof CreateUserOption
   */
  visibility: string;
}
