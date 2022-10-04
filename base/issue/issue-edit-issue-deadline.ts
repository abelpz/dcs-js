import { baseParams, request } from "../utils";
import { EditDeadlineOption } from "../models/edit-deadline-option";
import { IssueDeadline } from "../models/issue-deadline";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface issueEditIssueDeadlineParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue to create or update a deadline on */
  index: number;
  body: EditDeadlineOption;
}
/**
 * Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
 */
export default function issueEditIssueDeadline({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issueEditIssueDeadlineParams): Promise<IssueDeadline> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/deadline`,
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
