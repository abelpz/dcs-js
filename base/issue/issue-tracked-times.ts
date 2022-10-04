import { baseParams, request } from "../utils";
import { TrackedTimeList } from "../models/tracked-time-list";
import { NotFound } from "../models/not-found";

export interface issueTrackedTimesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** optional filter by user (available for issue managers) */
  user?: string;
  /** Only show times updated after the given time. This is a timestamp in RFC 3339 format */
  since?: string;
  /** Only show times updated before the given time. This is a timestamp in RFC 3339 format */
  before?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List an issue&#39;s tracked times
 */
export default function issueTrackedTimes({
  owner,
  repo,
  index,
  user,
  since,
  before,
  page,
  limit,
  auth,
  options,
}: issueTrackedTimesParams): Promise<TrackedTimeList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times`,
    query: {
      user: user,
      since: since,
      before: before,
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
