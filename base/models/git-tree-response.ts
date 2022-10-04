import { GitEntry } from "./git-entry";

/**
 * GitTreeResponse returns a git tree
 * @export
 * @interface GitTreeResponse
 */

export interface GitTreeResponse {
  /**
   *
   * @type {number}
   * @memberof GitTreeResponse
   */
  page: number;
  /**
   *
   * @type {string}
   * @memberof GitTreeResponse
   */
  sha: string;
  /**
   *
   * @type {number}
   * @memberof GitTreeResponse
   */
  total_count: number;
  /**
   *
   * @type {GitEntry[]}
   * @memberof GitTreeResponse
   */
  tree: GitEntry[];
  /**
   *
   * @type {boolean}
   * @memberof GitTreeResponse
   */
  truncated: boolean;
  /**
   *
   * @type {string}
   * @memberof GitTreeResponse
   */
  url: string;
}
