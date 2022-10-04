import { Repository } from "./repository";

/**
 * PRBranchInfo information about a branch
 * @export
 * @interface PrBranchInfo
 */

export interface PrBranchInfo {
  /**
   *
   * @type {string}
   * @memberof PrBranchInfo
   */
  label: string;
  /**
   *
   * @type {string}
   * @memberof PrBranchInfo
   */
  ref: string;
  /**
   *
   * @type {Repository}
   * @memberof PrBranchInfo
   */
  repo: Repository;
  /**
   *
   * @type {number}
   * @memberof PrBranchInfo
   */
  repo_id: number;
  /**
   *
   * @type {string}
   * @memberof PrBranchInfo
   */
  sha: string;
}
