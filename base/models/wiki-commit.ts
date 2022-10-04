import { CommitUser } from "./commit-user";

/**
 * WikiCommit page commitrevision
 * @export
 * @interface WikiCommit
 */

export interface WikiCommit {
  /**
   *
   * @type {CommitUser}
   * @memberof WikiCommit
   */
  author: CommitUser;
  /**
   *
   * @type {CommitUser}
   * @memberof WikiCommit
   */
  commiter: CommitUser;
  /**
   *
   * @type {string}
   * @memberof WikiCommit
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof WikiCommit
   */
  sha: string;
}
