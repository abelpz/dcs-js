import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Error } from "../models/error";
import { NotFound } from "../models/not-found";

export interface repoDeleteBranchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** branch to delete */
  branch: string;
}
/**
 * Delete a specific branch from a repository
 */
export default function repoDeleteBranch({
  owner,
  repo,
  branch,
  auth,
  options,
}: repoDeleteBranchParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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
