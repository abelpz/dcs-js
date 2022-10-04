/**
 * CreatePullReviewComment represent a review comment for creation api
 * @export
 * @interface CreatePullReviewComment
 */

export interface CreatePullReviewComment {
  /**
   *
   * @type {string}
   * @memberof CreatePullReviewComment
   */
  body: string;
  /**
   * if comment to new file line or 0
   * @type {number}
   * @memberof CreatePullReviewComment
   */
  new_position: number;
  /**
   * if comment to old file line or 0
   * @type {number}
   * @memberof CreatePullReviewComment
   */
  old_position: number;
  /**
   * the tree path
   * @type {string}
   * @memberof CreatePullReviewComment
   */
  path: string;
}
