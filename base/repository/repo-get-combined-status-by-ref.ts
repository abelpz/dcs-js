import { baseParams, request } from "../utils";
import { CombinedStatus } from "../models/combined-status";
import { Error } from "../models/error";

export interface repoGetCombinedStatusByRefParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of branch/tag/commit */
  ref: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get a commit&#39;s combined status, by branch/tag/commit reference
 */
export default function repoGetCombinedStatusByRef({
  owner,
  repo,
  ref,
  page,
  limit,
  auth,
  options,
}: repoGetCombinedStatusByRefParams): Promise<CombinedStatus> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/commits/${ref}/status`,
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
