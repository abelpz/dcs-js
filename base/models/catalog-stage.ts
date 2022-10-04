/**
 * CatalogStage a repo&#39;s catalog stage metadata
 * @export
 * @interface CatalogStage
 */

export interface CatalogStage {
  /**
   *
   * @type {string}
   * @memberof CatalogStage
   */
  branch_or_tag_name: string;
  /**
   *
   * @type {string}
   * @memberof CatalogStage
   */
  contents_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogStage
   */
  git_trees_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogStage
   */
  release_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogStage
   */
  released: string;
  /**
   *
   * @type {string}
   * @memberof CatalogStage
   */
  tarball_url: string;
  /**
   *
   * @type {string}
   * @memberof CatalogStage
   */
  zipball_url: string;
}
