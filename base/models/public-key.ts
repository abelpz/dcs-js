import { User } from "./user";

/**
 * PublicKey publickey is a user key to push code to repository
 * @export
 * @interface PublicKey
 */

export interface PublicKey {
  /**
   *
   * @type {string}
   * @memberof PublicKey
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof PublicKey
   */
  fingerprint: string;
  /**
   *
   * @type {number}
   * @memberof PublicKey
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof PublicKey
   */
  key: string;
  /**
   *
   * @type {string}
   * @memberof PublicKey
   */
  key_type: string;
  /**
   *
   * @type {boolean}
   * @memberof PublicKey
   */
  read_only: boolean;
  /**
   *
   * @type {string}
   * @memberof PublicKey
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof PublicKey
   */
  url: string;
  /**
   *
   * @type {User}
   * @memberof PublicKey
   */
  user: User;
}
