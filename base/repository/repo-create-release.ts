import { baseParams, request } from "../utils";
import { CreateReleaseOption } from "../models/create-release-option";
import { Release } from "../models/release";
import { NotFound } from "../models/not-found";
import { Error } from "../models/error";

export interface repoCreateReleaseParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateReleaseOption;
}
/**
 * Create a release
 */
export default function repoCreateRelease({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateReleaseParams): Promise<Release> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases`,
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
