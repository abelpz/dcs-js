import { NodeInfoUsageUsers } from "./node-info-usage-users";

/**
 * NodeInfoUsage contains usage statistics for this server
 * @export
 * @interface NodeInfoUsage
 */

export interface NodeInfoUsage {
  /**
   *
   * @type {number}
   * @memberof NodeInfoUsage
   */
  localComments: number;
  /**
   *
   * @type {number}
   * @memberof NodeInfoUsage
   */
  localPosts: number;
  /**
   *
   * @type {NodeInfoUsageUsers}
   * @memberof NodeInfoUsage
   */
  users: NodeInfoUsageUsers;
}
