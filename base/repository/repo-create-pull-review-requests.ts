import { baseParams, request } from "../utils";
import { PullReviewRequestOptions } from "../models/pull-review-request-options";
import { PullReviewList } from "../models/pull-review-list";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoCreatePullReviewRequestsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
  body: PullReviewRequestOptions;
}
/**
 * create review requests for a pull request
 */
export default function repoCreatePullReviewRequests({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: repoCreatePullReviewRequestsParams): Promise<PullReviewList> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/requested_reviewers`,
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
