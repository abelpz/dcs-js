/**
 * CreateIssueOption options to create one issue
 * @export
 * @interface CreateIssueOption
 */

export interface CreateIssueOption {
  /**
   * deprecated
   * @type {string}
   * @memberof CreateIssueOption
   */
  assignee: string;
  /**
   *
   * @type {string[]}
   * @memberof CreateIssueOption
   */
  assignees: string[];
  /**
   *
   * @type {string}
   * @memberof CreateIssueOption
   */
  body: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateIssueOption
   */
  closed: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateIssueOption
   */
  due_date: string;
  /**
   * list of label ids
   * @type {number[]}
   * @memberof CreateIssueOption
   */
  labels: number[];
  /**
   * milestone id
   * @type {number}
   * @memberof CreateIssueOption
   */
  milestone: number;
  /**
   *
   * @type {string}
   * @memberof CreateIssueOption
   */
  ref: string;
  /**
   *
   * @type {string}
   * @memberof CreateIssueOption
   */
  title: string;
}
