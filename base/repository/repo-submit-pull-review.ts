import { baseParams, request } from "../utils";
import { SubmitPullReviewOptions } from "../models/submit-pull-review-options";
import { PullReview } from "../models/pull-review";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoSubmitPullReviewParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
  /** id of the review */
  id: number;
  body: SubmitPullReviewOptions;
}
/**
 * Submit a pending review to an pull request
 */
export default function repoSubmitPullReview({
  owner,
  repo,
  index,
  id,
  body,
  auth,
  options,
}: repoSubmitPullReviewParams): Promise<PullReview> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/reviews/${id}`,
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
