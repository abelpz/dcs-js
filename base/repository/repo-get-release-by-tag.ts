import { baseParams, request } from "../utils";
import { Release } from "../models/release";
import { NotFound } from "../models/not-found";

export interface repoGetReleaseByTagParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** tag name of the release to get */
  tag: string;
}
/**
 * Get a release by tag name
 */
export default function repoGetReleaseByTag({
  owner,
  repo,
  tag,
  auth,
  options,
}: repoGetReleaseByTagParams): Promise<Release> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/tags/${tag}`,
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
