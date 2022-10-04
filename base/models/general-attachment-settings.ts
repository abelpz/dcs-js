/**
 * GeneralAttachmentSettings contains global Attachment settings exposed by API
 * @export
 * @interface GeneralAttachmentSettings
 */

export interface GeneralAttachmentSettings {
  /**
   *
   * @type {string}
   * @memberof GeneralAttachmentSettings
   */
  allowed_types: string;
  /**
   *
   * @type {boolean}
   * @memberof GeneralAttachmentSettings
   */
  enabled: boolean;
  /**
   *
   * @type {number}
   * @memberof GeneralAttachmentSettings
   */
  max_files: number;
  /**
   *
   * @type {number}
   * @memberof GeneralAttachmentSettings
   */
  max_size: number;
}
