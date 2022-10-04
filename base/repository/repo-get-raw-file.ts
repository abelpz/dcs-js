import { baseParams, request } from "../utils";
import { NotFound } from "../models/not-found";

export interface repoGetRawFileParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** filepath of the file to get */
  filepath: string;
  /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
  ref?: string;
}
/**
 * Get a file from a repository
 */
export default function repoGetRawFile({
  owner,
  repo,
  filepath,
  ref,
  auth,
  options,
}: repoGetRawFileParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/raw/${filepath}`,
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
