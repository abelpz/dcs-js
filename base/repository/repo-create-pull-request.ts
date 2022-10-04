import { baseParams, request } from "../utils";
import { CreatePullRequestOption } from "../models/create-pull-request-option";
import { PullRequest } from "../models/pull-request";
import { Error } from "../models/error";
import { ValidationError } from "../models/validation-error";

export interface repoCreatePullRequestParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreatePullRequestOption;
}
/**
 * Create a pull request
 */
export default function repoCreatePullRequest({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreatePullRequestParams): Promise<PullRequest> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls`,
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
