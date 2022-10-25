import { baseParams, request } from "../utils";
import { UpdateGitRefOption } from "../models/update-git-ref-option";
import { Reference } from "../models/reference";
import { NotFound } from "../models/not-found";

export interface repoUpdateGitRefParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of the ref to update */
  ref: string;
  body: UpdateGitRefOption;
}
/**
 * Update a reference
 */
export default function repoUpdateGitRef({
  owner,
  repo,
  ref,
  body,
  auth,
  options,
}: repoUpdateGitRefParams): Promise<Reference> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/refs/${ref}`,
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
