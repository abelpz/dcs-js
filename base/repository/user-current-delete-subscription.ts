import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface userCurrentDeleteSubscriptionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Unwatch a repo
 */
export default function userCurrentDeleteSubscription({
  owner,
  repo,
  auth,
  options,
}: userCurrentDeleteSubscriptionParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/subscription`,
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
