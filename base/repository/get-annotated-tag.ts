import { baseParams, request } from "../utils";
import { AnnotatedTag } from "../models/annotated-tag";
import { Error } from "../models/error";

export interface GetAnnotatedTagParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags. */
  sha: string;
}
/**
 * Gets the tag object of an annotated tag (not lightweight tags)
 */
export default function GetAnnotatedTag({
  owner,
  repo,
  sha,
  auth,
  options,
}: GetAnnotatedTagParams): Promise<AnnotatedTag> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/tags/${sha}`,
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
