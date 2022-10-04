import { baseParams, request } from "../utils";
import { IssueList } from "../models/issue-list";

export interface issueListIssuesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** whether issue is open or closed */
  state?: string;
  /** comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
  labels?: string;
  /** search string */
  q?: string;
  /** filter by type (issues / pulls) if set */
  type?: string;
  /** comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded */
  milestones?: string;
  /** Only show items updated after the given time. This is a timestamp in RFC 3339 format */
  since?: string;
  /** Only show items updated before the given time. This is a timestamp in RFC 3339 format */
  before?: string;
  /** Only show items which were created by the the given user */
  createdBy?: string;
  /** Only show items for which the given user is assigned */
  assignedBy?: string;
  /** Only show items in which the given user was mentioned */
  mentionedBy?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a repository&#39;s issues
 */
export default function issueListIssues({
  owner,
  repo,
  state,
  labels,
  q,
  type,
  milestones,
  since,
  before,
  createdBy,
  assignedBy,
  mentionedBy,
  page,
  limit,
  auth,
  options,
}: issueListIssuesParams): Promise<IssueList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues`,
    query: {
      state: state,
      labels: labels,
      q: q,
      type: type,
      milestones: milestones,
      since: since,
      before: before,
      created_by: createdBy,
      assigned_by: assignedBy,
      mentioned_by: mentionedBy,
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
