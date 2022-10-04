import { baseParams, request } from "../utils";
import { CommitList } from "../models/commit-list";
import { NotFound } from "../models/not-found";
import { EmptyRepository } from "../models/empty-repository";

export interface repoGetAllCommitsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** SHA or branch to start listing commits from (usually &#39;master&#39;) */
  sha?: string;
  /** filepath of a file/dir */
  path?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results (ignored if used with &#39;path&#39;) */
  limit?: number;
}
/**
 * Get a list of all commits from a repository
 */
export default function repoGetAllCommits({
  owner,
  repo,
  sha,
  path,
  page,
  limit,
  auth,
  options,
}: repoGetAllCommitsParams): Promise<CommitList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/commits`,
    query: {
      sha: sha,
      path: path,
      page: page,
      limit: limit,
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
