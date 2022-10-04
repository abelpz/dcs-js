import { baseParams, request } from "../utils";
import { Commit } from "../models/commit";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoGetSingleCommitParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** a git ref or commit sha */
  sha: string;
}
/**
 * Get a single commit from a repository
 */
export default function repoGetSingleCommit({
  owner,
  repo,
  sha,
  auth,
  options,
}: repoGetSingleCommitParams): Promise<Commit> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/commits/${sha}`,
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
