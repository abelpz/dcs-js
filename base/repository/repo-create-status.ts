import { baseParams, request } from "../utils";
import { CreateStatusOption } from "../models/create-status-option";
import { CommitStatus } from "../models/commit-status";
import { Error } from "../models/error";

export interface repoCreateStatusParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** sha of the commit */
  sha: string;
  body: CreateStatusOption;
}
/**
 * Create a commit status
 */
export default function repoCreateStatus({
  owner,
  repo,
  sha,
  body,
  auth,
  options,
}: repoCreateStatusParams): Promise<CommitStatus> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/statuses/${sha}`,
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
