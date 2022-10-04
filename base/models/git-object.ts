/**
 * GitObject represents a Git object.
 * @export
 * @interface GitObject
 */

export interface GitObject {
  /**
   *
   * @type {string}
   * @memberof GitObject
   */
  sha: string;
  /**
   *
   * @type {string}
   * @memberof GitObject
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof GitObject
   */
  url: string;
}
