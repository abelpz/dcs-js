import { baseParams, request } from "../utils";
import { WikiPageList } from "../models/wiki-page-list";
import { NotFound } from "../models/not-found";

export interface repoGetWikiPagesParams extends baseParams {
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
 * Get all wiki pages
 */
export default function repoGetWikiPages({
  owner,
  repo,
  page,
  limit,
  auth,
  options,
}: repoGetWikiPagesParams): Promise<WikiPageList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/pages`,
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
