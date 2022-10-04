import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface userCurrentDeleteStarParams extends baseParams {
  /** owner of the repo to unstar */
  owner: string;
  /** name of the repo to unstar */
  repo: string;
}
/**
 * Unstar the given repo
 */
export default function userCurrentDeleteStar({
  owner,
  repo,
  auth,
  options,
}: userCurrentDeleteStarParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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
