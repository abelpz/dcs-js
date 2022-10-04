import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";
import { Error } from "../models/error";
import { ValidationError } from "../models/validation-error";

export interface repoUpdatePullRequestParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request to get */
  index: number;
  /** how to update pull request */
  style?: string;
}
/**
 * Merge PR&#39;s baseBranch into headBranch
 */
export default function repoUpdatePullRequest({
  owner,
  repo,
  index,
  style,
  auth,
  options,
}: repoUpdatePullRequestParams): Promise<Empty> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/update`,
    query: {
      style: style,
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
