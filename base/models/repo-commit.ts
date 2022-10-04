import { CommitUser } from "./commit-user";
import { CommitMeta } from "./commit-meta";

/**
 * RepoCommit contains information of a commit in the context of a repository.
 * @export
 * @interface RepoCommit
 */

export interface RepoCommit {
  /**
   *
   * @type {CommitUser}
   * @memberof RepoCommit
   */
  author: CommitUser;
  /**
   *
   * @type {CommitUser}
   * @memberof RepoCommit
   */
  committer: CommitUser;
  /**
   *
   * @type {string}
   * @memberof RepoCommit
   */
  message: string;
  /**
   *
   * @type {CommitMeta}
   * @memberof RepoCommit
   */
  tree: CommitMeta;
  /**
   *
   * @type {string}
   * @memberof RepoCommit
   */
  url: string;
}
