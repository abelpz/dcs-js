import { baseParams, request } from "../utils";
import { RepositoryList } from "../models/repository-list";

export interface userListSubscriptionsParams extends baseParams {
  /** username of the user */
  username: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the repositories watched by a user
 */
export default function userListSubscriptions({
  username,
  page,
  limit,
  auth,
  options,
}: userListSubscriptionsParams): Promise<RepositoryList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/subscriptions`,
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
