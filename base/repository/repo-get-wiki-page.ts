import { baseParams, request } from "../utils";
import { WikiPage } from "../models/wiki-page";
import { NotFound } from "../models/not-found";

export interface repoGetWikiPageParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of the page */
  pageName: string;
}
/**
 * Get a wiki page
 */
export default function repoGetWikiPage({
  owner,
  repo,
  pageName,
  auth,
  options,
}: repoGetWikiPageParams): Promise<WikiPage> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
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
