import { User } from "./user";
import { Team } from "./team";

/**
 * RepoTransfer represents a pending repo transfer
 * @export
 * @interface RepoTransfer
 */

export interface RepoTransfer {
  /**
   *
   * @type {User}
   * @memberof RepoTransfer
   */
  doer: User;
  /**
   *
   * @type {User}
   * @memberof RepoTransfer
   */
  recipient: User;
  /**
   *
   * @type {Team[]}
   * @memberof RepoTransfer
   */
  teams: Team[];
}
