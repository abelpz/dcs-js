import { baseParams, request } from "../utils";
import { TrackedTimeList } from "../models/tracked-time-list";

export interface userCurrentTrackedTimesParams extends baseParams {
  /** Only show times updated after the given time. This is a timestamp in RFC 3339 format */
  since?: string;
  /** Only show times updated before the given time. This is a timestamp in RFC 3339 format */
  before?: string;
}
/**
 * List the current user&#39;s tracked times
 */
export default function userCurrentTrackedTimes({
  since,
  before,
  auth,
  options,
}: userCurrentTrackedTimesParams): Promise<TrackedTimeList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/times`,
    query: {
      since: since,
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
