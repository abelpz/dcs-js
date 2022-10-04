import { Attachment } from "./attachment";
import { User } from "./user";

/**
 * Release represents a repository release
 * @export
 * @interface Release
 */

export interface Release {
  /**
   *
   * @type {Attachment[]}
   * @memberof Release
   */
  assets: Attachment[];
  /**
   *
   * @type {User}
   * @memberof Release
   */
  author: User;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  created_at: string;
  /**
   *
   * @type {boolean}
   * @memberof Release
   */
  draft: boolean;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof Release
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof Release
   */
  prerelease: boolean;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  published_at: string;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  tag_name: string;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  tarball_url: string;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  target_commitish: string;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof Release
   */
  zipball_url: string;
}
