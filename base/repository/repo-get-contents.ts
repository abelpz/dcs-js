import { baseParams, request } from "../utils";
import { ContentsResponse } from "../models/contents-response";
import { NotFound } from "../models/not-found";

export interface repoGetContentsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** path of the dir, file, symlink or submodule in the repo */
  filepath: string;
  /** The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
  ref?: string;
}
/**
 * Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
 */
export default function repoGetContents({
  owner,
  repo,
  filepath,
  ref,
  auth,
  options,
}: repoGetContentsParams): Promise<ContentsResponse> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents/${filepath}`,
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
