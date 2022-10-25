/**
 * CommitStats is statistics for a RepoCommit
 * @export
 * @interface CommitStats
 */

export interface CommitStats {
  /**
   *
   * @type {number}
   * @memberof CommitStats
   */
  additions: number;
  /**
   *
   * @type {number}
   * @memberof CommitStats
   */
  deletions: number;
  /**
   *
   * @type {number}
   * @memberof CommitStats
   */
  total: number;
}
