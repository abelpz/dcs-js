import { baseParams, request } from "../utils";
import { NotificationThreadList } from "../models/notification-thread-list";

export interface notifyGetRepoListParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** If true, show notifications marked as read. Default value is false */
  all?: boolean;
  /** Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned */
  statusTypes?: string[];
  /** filter notifications by subject type */
  subjectType?: string[];
  /** Only show notifications updated after the given time. This is a timestamp in RFC 3339 format */
  since?: string;
  /** Only show notifications updated before the given time. This is a timestamp in RFC 3339 format */
  before?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List users&#39;s notification threads on a specific repo
 */
export default function notifyGetRepoList({
  owner,
  repo,
  all,
  statusTypes,
  subjectType,
  since,
  before,
  page,
  limit,
  auth,
  options,
}: notifyGetRepoListParams): Promise<NotificationThreadList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/notifications`,
    query: {
      all: all,
      "status-types": statusTypes,
      "subject-type": subjectType,
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
