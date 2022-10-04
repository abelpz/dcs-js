import { baseParams, request } from "../utils";
import { RepositoryList } from "../models/repository-list";

export interface listForksParams extends baseParams {
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
 * List a repository&#39;s forks
 */
export default function listForks({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: listForksParams): Promise<RepositoryList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/forks`,
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
