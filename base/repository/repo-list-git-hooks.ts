import { baseParams, request } from "../utils";
import { GitHookList } from "../models/git-hook-list";

export interface repoListGitHooksParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * List the Git hooks in a repository
 */
export default function repoListGitHooks({
  owner,
  repo,
  auth,
  options,
}: repoListGitHooksParams): Promise<GitHookList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/git`,
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
