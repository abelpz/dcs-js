import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface issueStartStopWatchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue to create the stopwatch on */
  index: number;
}
/**
 * Start stopwatch on an issue.
 */
export default function issueStartStopWatch({
  owner,
  repo,
  index,
  auth,
  options,
}: issueStartStopWatchParams): Promise<Empty> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/stopwatch/start`,
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
