import { baseParams, request } from "../utils";
import { CreateBranchRepoOption } from "../models/create-branch-repo-option";
import { Branch } from "../models/branch";

export interface repoCreateBranchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateBranchRepoOption;
}
/**
 * Create a branch
 */
export default function repoCreateBranch({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateBranchParams): Promise<Branch> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branches`,
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
