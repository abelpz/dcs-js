/**
 * EditOrgOption options for editing an organization
 * @export
 * @interface EditOrgOption
 */

export interface EditOrgOption {
  /**
   *
   * @type {string}
   * @memberof EditOrgOption
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof EditOrgOption
   */
  full_name: string;
  /**
   *
   * @type {string}
   * @memberof EditOrgOption
   */
  location: string;
  /**
   *
   * @type {boolean}
   * @memberof EditOrgOption
   */
  repo_admin_change_team_access: boolean;
  /**
   * possible values are `public`, `limited` or `private`
   * @type {string}
   * @memberof EditOrgOption
   */
  visibility: string;
  /**
   *
   * @type {string}
   * @memberof EditOrgOption
   */
  website: string;
}
