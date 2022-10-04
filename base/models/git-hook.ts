/**
 * GitHook represents a Git repository hook
 * @export
 * @interface GitHook
 */

export interface GitHook {
  /**
   *
   * @type {string}
   * @memberof GitHook
   */
  content: string;
  /**
   *
   * @type {boolean}
   * @memberof GitHook
   */
  is_active: boolean;
  /**
   *
   * @type {string}
   * @memberof GitHook
   */
  name: string;
}
