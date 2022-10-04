import { baseParams, request } from "../utils";
import { PullRequest } from "../models/pull-request";
import { NotFound } from "../models/not-found";

export interface repoGetPullRequestParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request to get */
  index: number;
}
/**
 * Get a pull request
 */
export default function repoGetPullRequest({
  owner,
  repo,
  index,
  auth,
  options,
}: repoGetPullRequestParams): Promise<PullRequest> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}`,
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
