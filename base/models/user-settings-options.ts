/**
 * UserSettingsOptions represents options to change user settings
 * @export
 * @interface UserSettingsOptions
 */

export interface UserSettingsOptions {
  /**
   *
   * @type {string}
   * @memberof UserSettingsOptions
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof UserSettingsOptions
   */
  diff_view_style: string;
  /**
   *
   * @type {string}
   * @memberof UserSettingsOptions
   */
  full_name: string;
  /**
   *
   * @type {boolean}
   * @memberof UserSettingsOptions
   */
  hide_activity: boolean;
  /**
   * Privacy
   * @type {boolean}
   * @memberof UserSettingsOptions
   */
  hide_email: boolean;
  /**
   *
   * @type {string}
   * @memberof UserSettingsOptions
   */
  language: string;
  /**
   *
   * @type {string}
   * @memberof UserSettingsOptions
   */
  location: string;
  /**
   *
   * @type {string}
   * @memberof UserSettingsOptions
   */
  theme: string;
  /**
   *
   * @type {string}
   * @memberof UserSettingsOptions
   */
  website: string;
}