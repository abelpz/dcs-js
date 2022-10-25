import { CatalogEntry } from "./catalog-entry";

/**
 * CatalogSearchResults results of a successful catalog search
 * @export
 * @interface CatalogSearchResults
 */

export interface CatalogSearchResults {
  /**
   *
   * @type {CatalogEntry[]}
   * @memberof CatalogSearchResults
   */
  data: CatalogEntry[];
  /**
   *
   * @type {string}
   * @memberof CatalogSearchResults
   */
  last_updated: string;
  /**
   *
   * @type {boolean}
   * @memberof CatalogSearchResults
   */
  ok: boolean;
}
