import { FileCommitResponse } from "./file-commit-response";
import { ContentsResponse } from "./contents-response";
import { PayloadCommitVerification } from "./payload-commit-verification";

/**
 * FileResponse contains information about a repo&#39;s file
 * @export
 * @interface FileResponse
 */

export interface FileResponse {
  /**
   *
   * @type {FileCommitResponse}
   * @memberof FileResponse
   */
  commit: FileCommitResponse;
  /**
   *
   * @type {ContentsResponse}
   * @memberof FileResponse
   */
  content: ContentsResponse;
  /**
   *
   * @type {PayloadCommitVerification}
   * @memberof FileResponse
   */
  verification: PayloadCommitVerification;
}
