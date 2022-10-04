import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface repoListSubscribersParams extends baseParams {
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
 * List a repo&#39;s watchers
 */
export default function repoListSubscribers({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: repoListSubscribersParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/subscribers`,
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
