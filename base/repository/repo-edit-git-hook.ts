import { baseParams, request } from "../utils";
import { EditGitHookOption } from "../models/edit-git-hook-option";
import { GitHook } from "../models/git-hook";
import { NotFound } from "../models/not-found";

export interface repoEditGitHookParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the hook to get */
  id: string;
  body: EditGitHookOption;
}
/**
 * Edit a Git hook in a repository
 */
export default function repoEditGitHook({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: repoEditGitHookParams): Promise<GitHook> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/git/${id}`,
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
