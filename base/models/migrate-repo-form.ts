import { GitServiceType } from "./git-service-type";

/**
 * MigrateRepoForm form for migrating repository
this is used to interact with web ui
 * @export
 * @interface MigrateRepoForm
 */

export interface MigrateRepoForm {
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  auth_password: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  auth_token: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  auth_username: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  clone_addr: string;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  description: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  issues: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  labels: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  lfs: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  lfs_endpoint: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  milestones: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  mirror: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  mirror_interval: string;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  private: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  pull_requests: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  releases: boolean;
  /**
   *
   * @type {string}
   * @memberof MigrateRepoForm
   */
  repo_name: string;
  /**
   *
   * @type {GitServiceType}
   * @memberof MigrateRepoForm
   */
  service: GitServiceType;
  /**
   *
   * @type {number}
   * @memberof MigrateRepoForm
   */
  uid: number;
  /**
   *
   * @type {boolean}
   * @memberof MigrateRepoForm
   */
  wiki: boolean;
}
