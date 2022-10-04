import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface userCurrentPutStarParams extends baseParams {
  /** owner of the repo to star */
  owner: string;
  /** name of the repo to star */
  repo: string;
}
/**
 * Star the given repo
 */
export default function userCurrentPutStar({
  owner,
  repo,
  auth,
  options,
}: userCurrentPutStarParams): Promise<Empty> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/user/starred/${owner}/${repo}`,
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
