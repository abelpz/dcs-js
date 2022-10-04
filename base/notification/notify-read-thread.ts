import { baseParams, request } from "../utils";
import { NotificationThread } from "../models/notification-thread";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface notifyReadThreadParams extends baseParams {
  /** id of notification thread */
  id: string;
  /** Status to mark notifications as */
  toStatus?: string;
}
/**
 * Mark notification thread as read by ID
 */
export default function notifyReadThread({
  id,
  toStatus,
  auth,
  options,
}: notifyReadThreadParams): Promise<NotificationThread> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/notifications/threads/${id}`,
    query: {
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
