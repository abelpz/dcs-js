import { baseParams, request } from "../utils";
import { NotFound } from "../models/not-found";

export interface issueDeleteSubscriptionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** user witch unsubscribe */
  user: string;
}
/**
 * Unsubscribe user from issue
 */
export default function issueDeleteSubscription({
  owner,
  repo,
  index,
  user,
  auth,
  options,
}: issueDeleteSubscriptionParams) {
  const requestParams = {
    method: "DELETE",
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
