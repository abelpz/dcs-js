import { baseParams, request } from "../utils";
import { ReferenceList } from "../models/reference-list";
import { NotFound } from "../models/not-found";

export interface repoListAllGitRefsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Get specified ref or filtered repository&#39;s refs
 */
export default function repoListAllGitRefs({
  owner,
  repo,
  auth,
  options,
}: repoListAllGitRefsParams): Promise<ReferenceList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/refs`,
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
