/**
 * PullReviewRequestOptions are options to add or remove pull review requests
 * @export
 * @interface PullReviewRequestOptions
 */

export interface PullReviewRequestOptions {
  /**
   *
   * @type {string[]}
   * @memberof PullReviewRequestOptions
   */
  reviewers: string[];
  /**
   *
   * @type {string[]}
   * @memberof PullReviewRequestOptions
   */
  team_reviewers: string[];
}
