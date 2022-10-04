/**
 * PullRequestMeta PR info if an issue is a PR
 * @export
 * @interface PullRequestMeta
 */

export interface PullRequestMeta {
  /**
   *
   * @type {boolean}
   * @memberof PullRequestMeta
   */
  merged: boolean;
  /**
   *
   * @type {string}
   * @memberof PullRequestMeta
   */
  merged_at: string;
}
