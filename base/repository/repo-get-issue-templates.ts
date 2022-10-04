import { baseParams, request } from "../utils";
import { IssueTemplates } from "../models/issue-templates";

export interface repoGetIssueTemplatesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Get available issue templates for a repository
 */
export default function repoGetIssueTemplates({
  owner,
  repo,
  auth,
  options,
}: repoGetIssueTemplatesParams): Promise<IssueTemplates> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issue_templates`,
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
