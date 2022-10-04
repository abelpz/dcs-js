/**
 * CreateOrgOption options for creating an organization
 * @export
 * @interface CreateOrgOption
 */

export interface CreateOrgOption {
  /**
   *
   * @type {string}
   * @memberof CreateOrgOption
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrgOption
   */
  full_name: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrgOption
   */
  location: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateOrgOption
   */
  repo_admin_change_team_access: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateOrgOption
   */
  username: string;
  /**
   * possible values are `public` (default), `limited` or `private`
   * @type {string}
   * @memberof CreateOrgOption
   */
  visibility: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrgOption
   */
  website: string;
}
