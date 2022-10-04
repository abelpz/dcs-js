/**
 * CreateBranchProtectionOption options for creating a branch protection
 * @export
 * @interface CreateBranchProtectionOption
 */

export interface CreateBranchProtectionOption {
  /**
   *
   * @type {string[]}
   * @memberof CreateBranchProtectionOption
   */
  approvals_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof CreateBranchProtectionOption
   */
  approvals_whitelist_username: string[];
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  block_on_official_review_requests: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  block_on_outdated_branch: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  block_on_rejected_reviews: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateBranchProtectionOption
   */
  branch_name: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  dismiss_stale_approvals: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  enable_approvals_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  enable_merge_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  enable_push: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  enable_push_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  enable_status_check: boolean;
  /**
   *
   * @type {string[]}
   * @memberof CreateBranchProtectionOption
   */
  merge_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof CreateBranchProtectionOption
   */
  merge_whitelist_usernames: string[];
  /**
   *
   * @type {string}
   * @memberof CreateBranchProtectionOption
   */
  protected_file_patterns: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  push_whitelist_deploy_keys: boolean;
  /**
   *
   * @type {string[]}
   * @memberof CreateBranchProtectionOption
   */
  push_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof CreateBranchProtectionOption
   */
  push_whitelist_usernames: string[];
  /**
   *
   * @type {boolean}
   * @memberof CreateBranchProtectionOption
   */
  require_signed_commits: boolean;
  /**
   *
   * @type {number}
   * @memberof CreateBranchProtectionOption
   */
  required_approvals: number;
  /**
   *
   * @type {string[]}
   * @memberof CreateBranchProtectionOption
   */
  status_check_contexts: string[];
  /**
   *
   * @type {string}
   * @memberof CreateBranchProtectionOption
   */
  unprotected_file_patterns: string;
}
