/**
 * Permission represents a set of permissions
 * @export
 * @interface Permission
 */

export interface Permission {
  /**
   *
   * @type {boolean}
   * @memberof Permission
   */
  admin: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Permission
   */
  pull: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Permission
   */
  push: boolean;
}
