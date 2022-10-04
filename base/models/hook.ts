/**
 * Hook a hook is a web hook when one repository changed
 * @export
 * @interface Hook
 */

export interface Hook {
  /**
   *
   * @type {boolean}
   * @memberof Hook
   */
  active: boolean;
  /**
   *
   * @type {object}
   * @memberof Hook
   */
  config: object;
  /**
   *
   * @type {string}
   * @memberof Hook
   */
  created_at: string;
  /**
   *
   * @type {string[]}
   * @memberof Hook
   */
  events: string[];
  /**
   *
   * @type {number}
   * @memberof Hook
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Hook
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof Hook
   */
  updated_at: string;
}
