import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface adminCronRunParams extends baseParams {
  /** task to run */
  task: string;
}
/**
 * Run cron task
 */
export default function adminCronRun({
  task,
  auth,
  options,
}: adminCronRunParams): Promise<Empty> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/cron/${task}`,
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
