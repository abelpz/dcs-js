/**
 * Label a label to an issue or a pr
 * @export
 * @interface Label
 */

export interface Label {
  /**
   *
   * @type {string}
   * @memberof Label
   */
  color: string;
  /**
   *
   * @type {string}
   * @memberof Label
   */
  description: string;
  /**
   *
   * @type {number}
   * @memberof Label
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Label
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Label
   */
  url: string;
}
