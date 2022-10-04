import { baseParams, request } from "../utils";
import { NotificationThreadList } from "../models/notification-thread-list";

export interface notifyReadListParams extends baseParams {
  /** Describes the last point that notifications were checked. Anything updated since this time will not be updated. */
  lastReadAt?: string;
  /** If true, mark all notifications on this repo. Default value is false */
  all?: string;
  /** Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. */
  statusTypes?: string[];
  /** Status to mark notifications as, Defaults to read. */
  toStatus?: string;
}
/**
 * Mark notification threads as read, pinned or unread
 */
export default function notifyReadList({
  lastReadAt,
  all,
  statusTypes,
  toStatus,
  auth,
  options,
}: notifyReadListParams): Promise<NotificationThreadList> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/notifications`,
    query: {
      last_read_at: lastReadAt,
      all: all,
      "status-types": statusTypes,
      "to-status": toStatus,
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
