import { baseParams, request } from "../utils";
import { WikiCommitList } from "../models/wiki-commit-list";
import { NotFound } from "../models/not-found";

export interface repoGetWikiPageRevisionsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of the page */
  pageName: string;
  /** page number of results to return (1-based) */
  page?: number;
}
/**
 * Get revisions of a wiki page
 */
export default function repoGetWikiPageRevisions({
  owner,
  repo,
  pageName,
  page,
  auth,
  options,
}: repoGetWikiPageRevisionsParams): Promise<WikiCommitList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/revisions/${pageName}`,
    query: {
      page: page,
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
