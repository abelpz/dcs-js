/**
 * WatchInfo represents an API watch status of one repository
 * @export
 * @interface WatchInfo
 */

export interface WatchInfo {
  /**
   *
   * @type {string}
   * @memberof WatchInfo
   */
  created_at: string;
  /**
   *
   * @type {boolean}
   * @memberof WatchInfo
   */
  ignored: boolean;
  /**
   *
   * @type {unknown}
   * @memberof WatchInfo
   */
  reason: unknown;
  /**
   *
   * @type {string}
   * @memberof WatchInfo
   */
  repository_url: string;
  /**
   *
   * @type {boolean}
   * @memberof WatchInfo
   */
  subscribed: boolean;
  /**
   *
   * @type {string}
   * @memberof WatchInfo
   */
  url: string;
}
