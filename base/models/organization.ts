/**
 * Organization represents an organization
 * @export
 * @interface Organization
 */

export interface Organization {
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  avatar_url: string;
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  full_name: string;
  /**
   *
   * @type {number}
   * @memberof Organization
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  location: string;
  /**
   *
   * @type {boolean}
   * @memberof Organization
   */
  repo_admin_change_team_access: boolean;
  /**
   * All languages of the repos the org owns
   * @type {string[]}
   * @memberof Organization
   */
  repo_languages: string[];
  /**
   * All subjects of the repos the org owns
   * @type {string[]}
   * @memberof Organization
   */
  repo_subjects: string[];
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  visibility: string;
  /**
   *
   * @type {string}
   * @memberof Organization
   */
  website: string;
}
