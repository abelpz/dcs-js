import { baseParams, request } from "../utils";
import { ContentsListResponse } from "../models/contents-list-response";
import { NotFound } from "../models/not-found";

export interface repoGetContentsListParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
  ref?: string;
}
/**
 * Gets the metadata of all the entries of the root dir
 */
export default function repoGetContentsList({
  owner,
  repo,
  ref,
  auth,
  options,
}: repoGetContentsListParams): Promise<ContentsListResponse> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents`,
    query: {
      ref: ref,
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
