/**
 * GitEntry represents a git tree
 * @export
 * @interface GitEntry
 */

export interface GitEntry {
  /**
   *
   * @type {string}
   * @memberof GitEntry
   */
  mode: string;
  /**
   *
   * @type {string}
   * @memberof GitEntry
   */
  path: string;
  /**
   *
   * @type {string}
   * @memberof GitEntry
   */
  sha: string;
  /**
   *
   * @type {number}
   * @memberof GitEntry
   */
  size: number;
  /**
   *
   * @type {string}
   * @memberof GitEntry
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof GitEntry
   */
  url: string;
}
