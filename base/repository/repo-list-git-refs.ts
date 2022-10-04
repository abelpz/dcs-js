import { baseParams, request } from "../utils";
import { ReferenceList } from "../models/reference-list";
import { NotFound } from "../models/not-found";

export interface repoListGitRefsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** part or full name of the ref */
  ref: string;
}
/**
 * Get specified ref or filtered repository&#39;s refs
 */
export default function repoListGitRefs({
  owner,
  repo,
  ref,
  auth,
  options,
}: repoListGitRefsParams): Promise<ReferenceList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/refs/${ref}`,
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
