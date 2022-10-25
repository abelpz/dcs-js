import { Ingredient } from "./ingredient";
import { Release } from "./release";
import { Repository } from "./repository";

/**
 * CatalogEntry represents a repository&#39;s metadata of a tag or default branch as an entry of the catalog
 * @export
 * @interface CatalogEntry
 */

export interface CatalogEntry {
  /**
   *
   * @type {object}
   * @memberof CatalogEntry
   */
  alignment_counts: object;
  /**
   *
   * @type {string[]}
   * @memberof CatalogEntry
   */
  books: string[];
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  branch_or_tag_name: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  contents_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  full_name: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  git_trees_url: string;
  /**
   *
   * @type {number}
   * @memberof CatalogEntry
   */
  id: number;
  /**
   *
   * @type {Ingredient[]}
   * @memberof CatalogEntry
   */
  ingredients: Ingredient[];
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  language: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  language_direction: string;
  /**
   *
   * @type {boolean}
   * @memberof CatalogEntry
   */
  language_is_gl: boolean;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  language_title: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  metadata_api_contents_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  metadata_json_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  metadata_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  metadata_version: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  owner: string;
  /**
   *
   * @type {Release}
   * @memberof CatalogEntry
   */
  release: Release;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  released: string;
  /**
   *
   * @type {Repository}
   * @memberof CatalogEntry
   */
  repo: Repository;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  stage: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  subject: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  tarbar_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogEntry
   */
  zipball_url: string;
}
