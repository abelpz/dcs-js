import { PayloadUser } from "./payload-user";
import { PayloadCommitVerification } from "./payload-commit-verification";

/**
 * PayloadCommit represents a commit
 * @export
 * @interface PayloadCommit
 */

export interface PayloadCommit {
  /**
   *
   * @type {string[]}
   * @memberof PayloadCommit
   */
  added: string[];
  /**
   *
   * @type {PayloadUser}
   * @memberof PayloadCommit
   */
  author: PayloadUser;
  /**
   *
   * @type {PayloadUser}
   * @memberof PayloadCommit
   */
  committer: PayloadUser;
  /**
   * sha1 hash of the commit
   * @type {string}
   * @memberof PayloadCommit
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof PayloadCommit
   */
  message: string;
  /**
   *
   * @type {string[]}
   * @memberof PayloadCommit
   */
  modified: string[];
  /**
   *
   * @type {string[]}
   * @memberof PayloadCommit
   */
  removed: string[];
  /**
   *
   * @type {string}
   * @memberof PayloadCommit
   */
  timestamp: string;
  /**
   *
   * @type {string}
   * @memberof PayloadCommit
   */
  url: string;
  /**
   *
   * @type {PayloadCommitVerification}
   * @memberof PayloadCommit
   */
  verification: PayloadCommitVerification;
}
