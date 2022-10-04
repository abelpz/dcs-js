import { baseParams, request } from "../utils";
import { NotFound } from "../models/not-found";

export interface issueAddSubscriptionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** user to subscribe */
  user: string;
}
/**
 * Subscribe user to issue
 */
export default function issueAddSubscription({
  owner,
  repo,
  index,
  user,
  auth,
  options,
}: issueAddSubscriptionParams) {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/subscriptions/${user}`,
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
