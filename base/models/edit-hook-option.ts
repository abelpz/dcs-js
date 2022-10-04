/**
 * EditHookOption options when modify one hook
 * @export
 * @interface EditHookOption
 */

export interface EditHookOption {
  /**
   *
   * @type {boolean}
   * @memberof EditHookOption
   */
  active: boolean;
  /**
   *
   * @type {string}
   * @memberof EditHookOption
   */
  branch_filter: string;
  /**
   *
   * @type {object}
   * @memberof EditHookOption
   */
  config: object;
  /**
   *
   * @type {string[]}
   * @memberof EditHookOption
   */
  events: string[];
}
