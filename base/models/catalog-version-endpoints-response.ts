import { CatalogVersionEndpoints } from "./catalog-version-endpoints";

/**
 * CatalogVersionEndpointsResponse response with the endpoints for all versions of the catalog
 * @export
 * @interface CatalogVersionEndpointsResponse
 */

export interface CatalogVersionEndpointsResponse {
  /**
   *
   * @type {CatalogVersionEndpoints[]}
   * @memberof CatalogVersionEndpointsResponse
   */
  data: CatalogVersionEndpoints[];
  /**
   *
   * @type {boolean}
   * @memberof CatalogVersionEndpointsResponse
   */
  ok: boolean;
}
