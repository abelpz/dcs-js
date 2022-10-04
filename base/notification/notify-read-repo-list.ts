import { baseParams, request } from "../utils";
import { NotificationThreadList } from "../models/notification-thread-list";

export interface notifyReadRepoListParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** If true, mark all notifications on this repo. Default value is false */
  all?: string;
  /** Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. */
  statusTypes?: string[];
  /** Status to mark notifications as. Defaults to read. */
  toStatus?: string;
  /** Describes the last point that notifications were checked. Anything updated since this time will not be updated. */
  lastReadAt?: string;
}
/**
 * Mark notification threads as read, pinned or unread on a specific repo
 */
export default function notifyReadRepoList({
  owner,
  repo,
  all,
  statusTypes,
  toStatus,
  lastReadAt,
  auth,
  options,
}: notifyReadRepoListParams): Promise<NotificationThreadList> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/notifications`,
    query: {
      all: all,
      "status-types": statusTypes,
      "to-status": toStatus,
      last_read_at: lastReadAt,
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
