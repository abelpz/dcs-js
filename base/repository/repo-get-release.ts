import { baseParams, request } from "../utils";
import { Release } from "../models/release";
import { NotFound } from "../models/not-found";

export interface repoGetReleaseParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the release to get */
  id: number;
}
/**
 * Get a release
 */
export default function repoGetRelease({
  owner,
  repo,
  id,
  auth,
  options,
}: repoGetReleaseParams): Promise<Release> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}`,
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
