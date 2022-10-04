/**
 * CommitMeta contains meta information of a commit in terms of API.
 * @export
 * @interface CommitMeta
 */

export interface CommitMeta {
  /**
   *
   * @type {string}
   * @memberof CommitMeta
   */
  created: string;
  /**
   *
   * @type {string}
   * @memberof CommitMeta
   */
  sha: string;
  /**
   *
   * @type {string}
   * @memberof CommitMeta
   */
  url: string;
}
