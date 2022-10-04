import { baseParams, request } from "../utils";
import { PullRequestList } from "../models/pull-request-list";

export interface repoListPullRequestsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** State of pull request: open or closed (optional) */
  state?: string;
  /** Type of sort */
  sort?: string;
  /** ID of the milestone */
  milestone?: number;
  /** Label IDs */
  labels?: number[];
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a repo&#39;s pull requests
 */
export default function repoListPullRequests({
  owner,
  repo,
  state,
  sort,
  milestone,
  labels,
  page,
  limit,
  auth,
  options,
}: repoListPullRequestsParams): Promise<PullRequestList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls`,
    query: {
      state: state,
      sort: sort,
      milestone: milestone,
      labels: labels,
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
