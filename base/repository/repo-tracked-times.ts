import { baseParams, request } from "../utils";
import { TrackedTimeList } from "../models/tracked-time-list";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";

export interface repoTrackedTimesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
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
 * List a repo&#39;s tracked times
 */
export default function repoTrackedTimes({
  owner,
  repo,
  user,
  since,
  before,
  page,
  limit,
  auth,
  options,
}: repoTrackedTimesParams): Promise<TrackedTimeList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/times`,
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
