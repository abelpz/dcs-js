/**
 * EditPullRequestOption options when modify pull request
 * @export
 * @interface EditPullRequestOption
 */

export interface EditPullRequestOption {
  /**
   *
   * @type {boolean}
   * @memberof EditPullRequestOption
   */
  allow_maintainer_edit: boolean;
  /**
   *
   * @type {string}
   * @memberof EditPullRequestOption
   */
  assignee: string;
  /**
   *
   * @type {string[]}
   * @memberof EditPullRequestOption
   */
  assignees: string[];
  /**
   *
   * @type {string}
   * @memberof EditPullRequestOption
   */
  base: string;
  /**
   *
   * @type {string}
   * @memberof EditPullRequestOption
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof EditPullRequestOption
   */
  due_date: string;
  /**
   *
   * @type {number[]}
   * @memberof EditPullRequestOption
   */
  labels: number[];
  /**
   *
   * @type {number}
   * @memberof EditPullRequestOption
   */
  milestone: number;
  /**
   *
   * @type {string}
   * @memberof EditPullRequestOption
   */
  state: string;
  /**
   *
   * @type {string}
   * @memberof EditPullRequestOption
   */
  title: string;
  /**
   *
   * @type {boolean}
   * @memberof EditPullRequestOption
   */
  unset_due_date: boolean;
}
