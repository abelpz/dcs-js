import { Repository } from "./repository";
import { CommitStatusState } from "./commit-status-state";
import { CommitStatus } from "./commit-status";

/**
 * CombinedStatus holds the combined state of several statuses for a single commit
 * @export
 * @interface CombinedStatus
 */

export interface CombinedStatus {
  /**
   *
   * @type {string}
   * @memberof CombinedStatus
   */
  commit_url: string;
  /**
   *
   * @type {Repository}
   * @memberof CombinedStatus
   */
  repository: Repository;
  /**
   *
   * @type {string}
   * @memberof CombinedStatus
   */
  sha: string;
  /**
   *
   * @type {CommitStatusState}
   * @memberof CombinedStatus
   */
  state: CommitStatusState;
  /**
   *
   * @type {CommitStatus[]}
   * @memberof CombinedStatus
   */
  statuses: CommitStatus[];
  /**
   *
   * @type {number}
   * @memberof CombinedStatus
   */
  total_count: number;
  /**
   *
   * @type {string}
   * @memberof CombinedStatus
   */
  url: string;
}
