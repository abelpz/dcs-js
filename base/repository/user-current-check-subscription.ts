import { baseParams, request } from "../utils";
import { WatchInfo } from "../models/watch-info";

export interface userCurrentCheckSubscriptionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Check if the current user is watching a repo
 */
export default function userCurrentCheckSubscription({
  owner,
  repo,
  auth,
  options,
}: userCurrentCheckSubscriptionParams): Promise<WatchInfo> {
  const requestParams = {
    method: "GET",
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
