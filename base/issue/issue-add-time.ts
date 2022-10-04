import { baseParams, request } from "../utils";
import { AddTimeOption } from "../models/add-time-option";
import { TrackedTime } from "../models/tracked-time";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";

export interface issueAddTimeParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  body: AddTimeOption;
}
/**
 * Add tracked time to a issue
 */
export default function issueAddTime({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issueAddTimeParams): Promise<TrackedTime> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
