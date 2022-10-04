import { baseParams, request } from "../utils";
import { EditPullRequestOption } from "../models/edit-pull-request-option";
import { PullRequest } from "../models/pull-request";
import { Forbidden } from "../models/forbidden";
import { Error } from "../models/error";
import { ValidationError } from "../models/validation-error";

export interface repoEditPullRequestParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request to edit */
  index: number;
  body: EditPullRequestOption;
}
/**
 * Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
 */
export default function repoEditPullRequest({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: repoEditPullRequestParams): Promise<PullRequest> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}`,
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
