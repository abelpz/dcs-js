/**
 * Attachment a generic attachment
 * @export
 * @interface Attachment
 */

export interface Attachment {
  /**
   *
   * @type {string}
   * @memberof Attachment
   */
  browser_download_url: string;
  /**
   *
   * @type {string}
   * @memberof Attachment
   */
  created_at: string;
  /**
   *
   * @type {number}
   * @memberof Attachment
   */
  download_count: number;
  /**
   *
   * @type {number}
   * @memberof Attachment
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Attachment
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof Attachment
   */
  size: number;
  /**
   *
   * @type {string}
   * @memberof Attachment
   */
  uuid: string;
}
