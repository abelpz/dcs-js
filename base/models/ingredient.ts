/**
 * Ingredient is a single project of a resource
 * @export
 * @interface Ingredient
 */

export interface Ingredient {
  /**
   *
   * @type {string[]}
   * @memberof Ingredient
   */
  categories: string[];
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  identifier: string;
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  path: string;
  /**
   *
   * @type {number}
   * @memberof Ingredient
   */
  sort: number;
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Ingredient
   */
  versification: string;
}
