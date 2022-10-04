/**
 * EditIssueOption options for editing an issue
 * @export
 * @interface EditIssueOption
 */

export interface EditIssueOption {
  /**
   * deprecated
   * @type {string}
   * @memberof EditIssueOption
   */
  assignee: string;
  /**
   *
   * @type {string[]}
   * @memberof EditIssueOption
   */
  assignees: string[];
  /**
   *
   * @type {string}
   * @memberof EditIssueOption
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof EditIssueOption
   */
  due_date: string;
  /**
   *
   * @type {number}
   * @memberof EditIssueOption
   */
  milestone: number;
  /**
   *
   * @type {string}
   * @memberof EditIssueOption
   */
  ref: string;
  /**
   *
   * @type {string}
   * @memberof EditIssueOption
   */
  state: string;
  /**
   *
   * @type {string}
   * @memberof EditIssueOption
   */
  title: string;
  /**
   *
   * @type {boolean}
   * @memberof EditIssueOption
   */
  unset_due_date: boolean;
}
