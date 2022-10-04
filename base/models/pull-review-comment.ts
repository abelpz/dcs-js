import { User } from "./user";

/**
 * PullReviewComment represents a comment on a pull request review
 * @export
 * @interface PullReviewComment
 */

export interface PullReviewComment {
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  commit_id: string;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  diff_hunk: string;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof PullReviewComment
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  original_commit_id: string;
  /**
   *
   * @type {number}
   * @memberof PullReviewComment
   */
  original_position: number;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  path: string;
  /**
   *
   * @type {number}
   * @memberof PullReviewComment
   */
  position: number;
  /**
   *
   * @type {number}
   * @memberof PullReviewComment
   */
  pull_request_review_id: number;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  pull_request_url: string;
  /**
   *
   * @type {User}
   * @memberof PullReviewComment
   */
  resolver: User;
  /**
   *
   * @type {string}
   * @memberof PullReviewComment
   */
  updated_at: string;
  /**
   *
   * @type {User}
   * @memberof PullReviewComment
   */
  user: User;
}
