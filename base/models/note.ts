import { Commit } from "./commit";

/**
 * Note contains information related to a git note
 * @export
 * @interface Note
 */

export interface Note {
  /**
   *
   * @type {Commit}
   * @memberof Note
   */
  commit: Commit;
  /**
   *
   * @type {string}
   * @memberof Note
   */
  message: string;
}
