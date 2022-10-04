import { CatalogStage } from "./catalog-stage";

/**
 * CatalogStages a repo&#39;s catalog stages
 * @export
 * @interface CatalogStages
 */

export interface CatalogStages {
  /**
   *
   * @type {CatalogStage}
   * @memberof CatalogStages
   */
  draft: CatalogStage;
  /**
   *
   * @type {CatalogStage}
   * @memberof CatalogStages
   */
  latest: CatalogStage;
  /**
   *
   * @type {CatalogStage}
   * @memberof CatalogStages
   */
  preprod: CatalogStage;
  /**
   *
   * @type {CatalogStage}
   * @memberof CatalogStages
   */
  prod: CatalogStage;
}
