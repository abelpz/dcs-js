/**
 * CreateForkOption options for creating a fork
 * @export
 * @interface CreateForkOption
 */

export interface CreateForkOption {
  /**
   * name of the forked repository
   * @type {string}
   * @memberof CreateForkOption
   */
  name: string;
  /**
   * organization name, if forking into an organization
   * @type {string}
   * @memberof CreateForkOption
   */
  organization: string;
}
