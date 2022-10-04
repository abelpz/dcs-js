import { baseParams, request } from "../utils";
import { RepositoryList } from "../models/repository-list";

export interface userCurrentListSubscriptionsParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List repositories watched by the authenticated user
 */
export default function userCurrentListSubscriptions({
  page,
  limit,
  auth,
  options,
}: userCurrentListSubscriptionsParams): Promise<RepositoryList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/subscriptions`,
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
