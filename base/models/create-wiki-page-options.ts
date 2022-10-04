/**
 * CreateWikiPageOptions form for creating wiki
 * @export
 * @interface CreateWikiPageOptions
 */

export interface CreateWikiPageOptions {
  /**
   * content must be base64 encoded
   * @type {string}
   * @memberof CreateWikiPageOptions
   */
  content_base64: string;
  /**
   * optional commit message summarizing the change
   * @type {string}
   * @memberof CreateWikiPageOptions
   */
  message: string;
  /**
   * page title. leave empty to keep unchanged
   * @type {string}
   * @memberof CreateWikiPageOptions
   */
  title: string;
}
