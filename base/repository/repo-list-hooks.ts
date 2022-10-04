import { baseParams, request } from "../utils";
import { HookList } from "../models/hook-list";

export interface repoListHooksParams extends baseParams {
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
 * List the hooks in a repository
 */
export default function repoListHooks({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: repoListHooksParams): Promise<HookList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks`,
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
