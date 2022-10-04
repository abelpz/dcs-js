import { baseParams, request } from "../utils";
import { GitBlobResponse } from "../models/git-blob-response";
import { Error } from "../models/error";

export interface GetBlobParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** sha of the commit */
  sha: string;
}
/**
 * Gets the blob of a repository.
 */
export default function GetBlob({
  owner,
  repo,
  sha,
  auth,
  options,
}: GetBlobParams): Promise<GitBlobResponse> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/blobs/${sha}`,
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
