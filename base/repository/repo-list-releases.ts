import { baseParams, request } from "../utils";
import { ReleaseList } from "../models/release-list";

export interface repoListReleasesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** filter (exclude / include) drafts, if you dont have repo write access none will show */
  draft?: boolean;
  /** filter (exclude / include) pre-releases */
  preRelease?: boolean;
  /** page size of results, deprecated - use limit */
  perPage?: number;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a repo&#39;s releases
 */
export default function repoListReleases({
  owner,
  repo,
  draft,
  preRelease,
  perPage,
  page,
  limit,
  auth,
  options,
}: repoListReleasesParams): Promise<ReleaseList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases`,
    query: {
      draft: draft,
      "pre-release": preRelease,
      per_page: perPage,
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
