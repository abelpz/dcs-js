import { NodeInfoServices } from "./node-info-services";
import { NodeInfoSoftware } from "./node-info-software";
import { NodeInfoUsage } from "./node-info-usage";

/**
 * NodeInfo contains standardized way of exposing metadata about a server running one of the distributed social networks
 * @export
 * @interface NodeInfo
 */

export interface NodeInfo {
  /**
   *
   * @type {object}
   * @memberof NodeInfo
   */
  metadata: object;
  /**
   *
   * @type {boolean}
   * @memberof NodeInfo
   */
  openRegistrations: boolean;
  /**
   *
   * @type {string[]}
   * @memberof NodeInfo
   */
  protocols: string[];
  /**
   *
   * @type {NodeInfoServices}
   * @memberof NodeInfo
   */
  services: NodeInfoServices;
  /**
   *
   * @type {NodeInfoSoftware}
   * @memberof NodeInfo
   */
  software: NodeInfoSoftware;
  /**
   *
   * @type {NodeInfoUsage}
   * @memberof NodeInfo
   */
  usage: NodeInfoUsage;
  /**
   *
   * @type {string}
   * @memberof NodeInfo
   */
  version: string;
}
