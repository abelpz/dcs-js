import { baseParams, request } from "../utils";
import { Branch } from "../models/branch";
import { NotFound } from "../models/not-found";

export interface repoGetBranchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** branch to get */
  branch: string;
}
/**
 * Retrieve a specific branch from a repository, including its effective branch protection
 */
export default function repoGetBranch({
  owner,
  repo,
  branch,
  auth,
  options,
}: repoGetBranchParams): Promise<Branch> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branches/${branch}`,
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
