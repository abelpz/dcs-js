import { baseParams, request } from "../utils";
import { TimelineList } from "../models/timeline-list";

export interface issueGetCommentsAndTimelineParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** if provided, only comments updated since the specified time are returned. */
  since?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
  /** if provided, only comments updated before the provided time are returned. */
  before?: string;
}
/**
 * List all comments and events on an issue
 */
export default function issueGetCommentsAndTimeline({
  owner,
  repo,
  index,
  since,
  page,
  limit,
  before,
  auth,
  options,
}: issueGetCommentsAndTimelineParams): Promise<TimelineList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/timeline`,
    query: {
      since: since,
      page: page,
      limit: limit,
      before: before,
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
