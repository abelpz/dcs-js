/**
 * CreateBranchRepoOption options when creating a branch in a repository
 * @export
 * @interface CreateBranchRepoOption
 */

export interface CreateBranchRepoOption {
  /**
   * Name of the branch to create
   * @type {string}
   * @memberof CreateBranchRepoOption
   */
  new_branch_name: string;
  /**
   * Name of the old branch to create from
   * @type {string}
   * @memberof CreateBranchRepoOption
   */
  old_branch_name: string;
}
