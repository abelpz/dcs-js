import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface issueDeleteStopWatchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue to stop the stopwatch on */
  index: number;
}
/**
 * Delete an issue&#39;s existing stopwatch.
 */
export default function issueDeleteStopWatch({
  owner,
  repo,
  index,
  auth,
  options,
}: issueDeleteStopWatchParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/delete`,
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
