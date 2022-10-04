/**
 * UserSettings represents user settings
 * @export
 * @interface UserSettings
 */

export interface UserSettings {
  /**
   *
   * @type {string}
   * @memberof UserSettings
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof UserSettings
   */
  diff_view_style: string;
  /**
   *
   * @type {string}
   * @memberof UserSettings
   */
  full_name: string;
  /**
   *
   * @type {boolean}
   * @memberof UserSettings
   */
  hide_activity: boolean;
  /**
   * Privacy
   * @type {boolean}
   * @memberof UserSettings
   */
  hide_email: boolean;
  /**
   *
   * @type {string}
   * @memberof UserSettings
   */
  language: string;
  /**
   *
   * @type {string}
   * @memberof UserSettings
   */
  location: string;
  /**
   *
   * @type {string}
   * @memberof UserSettings
   */
  theme: string;
  /**
   *
   * @type {string}
   * @memberof UserSettings
   */
  website: string;
}
