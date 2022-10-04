import { baseParams, request } from "../utils";
import { CommitList } from "../models/commit-list";
import { NotFound } from "../models/not-found";

export interface repoGetPullRequestCommitsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request to get */
  index: number;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get commits for a pull request
 */
export default function repoGetPullRequestCommits({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}: repoGetPullRequestCommitsParams): Promise<CommitList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/commits`,
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
