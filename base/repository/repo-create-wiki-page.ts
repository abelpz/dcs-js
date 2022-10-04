import { baseParams, request } from "../utils";
import { CreateWikiPageOptions } from "../models/create-wiki-page-options";
import { WikiPage } from "../models/wiki-page";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";

export interface repoCreateWikiPageParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateWikiPageOptions;
}
/**
 * Create a wiki page
 */
export default function repoCreateWikiPage({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateWikiPageParams): Promise<WikiPage> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/wiki/new`,
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
