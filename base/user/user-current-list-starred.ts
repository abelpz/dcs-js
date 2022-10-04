import { baseParams, request } from "../utils";
import { RepositoryList } from "../models/repository-list";

export interface userCurrentListStarredParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * The repos that the authenticated user has starred
 */
export default function userCurrentListStarred({
  page,
  limit,
  auth,
  options,
}: userCurrentListStarredParams): Promise<RepositoryList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/starred`,
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
