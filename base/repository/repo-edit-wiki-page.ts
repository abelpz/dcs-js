import { baseParams, request } from "../utils";
import { CreateWikiPageOptions } from "../models/create-wiki-page-options";
import { WikiPage } from "../models/wiki-page";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";

export interface repoEditWikiPageParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of the page */
  pageName: string;
  body: CreateWikiPageOptions;
}
/**
 * Edit a wiki page
 */
export default function repoEditWikiPage({
  owner,
  repo,
  pageName,
  body,
  auth,
  options,
}: repoEditWikiPageParams): Promise<WikiPage> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/page/${pageName}`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
