import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";

export interface issueResetTimeParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue to add tracked time to */
  index: number;
}
/**
 * Reset a tracked time of an issue
 */
export default function issueResetTime({
  owner,
  repo,
  index,
  auth,
  options,
}: issueResetTimeParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times`,
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
