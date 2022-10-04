import { baseParams, request } from "../utils";
import { GitTreeResponse } from "../models/git-tree-response";
import { Error } from "../models/error";

export interface GetTreeParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** sha of the commit */
  sha: string;
  /** show all directories and files */
  recursive?: boolean;
  /** page number; the &#39;truncated&#39; field in the response will be true if there are still more items after this page, false if the last page */
  page?: number;
  /** number of items per page */
  perPage?: number;
}
/**
 * Gets the tree of a repository.
 */
export default function GetTree({
  owner,
  repo,
  sha,
  recursive,
  page,
  perPage,
  auth,
  options,
}: GetTreeParams): Promise<GitTreeResponse> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/trees/${sha}`,
    query: {
      recursive: recursive,
      page: page,
      per_page: perPage,
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
