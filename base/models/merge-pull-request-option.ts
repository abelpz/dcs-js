/**
 * MergePullRequestForm form for merging Pull Request
 * @export
 * @interface MergePullRequestOption
 */

export interface MergePullRequestOption {
  /**
   *
   * @type {string}
   * @memberof MergePullRequestOption
   */
  Do: string;
  /**
   *
   * @type {string}
   * @memberof MergePullRequestOption
   */
  MergeCommitID: string;
  /**
   *
   * @type {string}
   * @memberof MergePullRequestOption
   */
  MergeMessageField: string;
  /**
   *
   * @type {string}
   * @memberof MergePullRequestOption
   */
  MergeTitleField: string;
  /**
   *
   * @type {boolean}
   * @memberof MergePullRequestOption
   */
  delete_branch_after_merge: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MergePullRequestOption
   */
  force_merge: boolean;
  /**
   *
   * @type {string}
   * @memberof MergePullRequestOption
   */
  head_commit_id: string;
  /**
   *
   * @type {boolean}
   * @memberof MergePullRequestOption
   */
  merge_when_checks_succeed: boolean;
}
