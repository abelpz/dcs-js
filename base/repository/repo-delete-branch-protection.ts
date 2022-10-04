import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface repoDeleteBranchProtectionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of protected branch */
  name: string;
}
/**
 * Delete a specific branch protection for the repository
 */
export default function repoDeleteBranchProtection({
  owner,
  repo,
  name,
  auth,
  options,
}: repoDeleteBranchProtectionParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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
