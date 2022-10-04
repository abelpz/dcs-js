import { User } from "./user";
import { CommitStatusState } from "./commit-status-state";

/**
 * CommitStatus holds a single status of a single Commit
 * @export
 * @interface CommitStatus
 */

export interface CommitStatus {
  /**
   *
   * @type {string}
   * @memberof CommitStatus
   */
  context: string;
  /**
   *
   * @type {string}
   * @memberof CommitStatus
   */
  created_at: string;
  /**
   *
   * @type {User}
   * @memberof CommitStatus
   */
  creator: User;
  /**
   *
   * @type {string}
   * @memberof CommitStatus
   */
  description: string;
  /**
   *
   * @type {number}
   * @memberof CommitStatus
   */
  id: number;
  /**
   *
   * @type {CommitStatusState}
   * @memberof CommitStatus
   */
  status: CommitStatusState;
  /**
   *
   * @type {string}
   * @memberof CommitStatus
   */
  target_url: string;
  /**
   *
   * @type {string}
   * @memberof CommitStatus
   */
  updated_at: string;
  /**
   *
   * @type {string}
   * @memberof CommitStatus
   */
  url: string;
}
