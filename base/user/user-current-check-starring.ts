import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface userCurrentCheckStarringParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Whether the authenticated is starring the repo
 */
export default function userCurrentCheckStarring({
  owner,
  repo,
  auth,
  options,
}: userCurrentCheckStarringParams): Promise<Empty> {
  const requestParams = {
    method: "GET",
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
