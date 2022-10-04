/**
 * CreatePullRequestOption options when creating a pull request
 * @export
 * @interface CreatePullRequestOption
 */

export interface CreatePullRequestOption {
  /**
   *
   * @type {string}
   * @memberof CreatePullRequestOption
   */
  assignee: string;
  /**
   *
   * @type {string[]}
   * @memberof CreatePullRequestOption
   */
  assignees: string[];
  /**
   *
   * @type {string}
   * @memberof CreatePullRequestOption
   */
  base: string;
  /**
   *
   * @type {string}
   * @memberof CreatePullRequestOption
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof CreatePullRequestOption
   */
  due_date: string;
  /**
   *
   * @type {string}
   * @memberof CreatePullRequestOption
   */
  head: string;
  /**
   *
   * @type {number[]}
   * @memberof CreatePullRequestOption
   */
  labels: number[];
  /**
   *
   * @type {number}
   * @memberof CreatePullRequestOption
   */
  milestone: number;
  /**
   *
   * @type {string}
   * @memberof CreatePullRequestOption
   */
  title: string;
}
