/**
 * GeneralAPISettings contains global api settings exposed by it
 * @export
 * @interface GeneralApiSettings
 */

export interface GeneralApiSettings {
  /**
   *
   * @type {number}
   * @memberof GeneralApiSettings
   */
  default_git_trees_per_page: number;
  /**
   *
   * @type {number}
   * @memberof GeneralApiSettings
   */
  default_max_blob_size: number;
  /**
   *
   * @type {number}
   * @memberof GeneralApiSettings
   */
  default_paging_num: number;
  /**
   *
   * @type {number}
   * @memberof GeneralApiSettings
   */
  max_response_items: number;
}
