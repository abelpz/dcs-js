import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";
import { NotFound } from "../models/not-found";

export interface issueSubscriptionsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get users who subscribed on an issue.
 */
export default function issueSubscriptions({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}: issueSubscriptionsParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/subscriptions`,
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
