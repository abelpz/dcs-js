import { WikiCommit } from "./wiki-commit";

/**
 * WikiPageMetaData wiki page meta information
 * @export
 * @interface WikiPageMetaData
 */

export interface WikiPageMetaData {
  /**
   *
   * @type {string}
   * @memberof WikiPageMetaData
   */
  html_url: string;
  /**
   *
   * @type {WikiCommit}
   * @memberof WikiPageMetaData
   */
  last_commit: WikiCommit;
  /**
   *
   * @type {string}
   * @memberof WikiPageMetaData
   */
  sub_url: string;
  /**
   *
   * @type {string}
   * @memberof WikiPageMetaData
   */
  title: string;
}
