import { baseParams, request } from "../utils";
import { BranchProtectionList } from "../models/branch-protection-list";

export interface repoListBranchProtectionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * List branch protections for a repository
 */
export default function repoListBranchProtection({
  owner,
  repo,
  auth,
  options,
}: repoListBranchProtectionParams): Promise<BranchProtectionList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections`,
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
