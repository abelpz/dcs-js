import { baseParams, request } from "../utils";
import { String } from "../models/string";
import { NotFound } from "../models/not-found";

export interface repoDownloadCommitDiffOrPatchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** SHA of the commit to get */
  sha: string;
  /** whether the output is diff or patch */
  diffType: string;
}
/**
 * Get a commit&#39;s diff or patch
 */
export default function repoDownloadCommitDiffOrPatch({
  owner,
  repo,
  sha,
  diffType,
  auth,
  options,
}: repoDownloadCommitDiffOrPatchParams): Promise<String> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/commits/${sha}.${diffType}`,
    query: {
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
