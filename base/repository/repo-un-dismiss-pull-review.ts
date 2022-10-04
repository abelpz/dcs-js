import { baseParams, request } from "../utils";
import { PullReview } from "../models/pull-review";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface repoUnDismissPullReviewParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
  /** id of the review */
  id: number;
}
/**
 * Cancel to dismiss a review for a pull request
 */
export default function repoUnDismissPullReview({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}: repoUnDismissPullReviewParams): Promise<PullReview> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}/undismissals`,
    query: {
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
