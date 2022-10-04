/**
 * EditTeamOption options for editing a team
 * @export
 * @interface EditTeamOption
 */

export interface EditTeamOption {
  /**
   *
   * @type {boolean}
   * @memberof EditTeamOption
   */
  can_create_org_repo: boolean;
  /**
   *
   * @type {string}
   * @memberof EditTeamOption
   */
  description: string;
  /**
   *
   * @type {boolean}
   * @memberof EditTeamOption
   */
  includes_all_repositories: boolean;
  /**
   *
   * @type {string}
   * @memberof EditTeamOption
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof EditTeamOption
   */
  permission: string;
  /**
   *
   * @type {string[]}
   * @memberof EditTeamOption
   */
  units: string[];
  /**
   *
   * @type {object}
   * @memberof EditTeamOption
   */
  units_map: object;
}
