import { Repository } from "./repository";

/**
 * SearchResults results of a successful search
 * @export
 * @interface SearchResults
 */

export interface SearchResults {
  /**
   *
   * @type {Repository[]}
   * @memberof SearchResults
   */
  data: Repository[];
  /**
   *
   * @type {boolean}
   * @memberof SearchResults
   */
  ok: boolean;
}
