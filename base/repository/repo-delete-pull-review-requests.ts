import { baseParams, request } from "../utils";
import { PullReviewRequestOptions } from "../models/pull-review-request-options";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoDeletePullReviewRequestsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
  body: PullReviewRequestOptions;
}
/**
 * cancel review requests for a pull request
 */
export default function repoDeletePullReviewRequests({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: repoDeletePullReviewRequestsParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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
