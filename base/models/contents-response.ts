import { FileLinksResponse } from "./file-links-response";

/**
 * ContentsResponse contains information about a repo&#39;s entry&#39;s (dir, file, symlink, submodule) metadata and content
 * @export
 * @interface ContentsResponse
 */

export interface ContentsResponse {
  /**
   *
   * @type {FileLinksResponse}
   * @memberof ContentsResponse
   */
  _links: FileLinksResponse;
  /**
   * `content` is populated when `type` is `file`, otherwise null
   * @type {string}
   * @memberof ContentsResponse
   */
  content: string;
  /**
   *
   * @type {string}
   * @memberof ContentsResponse
   */
  download_url: string;
  /**
   * `encoding` is populated when `type` is `file`, otherwise null
   * @type {string}
   * @memberof ContentsResponse
   */
  encoding: string;
  /**
   *
   * @type {string}
   * @memberof ContentsResponse
   */
  git_url: string;
  /**
   *
   * @type {string}
   * @memberof ContentsResponse
   */
  html_url: string;
  /**
   *
   * @type {string}
   * @memberof ContentsResponse
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ContentsResponse
   */
  path: string;
  /**
   *
   * @type {string}
   * @memberof ContentsResponse
   */
  sha: string;
  /**
   *
   * @type {number}
   * @memberof ContentsResponse
   */
  size: number;
  /**
   * `submodule_git_url` is populated when `type` is `submodule`, otherwise null
   * @type {string}
   * @memberof ContentsResponse
   */
  submodule_git_url: string;
  /**
   * `target` is populated when `type` is `symlink`, otherwise null
   * @type {string}
   * @memberof ContentsResponse
   */
  target: string;
  /**
   * `type` will be `file`, `dir`, `symlink`, or `submodule`
   * @type {string}
   * @memberof ContentsResponse
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof ContentsResponse
   */
  url: string;
}
