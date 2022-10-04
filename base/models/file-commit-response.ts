import { CommitUser } from "./commit-user";
import { CommitMeta } from "./commit-meta";

/**
 * FileCommitResponse contains information generated from a Git commit for a repo&#39;s file.
 * @export
 * @interface FileCommitResponse
 */

export interface FileCommitResponse {
  /**
   *
   * @type {CommitUser}
   * @memberof FileCommitResponse
   */
  author: CommitUser;
  /**
   *
   * @type {CommitUser}
   * @memberof FileCommitResponse
   */
  committer: CommitUser;
  /**
   *
   * @type {string}
   * @memberof FileCommitResponse
   */
  created: string;
  /**
   *
   * @type {string}
   * @memberof FileCommitResponse
   */
  html_url: string;
  /**
   *
   * @type {string}
   * @memberof FileCommitResponse
   */
  message: string;
  /**
   *
   * @type {CommitMeta[]}
   * @memberof FileCommitResponse
   */
  parents: CommitMeta[];
  /**
   *
   * @type {string}
   * @memberof FileCommitResponse
   */
  sha: string;
  /**
   *
   * @type {CommitMeta}
   * @memberof FileCommitResponse
   */
  tree: CommitMeta;
  /**
   *
   * @type {string}
   * @memberof FileCommitResponse
   */
  url: string;
}
