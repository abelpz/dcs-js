import { baseParams, request } from "../utils";
import { LabelList } from "../models/label-list";

export interface issueListLabelsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get all of a repository&#39;s labels
 */
export default function issueListLabels({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: issueListLabelsParams): Promise<LabelList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels`,
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
