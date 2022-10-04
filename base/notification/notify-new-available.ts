import { baseParams, request } from "../utils";
import { NotificationCount } from "../models/notification-count";

export interface notifyNewAvailableParams extends baseParams {}
/**
 * Check if unread notifications exist
 */
export default function notifyNewAvailable({
  auth,
  options,
}: notifyNewAvailableParams): Promise<NotificationCount> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/notifications/new`,
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
