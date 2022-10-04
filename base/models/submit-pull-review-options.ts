import { ReviewStateType } from "./review-state-type";

/**
 * SubmitPullReviewOptions are options to submit a pending pull review
 * @export
 * @interface SubmitPullReviewOptions
 */

export interface SubmitPullReviewOptions {
  /**
   *
   * @type {string}
   * @memberof SubmitPullReviewOptions
   */
  body: string;
  /**
   *
   * @type {ReviewStateType}
   * @memberof SubmitPullReviewOptions
   */
  event: ReviewStateType;
}
