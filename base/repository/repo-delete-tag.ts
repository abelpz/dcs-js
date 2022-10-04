import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";
import { Conflict } from "../models/conflict";

export interface repoDeleteTagParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of tag to delete */
  tag: string;
}
/**
 * Delete a repository&#39;s tag by name
 */
export default function repoDeleteTag({
  owner,
  repo,
  tag,
  auth,
  options,
}: repoDeleteTagParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/tags/${tag}`,
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
