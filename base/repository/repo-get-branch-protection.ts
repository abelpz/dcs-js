import { baseParams, request } from "../utils";
import { BranchProtection } from "../models/branch-protection";
import { NotFound } from "../models/not-found";

export interface repoGetBranchProtectionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of protected branch */
  name: string;
}
/**
 * Get a specific branch protection for the repository
 */
export default function repoGetBranchProtection({
  owner,
  repo,
  name,
  auth,
  options,
}: repoGetBranchProtectionParams): Promise<BranchProtection> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections/${name}`,
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
