import { baseParams, request } from "../utils";
import { Tag } from "../models/tag";
import { NotFound } from "../models/not-found";

export interface repoGetTagParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of tag */
  tag: string;
}
/**
 * Get the tag of a repository by tag name
 */
export default function repoGetTag({
  owner,
  repo,
  tag,
  auth,
  options,
}: repoGetTagParams): Promise<Tag> {
  const requestParams = {
    method: "GET",
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
