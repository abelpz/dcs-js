import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface repoDeleteReleaseByTagParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** tag name of the release to delete */
  tag: string;
}
/**
 * Delete a release by tag name
 */
export default function repoDeleteReleaseByTag({
  owner,
  repo,
  tag,
  auth,
  options,
}: repoDeleteReleaseByTagParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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
