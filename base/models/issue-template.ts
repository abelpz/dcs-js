/**
 * IssueTemplate represents an issue template for a repository
 * @export
 * @interface IssueTemplate
 */

export interface IssueTemplate {
  /**
   *
   * @type {string}
   * @memberof IssueTemplate
   */
  about: string;
  /**
   *
   * @type {string}
   * @memberof IssueTemplate
   */
  content: string;
  /**
   *
   * @type {string}
   * @memberof IssueTemplate
   */
  file_name: string;
  /**
   *
   * @type {string[]}
   * @memberof IssueTemplate
   */
  labels: string[];
  /**
   *
   * @type {string}
   * @memberof IssueTemplate
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof IssueTemplate
   */
  ref: string;
  /**
   *
   * @type {string}
   * @memberof IssueTemplate
   */
  title: string;
}
