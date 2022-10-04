import { Repository } from "./repository";

/**
 * DeployKey a deploy key
 * @export
 * @interface DeployKey
 */

export interface DeployKey {
  /**
   *
   * @type {string}
   * @memberof DeployKey
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof DeployKey
   */
  fingerprint: string;
  /**
   *
   * @type {number}
   * @memberof DeployKey
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof DeployKey
   */
  key: string;
  /**
   *
   * @type {number}
   * @memberof DeployKey
   */
  key_id: number;
  /**
   *
   * @type {boolean}
   * @memberof DeployKey
   */
  read_only: boolean;
  /**
   *
   * @type {Repository}
   * @memberof DeployKey
   */
  repository: Repository;
  /**
   *
   * @type {string}
   * @memberof DeployKey
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof DeployKey
   */
  url: string;
}
