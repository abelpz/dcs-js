import { GitObject } from "./git-object";

/**
 * Reference represents a Git reference.
 * @export
 * @interface Reference
 */

export interface Reference {
  /**
   *
   * @type {GitObject}
   * @memberof Reference
   */
  object: GitObject;
  /**
   *
   * @type {string}
   * @memberof Reference
   */
  ref: string;
  /**
   *
   * @type {string}
   * @memberof Reference
   */
  url: string;
}
