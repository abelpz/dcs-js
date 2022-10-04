import { baseParams, request } from "../utils";
import { CommitStatusList } from "../models/commit-status-list";
import { Error } from "../models/error";

export interface repoListStatusesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** sha of the commit */
  sha: string;
  /** type of sort */
  sort?: string;
  /** type of state */
  state?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get a commit&#39;s statuses
 */
export default function repoListStatuses({
  owner,
  repo,
  sha,
  sort,
  state,
  page,
  limit,
  auth,
  options,
}: repoListStatusesParams): Promise<CommitStatusList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/statuses/${sha}`,
    query: {
      sort: sort,
      state: state,
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
