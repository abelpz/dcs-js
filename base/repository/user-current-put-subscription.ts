import { baseParams, request } from "../utils";
import { WatchInfo } from "../models/watch-info";

export interface userCurrentPutSubscriptionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Watch a repo
 */
export default function userCurrentPutSubscription({
  owner,
  repo,
  auth,
  options,
}: userCurrentPutSubscriptionParams): Promise<WatchInfo> {
  const requestParams = {
    method: "PUT",
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
