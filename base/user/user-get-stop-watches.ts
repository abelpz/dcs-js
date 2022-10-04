import { baseParams, request } from "../utils";
import { StopWatchList } from "../models/stop-watch-list";

export interface userGetStopWatchesParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get list of all existing stopwatches
 */
export default function userGetStopWatches({
  page,
  limit,
  auth,
  options,
}: userGetStopWatchesParams): Promise<StopWatchList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/stopwatches`,
    query: {
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
