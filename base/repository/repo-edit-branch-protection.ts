import { baseParams, request } from "../utils";
import { EditBranchProtectionOption } from "../models/edit-branch-protection-option";
import { BranchProtection } from "../models/branch-protection";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoEditBranchProtectionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of protected branch */
  name: string;
  body: EditBranchProtectionOption;
}
/**
 * Edit a branch protections for a repository. Only fields that are set will be changed
 */
export default function repoEditBranchProtection({
  owner,
  repo,
  name,
  body,
  auth,
  options,
}: repoEditBranchProtectionParams): Promise<BranchProtection> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/branch_protections/${name}`,
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
