import { Identity } from "./identity";
import { CommitDateOptions } from "./commit-date-options";

/**
 * CreateFileOptions options for creating files
Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 * @export
 * @interface CreateFileOptions
 */

export interface CreateFileOptions {
  /**
   *
   * @type {Identity}
   * @memberof CreateFileOptions
   */
  author: Identity;
  /**
   * branch (optional) to base this file from. if not given, the default branch is used
   * @type {string}
   * @memberof CreateFileOptions
   */
  branch: string;
  /**
   *
   * @type {Identity}
   * @memberof CreateFileOptions
   */
  committer: Identity;
  /**
   * content must be base64 encoded
   * @type {string}
   * @memberof CreateFileOptions
   */
  content: string;
  /**
   *
   * @type {CommitDateOptions}
   * @memberof CreateFileOptions
   */
  dates: CommitDateOptions;
  /**
   * message (optional) for the commit of this file. if not supplied, a default message will be used
   * @type {string}
   * @memberof CreateFileOptions
   */
  message: string;
  /**
   * new_branch (optional) will make a new branch from `branch` before creating the file
   * @type {string}
   * @memberof CreateFileOptions
   */
  new_branch: string;
  /**
   * Add a Signed-off-by trailer by the committer at the end of the commit log message.
   * @type {boolean}
   * @memberof CreateFileOptions
   */
  signoff: boolean;
}
