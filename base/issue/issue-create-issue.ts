import { baseParams, request } from "../utils";
import { CreateIssueOption } from "../models/create-issue-option";
import { Issue } from "../models/issue";
import { Forbidden } from "../models/forbidden";
import { Error } from "../models/error";
import { ValidationError } from "../models/validation-error";

export interface issueCreateIssueParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateIssueOption;
}
/**
 * Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
 */
export default function issueCreateIssue({
  owner,
  repo,
  body,
  auth,
  options,
}: issueCreateIssueParams): Promise<Issue> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues`,
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
