import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface issueStopStopWatchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue to stop the stopwatch on */
  index: number;
}
/**
 * Stop an issue&#39;s existing stopwatch.
 */
export default function issueStopStopWatch({
  owner,
  repo,
  index,
  auth,
  options,
}: issueStopStopWatchParams): Promise<Empty> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/stop`,
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
