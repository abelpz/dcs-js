import { CommitStatusState } from "./commit-status-state";

/**
 * CreateStatusOption holds the information needed to create a new CommitStatus for a Commit
 * @export
 * @interface CreateStatusOption
 */

export interface CreateStatusOption {
  /**
   *
   * @type {string}
   * @memberof CreateStatusOption
   */
  context: string;
  /**
   *
   * @type {string}
   * @memberof CreateStatusOption
   */
  description: string;
  /**
   *
   * @type {CommitStatusState}
   * @memberof CreateStatusOption
   */
  state: CommitStatusState;
  /**
   *
   * @type {string}
   * @memberof CreateStatusOption
   */
  target_url: string;
}
