import { baseParams, request } from "../utils";
import { NotificationThread } from "../models/notification-thread";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface notifyGetThreadParams extends baseParams {
  /** id of notification thread */
  id: string;
}
/**
 * Get notification thread by ID
 */
export default function notifyGetThread({
  id,
  auth,
  options,
}: notifyGetThreadParams): Promise<NotificationThread> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/notifications/threads/${id}`,
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
