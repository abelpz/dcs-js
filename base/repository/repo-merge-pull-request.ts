import { baseParams, request } from "../utils";
import { MergePullRequestOption } from "../models/merge-pull-request-option";
import { Empty } from "../models/empty";
import { Error } from "../models/error";

export interface repoMergePullRequestParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request to merge */
  index: number;
  body: MergePullRequestOption;
}
/**
 * Merge a pull request
 */
export default function repoMergePullRequest({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: repoMergePullRequestParams): Promise<Empty> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
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
