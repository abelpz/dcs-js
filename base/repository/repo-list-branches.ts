import { baseParams, request } from "../utils";
import { BranchList } from "../models/branch-list";

export interface repoListBranchesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a repository&#39;s branches
 */
export default function repoListBranches({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: repoListBranchesParams): Promise<BranchList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branches`,
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
