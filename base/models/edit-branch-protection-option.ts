/**
 * EditBranchProtectionOption options for editing a branch protection
 * @export
 * @interface EditBranchProtectionOption
 */

export interface EditBranchProtectionOption {
  /**
   *
   * @type {string[]}
   * @memberof EditBranchProtectionOption
   */
  approvals_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof EditBranchProtectionOption
   */
  approvals_whitelist_username: string[];
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  block_on_official_review_requests: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  block_on_outdated_branch: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  block_on_rejected_reviews: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  dismiss_stale_approvals: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  enable_approvals_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  enable_merge_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  enable_push: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  enable_push_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  enable_status_check: boolean;
  /**
   *
   * @type {string[]}
   * @memberof EditBranchProtectionOption
   */
  merge_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof EditBranchProtectionOption
   */
  merge_whitelist_usernames: string[];
  /**
   *
   * @type {string}
   * @memberof EditBranchProtectionOption
   */
  protected_file_patterns: string;
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  push_whitelist_deploy_keys: boolean;
  /**
   *
   * @type {string[]}
   * @memberof EditBranchProtectionOption
   */
  push_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof EditBranchProtectionOption
   */
  push_whitelist_usernames: string[];
  /**
   *
   * @type {boolean}
   * @memberof EditBranchProtectionOption
   */
  require_signed_commits: boolean;
  /**
   *
   * @type {number}
   * @memberof EditBranchProtectionOption
   */
  required_approvals: number;
  /**
   *
   * @type {string[]}
   * @memberof EditBranchProtectionOption
   */
  status_check_contexts: string[];
  /**
   *
   * @type {string}
   * @memberof EditBranchProtectionOption
   */
  unprotected_file_patterns: string;
}
