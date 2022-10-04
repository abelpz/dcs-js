/**
 * GitBlobResponse represents a git blob
 * @export
 * @interface GitBlobResponse
 */

export interface GitBlobResponse {
  /**
   *
   * @type {string}
   * @memberof GitBlobResponse
   */
  content: string;
  /**
   *
   * @type {string}
   * @memberof GitBlobResponse
   */
  encoding: string;
  /**
   *
   * @type {string}
   * @memberof GitBlobResponse
   */
  sha: string;
  /**
   *
   * @type {number}
   * @memberof GitBlobResponse
   */
  size: number;
  /**
   *
   * @type {string}
   * @memberof GitBlobResponse
   */
  url: string;
}
