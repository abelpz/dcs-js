/**
 * BranchProtection represents a branch protection for a repository
 * @export
 * @interface BranchProtection
 */

export interface BranchProtection {
  /**
   *
   * @type {string[]}
   * @memberof BranchProtection
   */
  approvals_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof BranchProtection
   */
  approvals_whitelist_username: string[];
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  block_on_official_review_requests: boolean;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  block_on_outdated_branch: boolean;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  block_on_rejected_reviews: boolean;
  /**
   *
   * @type {string}
   * @memberof BranchProtection
   */
  branch_name: string;
  /**
   *
   * @type {string}
   * @memberof BranchProtection
   */
  created_at: string;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  dismiss_stale_approvals: boolean;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  enable_approvals_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  enable_merge_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  enable_push: boolean;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  enable_push_whitelist: boolean;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  enable_status_check: boolean;
  /**
   *
   * @type {string[]}
   * @memberof BranchProtection
   */
  merge_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof BranchProtection
   */
  merge_whitelist_usernames: string[];
  /**
   *
   * @type {string}
   * @memberof BranchProtection
   */
  protected_file_patterns: string;
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  push_whitelist_deploy_keys: boolean;
  /**
   *
   * @type {string[]}
   * @memberof BranchProtection
   */
  push_whitelist_teams: string[];
  /**
   *
   * @type {string[]}
   * @memberof BranchProtection
   */
  push_whitelist_usernames: string[];
  /**
   *
   * @type {boolean}
   * @memberof BranchProtection
   */
  require_signed_commits: boolean;
  /**
   *
   * @type {number}
   * @memberof BranchProtection
   */
  required_approvals: number;
  /**
   *
   * @type {string[]}
   * @memberof BranchProtection
   */
  status_check_contexts: string[];
  /**
   *
   * @type {string}
   * @memberof BranchProtection
   */
  unprotected_file_patterns: string;
  /**
   *
   * @type {string}
   * @memberof BranchProtection
   */
  updated_at: string;
}
