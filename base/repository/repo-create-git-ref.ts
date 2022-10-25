import { baseParams, request } from "../utils";
import { CreateGitRefOption } from "../models/create-git-ref-option";
import { Reference } from "../models/reference";
import { NotFound } from "../models/not-found";

export interface repoCreateGitRefParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateGitRefOption;
}
/**
 * Create a reference
 */
export default function repoCreateGitRef({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateGitRefParams): Promise<Reference> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/refs`,
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
