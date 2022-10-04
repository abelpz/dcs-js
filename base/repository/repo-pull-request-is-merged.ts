import { baseParams, request } from "../utils";

export interface repoPullRequestIsMergedParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request */
  index: number;
}
/**
 * Check if a pull request has been merged
 */
export default function repoPullRequestIsMerged({
  owner,
  repo,
  index,
  auth,
  options,
}: repoPullRequestIsMergedParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
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
