/**
 * CreateReleaseOption options when creating a release
 * @export
 * @interface CreateReleaseOption
 */

export interface CreateReleaseOption {
  /**
   *
   * @type {string}
   * @memberof CreateReleaseOption
   */
  body: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateReleaseOption
   */
  draft: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateReleaseOption
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateReleaseOption
   */
  prerelease: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateReleaseOption
   */
  tag_name: string;
  /**
   *
   * @type {string}
   * @memberof CreateReleaseOption
   */
  target_commitish: string;
}
