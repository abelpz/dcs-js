import { baseParams, request } from "../utils";
import { CronList } from "../models/cron-list";
import { Forbidden } from "../models/forbidden";

export interface adminCronListParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List cron tasks
 */
export default function adminCronList({
  page,
  limit,
  auth,
  options,
}: adminCronListParams): Promise<CronList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/cron`,
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
