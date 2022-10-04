import { baseParams, request } from "../utils";
import { TrackedTimeList } from "../models/tracked-time-list";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";

export interface userTrackedTimesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** username of user */
  user: string;
}
/**
 * List a user&#39;s tracked times in a repo
 */
export default function userTrackedTimes({
  owner,
  repo,
  user,
  auth,
  options,
}: userTrackedTimesParams): Promise<TrackedTimeList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/times/${user}`,
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
