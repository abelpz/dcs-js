import { baseParams, request } from "../utils";
import { Issue } from "../models/issue";
import { NotFound } from "../models/not-found";

export interface issueGetIssueParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue to get */
  index: number;
}
/**
 * Get an issue
 */
export default function issueGetIssue({
  owner,
  repo,
  index,
  auth,
  options,
}: issueGetIssueParams): Promise<Issue> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}`,
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
