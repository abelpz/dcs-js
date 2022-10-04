/**
 * CreateTeamOption options for creating a team
 * @export
 * @interface CreateTeamOption
 */

export interface CreateTeamOption {
  /**
   *
   * @type {boolean}
   * @memberof CreateTeamOption
   */
  can_create_org_repo: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateTeamOption
   */
  description: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateTeamOption
   */
  includes_all_repositories: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateTeamOption
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CreateTeamOption
   */
  permission: string;
  /**
   *
   * @type {string[]}
   * @memberof CreateTeamOption
   */
  units: string[];
  /**
   *
   * @type {object}
   * @memberof CreateTeamOption
   */
  units_map: object;
}
