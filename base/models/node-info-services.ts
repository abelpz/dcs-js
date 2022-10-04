/**
 * NodeInfoServices contains the third party sites this server can connect to via their application API
 * @export
 * @interface NodeInfoServices
 */

export interface NodeInfoServices {
  /**
   *
   * @type {string[]}
   * @memberof NodeInfoServices
   */
  inbound: string[];
  /**
   *
   * @type {string[]}
   * @memberof NodeInfoServices
   */
  outbound: string[];
}
