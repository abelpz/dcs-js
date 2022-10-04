/**
 * EditReleaseOption options when editing a release
 * @export
 * @interface EditReleaseOption
 */

export interface EditReleaseOption {
  /**
   *
   * @type {string}
   * @memberof EditReleaseOption
   */
  body: string;
  /**
   *
   * @type {boolean}
   * @memberof EditReleaseOption
   */
  draft: boolean;
  /**
   *
   * @type {string}
   * @memberof EditReleaseOption
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof EditReleaseOption
   */
  prerelease: boolean;
  /**
   *
   * @type {string}
   * @memberof EditReleaseOption
   */
  tag_name: string;
  /**
   *
   * @type {string}
   * @memberof EditReleaseOption
   */
  target_commitish: string;
}
