import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface userListFollowersParams extends baseParams {
  /** username of user */
  username: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the given user&#39;s followers
 */
export default function userListFollowers({
  username,
  page,
  limit,
  auth,
  options,
}: userListFollowersParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/followers`,
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
