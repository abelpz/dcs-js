import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface userCurrentListFollowersParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the authenticated user&#39;s followers
 */
export default function userCurrentListFollowers({
  page,
  limit,
  auth,
  options,
}: userCurrentListFollowersParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/followers`,
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
