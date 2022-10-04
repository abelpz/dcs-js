import { baseParams, request } from "../utils";
import { CreateBranchProtectionOption } from "../models/create-branch-protection-option";
import { BranchProtection } from "../models/branch-protection";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoCreateBranchProtectionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateBranchProtectionOption;
}
/**
 * Create a branch protections for a repository
 */
export default function repoCreateBranchProtection({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateBranchProtectionParams): Promise<BranchProtection> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections`,
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
