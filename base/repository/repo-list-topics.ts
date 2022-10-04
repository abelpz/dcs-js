import { baseParams, request } from "../utils";
import { TopicNames } from "../models/topic-names";

export interface repoListTopicsParams extends baseParams {
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
 * Get list of topics that a repository has
 */
export default function repoListTopics({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: repoListTopicsParams): Promise<TopicNames> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/topics`,
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
