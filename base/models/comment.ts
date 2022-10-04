import { User } from "./user";

/**
 * Comment represents a comment on a commit or issue
 * @export
 * @interface Comment
 */

export interface Comment {
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof Comment
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  issue_url: string;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  original_author: string;
  /**
   *
   * @type {number}
   * @memberof Comment
   */
  original_author_id: number;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  pull_request_url: string;
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  updated_at: string;
  /**
   *
   * @type {User}
   * @memberof Comment
   */
  user: User;
}
