/**
 * MigrateRepoOptions options for migrating repository&#39;s
this is used to interact with api v1
 * @export
 * @interface MigrateRepoOptions
 */

export interface MigrateRepoOptions {
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  auth_password: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  auth_token: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  auth_username: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  clone_addr: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  description: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  issues: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  labels: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  lfs: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  lfs_endpoint: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  milestones: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  mirror: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  mirror_interval: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  private: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  pull_requests: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  releases: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  repo_name: string;
  /**
   * Name of User or Organisation who will own Repo after migration
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  repo_owner: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoOptions
   */
  service: string;
  /**
   * deprecated (only for backwards compatibility)
   * @type {number}
   * @memberof MigrateRepoOptions
   */
  uid: number;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoOptions
   */
  wiki: boolean;
}
