import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";

export interface issueDeleteTimeParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** id of time to delete */
  id: number;
}
/**
 * Delete specific tracked time
 */
export default function issueDeleteTime({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}: issueDeleteTimeParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/times/${id}`,
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
