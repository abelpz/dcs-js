import { baseParams, request } from "../utils";
import { RepositoryList } from "../models/repository-list";

export interface userListStarredParams extends baseParams {
  /** username of user */
  username: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * The repos that the given user has starred
 */
export default function userListStarred({
  username,
  page,
  limit,
  auth,
  options,
}: userListStarredParams): Promise<RepositoryList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/starred`,
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
