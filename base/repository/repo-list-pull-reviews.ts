import { baseParams, request } from "../utils";
import { PullReviewList } from "../models/pull-review-list";
import { NotFound } from "../models/not-found";

export interface repoListPullReviewsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List all reviews for a pull request
 */
export default function repoListPullReviews({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}: repoListPullReviewsParams): Promise<PullReviewList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews`,
    query: {
      page: page,
      limit: limit,
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
