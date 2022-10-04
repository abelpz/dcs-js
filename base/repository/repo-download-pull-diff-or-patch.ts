import { baseParams, request } from "../utils";
import { String } from "../models/string";
import { NotFound } from "../models/not-found";

export interface repoDownloadPullDiffOrPatchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request to get */
  index: number;
  /** whether the output is diff or patch */
  diffType: string;
  /** whether to include binary file changes. if true, the diff is applicable with `git apply` */
  binary?: boolean;
}
/**
 * Get a pull request diff or patch
 */
export default function repoDownloadPullDiffOrPatch({
  owner,
  repo,
  index,
  diffType,
  binary,
  auth,
  options,
}: repoDownloadPullDiffOrPatchParams): Promise<String> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}.${diffType}`,
    query: {
      binary: binary,
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "text/plain",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
