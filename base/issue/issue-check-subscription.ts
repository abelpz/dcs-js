import { baseParams, request } from "../utils";
import { WatchInfo } from "../models/watch-info";
import { NotFound } from "../models/not-found";

export interface issueCheckSubscriptionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
}
/**
 * Check if user is subscribed to an issue
 */
export default function issueCheckSubscription({
  owner,
  repo,
  index,
  auth,
  options,
}: issueCheckSubscriptionParams): Promise<WatchInfo> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/check`,
    query: {
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
