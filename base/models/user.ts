/**
 * User represents a user
 * @export
 * @interface User
 */

export interface User {
  /**
   * Is user active
   * @type {boolean}
   * @memberof User
   */
  active: boolean;
  /**
   * URL to the user&#39;s avatar
   * @type {string}
   * @memberof User
   */
  avatar_url: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  created: string;
  /**
   * the user&#39;s description
   * @type {string}
   * @memberof User
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  email: string;
  /**
   * user counts
   * @type {number}
   * @memberof User
   */
  followers_count: number;
  /**
   *
   * @type {number}
   * @memberof User
   */
  following_count: number;
  /**
   * the user&#39;s full name
   * @type {string}
   * @memberof User
   */
  full_name: string;
  /**
   * the user&#39;s id
   * @type {number}
   * @memberof User
   */
  id: number;
  /**
   * Is the user an administrator
   * @type {boolean}
   * @memberof User
   */
  is_admin: boolean;
  /**
   * User locale
   * @type {string}
   * @memberof User
   */
  language: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  last_login: string;
  /**
   * the user&#39;s location
   * @type {string}
   * @memberof User
   */
  location: string;
  /**
   * the user&#39;s username
   * @type {string}
   * @memberof User
   */
  login: string;
  /**
   * Is user login prohibited
   * @type {boolean}
   * @memberof User
   */
  prohibit_login: boolean;
  /**
   * Repo languages
   * @type {string[]}
   * @memberof User
   */
  repo_languages: string[];
  /**
   * Repo subjects
   * @type {string[]}
   * @memberof User
   */
  repo_subjects: string[];
  /**
   * Is user restricted
   * @type {boolean}
   * @memberof User
   */
  restricted: boolean;
  /**
   *
   * @type {number}
   * @memberof User
   */
  starred_repos_count: number;
  /**
   * User visibility level option: public, limited, private
   * @type {string}
   * @memberof User
   */
  visibility: string;
  /**
   * the user&#39;s website
   * @type {string}
   * @memberof User
   */
  website: string;
}
