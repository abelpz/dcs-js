import { baseParams, request } from "../utils";
import { RepositoryList } from "../models/repository-list";

export interface userCurrentListReposParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the repos that the authenticated user owns
 */
export default function userCurrentListRepos({
  page,
  limit,
  auth,
  options,
}: userCurrentListReposParams): Promise<RepositoryList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/repos`,
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
