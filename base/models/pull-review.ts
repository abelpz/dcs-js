import { ReviewStateType } from "./review-state-type";
import { Team } from "./team";
import { User } from "./user";

/**
 * PullReview represents a pull request review
 * @export
 * @interface PullReview
 */

export interface PullReview {
  /**
   *
   * @type {string}
   * @memberof PullReview
   */
  body: string;
  /**
   *
   * @type {number}
   * @memberof PullReview
   */
  comments_count: number;
  /**
   *
   * @type {string}
   * @memberof PullReview
   */
  commit_id: string;
  /**
   *
   * @type {boolean}
   * @memberof PullReview
   */
  dismissed: boolean;
  /**
   *
   * @type {string}
   * @memberof PullReview
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof PullReview
   */
  id: number;
  /**
   *
   * @type {boolean}
   * @memberof PullReview
   */
  official: boolean;
  /**
   *
   * @type {string}
   * @memberof PullReview
   */
  pull_request_url: string;
  /**
   *
   * @type {boolean}
   * @memberof PullReview
   */
  stale: boolean;
  /**
   *
   * @type {ReviewStateType}
   * @memberof PullReview
   */
  state: ReviewStateType;
  /**
   *
   * @type {string}
   * @memberof PullReview
   */
  submitted_at: string;
  /**
   *
   * @type {Team}
   * @memberof PullReview
   */
  team: Team;
  /**
   *
   * @type {User}
   * @memberof PullReview
   */
  user: User;
}
