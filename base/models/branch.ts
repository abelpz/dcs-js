import { PayloadCommit } from "./payload-commit";

/**
 * Branch represents a repository branch
 * @export
 * @interface Branch
 */

export interface Branch {
  /**
   *
   * @type {PayloadCommit}
   * @memberof Branch
   */
  commit: PayloadCommit;
  /**
   *
   * @type {string}
   * @memberof Branch
   */
  effective_branch_protection_name: string;
  /**
   *
   * @type {boolean}
   * @memberof Branch
   */
  enable_status_check: boolean;
  /**
   *
   * @type {string}
   * @memberof Branch
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof Branch
   */
  protected: boolean;
  /**
   *
   * @type {number}
   * @memberof Branch
   */
  required_approvals: number;
  /**
   *
   * @type {string[]}
   * @memberof Branch
   */
  status_check_contexts: string[];
  /**
   *
   * @type {boolean}
   * @memberof Branch
   */
  user_can_merge: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Branch
   */
  user_can_push: boolean;
}
