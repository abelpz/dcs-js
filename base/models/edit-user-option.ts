/**
 * EditUserOption edit user options
 * @export
 * @interface EditUserOption
 */

export interface EditUserOption {
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  active: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  admin: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  allow_create_organization: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  allow_git_hook: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  allow_import_local: boolean;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  full_name: string;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  location: string;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  login_name: string;
  /**
   *
   * @type {number}
   * @memberof EditUserOption
   */
  max_repo_creation: number;
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  must_change_password: boolean;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  password: string;
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  prohibit_login: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditUserOption
   */
  restricted: boolean;
  /**
   *
   * @type {number}
   * @memberof EditUserOption
   */
  source_id: number;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  visibility: string;
  /**
   *
   * @type {string}
   * @memberof EditUserOption
   */
  website: string;
}
