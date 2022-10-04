import { CreatePullReviewComment } from "./create-pull-review-comment";
import { ReviewStateType } from "./review-state-type";

/**
 * CreatePullReviewOptions are options to create a pull review
 * @export
 * @interface CreatePullReviewOptions
 */

export interface CreatePullReviewOptions {
  /**
   *
   * @type {string}
   * @memberof CreatePullReviewOptions
   */
  body: string;
  /**
   *
   * @type {CreatePullReviewComment[]}
   * @memberof CreatePullReviewOptions
   */
  comments: CreatePullReviewComment[];
  /**
   *
   * @type {string}
   * @memberof CreatePullReviewOptions
   */
  commit_id: string;
  /**
   *
   * @type {ReviewStateType}
   * @memberof CreatePullReviewOptions
   */
  event: ReviewStateType;
}
