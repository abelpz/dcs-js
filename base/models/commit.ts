import { User } from "./user";
import { RepoCommit } from "./repo-commit";
import { CommitAffectedFiles } from "./commit-affected-files";
import { CommitMeta } from "./commit-meta";

/**
 * Commit contains information generated from a Git commit.
 * @export
 * @interface Commit
 */

export interface Commit {
  /**
   *
   * @type {User}
   * @memberof Commit
   */
  author: User;
  /**
   *
   * @type {RepoCommit}
   * @memberof Commit
   */
  commit: RepoCommit;
  /**
   *
   * @type {User}
   * @memberof Commit
   */
  committer: User;
  /**
   *
   * @type {string}
   * @memberof Commit
   */
  created: string;
  /**
   *
   * @type {CommitAffectedFiles[]}
   * @memberof Commit
   */
  files: CommitAffectedFiles[];
  /**
   *
   * @type {string}
   * @memberof Commit
   */
  html_url: string;
  /**
   *
   * @type {CommitMeta[]}
   * @memberof Commit
   */
  parents: CommitMeta[];
  /**
   *
   * @type {string}
   * @memberof Commit
   */
  sha: string;
  /**
   *
   * @type {string}
   * @memberof Commit
   */
  url: string;
}
