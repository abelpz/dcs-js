import { Organization } from "./organization";

/**
 * Team represents a team in an organization
 * @export
 * @interface Team
 */

export interface Team {
  /**
   *
   * @type {boolean}
   * @memberof Team
   */
  can_create_org_repo: boolean;
  /**
   *
   * @type {string}
   * @memberof Team
   */
  description: string;
  /**
   *
   * @type {number}
   * @memberof Team
   */
  id: number;
  /**
   *
   * @type {boolean}
   * @memberof Team
   */
  includes_all_repositories: boolean;
  /**
   *
   * @type {string}
   * @memberof Team
   */
  name: string;
  /**
   *
   * @type {Organization}
   * @memberof Team
   */
  organization: Organization;
  /**
   *
   * @type {string}
   * @memberof Team
   */
  permission: string;
  /**
   *
   * @type {string[]}
   * @memberof Team
   */
  units: string[];
  /**
   *
   * @type {object}
   * @memberof Team
   */
  units_map: object;
}
