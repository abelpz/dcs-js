import { baseParams, request } from "../utils";
import { GitHook } from "../models/git-hook";
import { NotFound } from "../models/not-found";

export interface repoGetGitHookParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the hook to get */
  id: string;
}
/**
 * Get a Git hook
 */
export default function repoGetGitHook({
  owner,
  repo,
  id,
  auth,
  options,
}: repoGetGitHookParams): Promise<GitHook> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/git/${id}`,
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
