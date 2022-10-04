import { CommitMeta } from "./commit-meta";

/**
 * Tag represents a repository tag
 * @export
 * @interface Tag
 */

export interface Tag {
  /**
   *
   * @type {CommitMeta}
   * @memberof Tag
   */
  commit: CommitMeta;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  tarball_url: string;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  zipball_url: string;
}
