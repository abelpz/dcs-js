import { baseParams, request } from "../utils";
import { DismissPullReviewOptions } from "../models/dismiss-pull-review-options";
import { PullReview } from "../models/pull-review";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface repoDismissPullReviewParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
  /** id of the review */
  id: number;
  body: DismissPullReviewOptions;
}
/**
 * Dismiss a review for a pull request
 */
export default function repoDismissPullReview({
  owner,
  repo,
  index,
  id,
  body,
  auth,
  options,
}: repoDismissPullReviewParams): Promise<PullReview> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/dismissals`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
