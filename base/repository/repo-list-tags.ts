import { baseParams, request } from "../utils";
import { TagList } from "../models/tag-list";

export interface repoListTagsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results, default maximum page size is 50 */
  limit?: number;
}
/**
 * List a repository&#39;s tags
 */
export default function repoListTags({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: repoListTagsParams): Promise<TagList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/tags`,
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
