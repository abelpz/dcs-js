/**
 * GeneralUISettings contains global ui settings exposed by API
 * @export
 * @interface GeneralUiSettings
 */

export interface GeneralUiSettings {
  /**
   *
   * @type {string[]}
   * @memberof GeneralUiSettings
   */
  allowed_reactions: string[];
  /**
   *
   * @type {string[]}
   * @memberof GeneralUiSettings
   */
  custom_emojis: string[];
  /**
   *
   * @type {string}
   * @memberof GeneralUiSettings
   */
  default_theme: string;
}
