import { FileCommitResponse } from "./file-commit-response";
import { PayloadCommitVerification } from "./payload-commit-verification";

/**
 * FileDeleteResponse contains information about a repo&#39;s file that was deleted
 * @export
 * @interface FileDeleteResponse
 */

export interface FileDeleteResponse {
  /**
   *
   * @type {FileCommitResponse}
   * @memberof FileDeleteResponse
   */
  commit: FileCommitResponse;
  /**
   *
   * @type {object}
   * @memberof FileDeleteResponse
   */
  content: object;
  /**
   *
   * @type {PayloadCommitVerification}
   * @memberof FileDeleteResponse
   */
  verification: PayloadCommitVerification;
}
