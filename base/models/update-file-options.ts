import { Identity } from "./identity";
import { CommitDateOptions } from "./commit-date-options";

/**
 * UpdateFileOptions options for updating files
Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 * @export
 * @interface UpdateFileOptions
 */

export interface UpdateFileOptions {
  /**
   *
   * @type {Identity}
   * @memberof UpdateFileOptions
   */
  author: Identity;
  /**
   * branch (optional) to base this file from. if not given, the default branch is used
   * @type {string}
   * @memberof UpdateFileOptions
   */
  branch: string;
  /**
   *
   * @type {Identity}
   * @memberof UpdateFileOptions
   */
  committer: Identity;
  /**
   * content must be base64 encoded
   * @type {string}
   * @memberof UpdateFileOptions
   */
  content: string;
  /**
   *
   * @type {CommitDateOptions}
   * @memberof UpdateFileOptions
   */
  dates: CommitDateOptions;
  /**
   * from_path (optional) is the path of the original file which will be movedrenamed to the path in the URL
   * @type {string}
   * @memberof UpdateFileOptions
   */
  from_path: string;
  /**
   * message (optional) for the commit of this file. if not supplied, a default message will be used
   * @type {string}
   * @memberof UpdateFileOptions
   */
  message: string;
  /**
   * new_branch (optional) will make a new branch from `branch` before creating the file
   * @type {string}
   * @memberof UpdateFileOptions
   */
  new_branch: string;
  /**
   * sha is the SHA for the file that already exists
   * @type {string}
   * @memberof UpdateFileOptions
   */
  sha: string;
  /**
   * Add a Signed-off-by trailer by the committer at the end of the commit log message.
   * @type {boolean}
   * @memberof UpdateFileOptions
   */
  signoff: boolean;
}
