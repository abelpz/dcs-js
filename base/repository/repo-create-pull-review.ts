import { baseParams, request } from "../utils";
import { CreatePullReviewOptions } from "../models/create-pull-review-options";
import { PullReview } from "../models/pull-review";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoCreatePullReviewParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
  body: CreatePullReviewOptions;
}
/**
 * Create a review to an pull request
 */
export default function repoCreatePullReview({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: repoCreatePullReviewParams): Promise<PullReview> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews`,
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
