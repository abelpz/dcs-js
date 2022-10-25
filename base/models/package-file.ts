/**
 * PackageFile represents a package file
 * @export
 * @interface PackageFile
 */

export interface PackageFile {
  /**
   *
   * @type {number}
   * @memberof PackageFile
   */
  Size: number;
  /**
   *
   * @type {number}
   * @memberof PackageFile
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof PackageFile
   */
  md5: string;
  /**
   *
   * @type {string}
   * @memberof PackageFile
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof PackageFile
   */
  sha1: string;
  /**
   *
   * @type {string}
   * @memberof PackageFile
   */
  sha256: string;
  /**
   *
   * @type {string}
   * @memberof PackageFile
   */
  sha512: string;
}
