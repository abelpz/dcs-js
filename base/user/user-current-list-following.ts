import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface userCurrentListFollowingParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the users that the authenticated user is following
 */
export default function userCurrentListFollowing({
  page,
  limit,
  auth,
  options,
}: userCurrentListFollowingParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/following`,
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
