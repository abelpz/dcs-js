import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface userListFollowingParams extends baseParams {
  /** username of user */
  username: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the users that the given user is following
 */
export default function userListFollowing({
  username,
  page,
  limit,
  auth,
  options,
}: userListFollowingParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/following`,
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
