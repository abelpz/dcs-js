import { baseParams, request } from "../utils";
import { PullReview } from "../models/pull-review";
import { NotFound } from "../models/not-found";

export interface repoGetPullReviewParams extends baseParams {
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
 * Get a specific review for a pull request
 */
export default function repoGetPullReview({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}: repoGetPullReviewParams): Promise<PullReview> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
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
