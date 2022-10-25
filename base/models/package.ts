import { User } from "./user";
import { Repository } from "./repository";

/**
 * Package represents a package
 * @export
 * @interface Package
 */

export interface Package {
  /**
   *
   * @type {string}
   * @memberof Package
   */
  created_at: string;
  /**
   *
   * @type {User}
   * @memberof Package
   */
  creator: User;
  /**
   *
   * @type {number}
   * @memberof Package
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Package
   */
  name: string;
  /**
   *
   * @type {User}
   * @memberof Package
   */
  owner: User;
  /**
   *
   * @type {Repository}
   * @memberof Package
   */
  repository: Repository;
  /**
   *
   * @type {string}
   * @memberof Package
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof Package
   */
  version: string;
}
