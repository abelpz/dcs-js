/**
 * CreateKeyOption options when creating a key
 * @export
 * @interface CreateKeyOption
 */

export interface CreateKeyOption {
  /**
   * An armored SSH key to add
   * @type {string}
   * @memberof CreateKeyOption
   */
  key: string;
  /**
   * Describe if the key has only read access or readwrite
   * @type {boolean}
   * @memberof CreateKeyOption
   */
  read_only: boolean;
  /**
   * Title of the key to add
   * @type {string}
   * @memberof CreateKeyOption
   */
  title: string;
}
