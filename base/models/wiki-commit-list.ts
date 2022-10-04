import { WikiCommit } from "./wiki-commit";

/**
 * WikiCommitList commitrevision list
 * @export
 * @interface WikiCommitList
 */

export interface WikiCommitList {
  /**
   *
   * @type {WikiCommit[]}
   * @memberof WikiCommitList
   */
  commits: WikiCommit[];
  /**
   *
   * @type {number}
   * @memberof WikiCommitList
   */
  count: number;
}
