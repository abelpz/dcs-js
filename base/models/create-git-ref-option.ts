/**
 * CreateGitRefOption options when creating a git ref in a repository
 * @export
 * @interface CreateGitRefOption
 */

export interface CreateGitRefOption {
  /**
   * The name of the reference.
   * @type {string}
   * @memberof CreateGitRefOption
   */
  ref: string;
  /**
   * The target commitish for this reference.
   * @type {string}
   * @memberof CreateGitRefOption
   */
  target: string;
}
