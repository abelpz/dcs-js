import { baseParams, request } from "../utils";
import { EditReleaseOption } from "../models/edit-release-option";
import { Release } from "../models/release";
import { NotFound } from "../models/not-found";

export interface repoEditReleaseParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the release to edit */
  id: number;
  body: EditReleaseOption;
}
/**
 * Update a release
 */
export default function repoEditRelease({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: repoEditReleaseParams): Promise<Release> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}
