import { baseParams, request } from "../utils";
import { EditIssueOption } from "../models/edit-issue-option";
import { Issue } from "../models/issue";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";
import { Error } from "../models/error";

export interface issueEditIssueParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue to edit */
  index: number;
  body: EditIssueOption;
}
/**
 * Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
 */
export default function issueEditIssue({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issueEditIssueParams): Promise<Issue> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}`,
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
