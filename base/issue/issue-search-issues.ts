import { baseParams, request } from "../utils";
import { IssueList } from "../models/issue-list";

export interface issueSearchIssuesParams extends baseParams {
  /** whether issue is open or closed */
  state?: string;
  /** comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
  labels?: string;
  /** comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded */
  milestones?: string;
  /** search string */
  q?: string;
  /** repository to prioritize in the results */
  priorityRepoId?: number;
  /** filter by type (issues / pulls) if set */
  type?: string;
  /** Only show notifications updated after the given time. This is a timestamp in RFC 3339 format */
  since?: string;
  /** Only show notifications updated before the given time. This is a timestamp in RFC 3339 format */
  before?: string;
  /** filter (issues / pulls) assigned to you, default is false */
  assigned?: boolean;
  /** filter (issues / pulls) created by you, default is false */
  created?: boolean;
  /** filter (issues / pulls) mentioning you, default is false */
  mentioned?: boolean;
  /** filter pulls requesting your review, default is false */
  reviewRequested?: boolean;
  /** filter by owner */
  owner?: string;
  /** filter by team (requires organization owner parameter to be provided) */
  team?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Search for issues across the repositories that the user has access to
 */
export default function issueSearchIssues({
  state,
  labels,
  milestones,
  q,
  priorityRepoId,
  type,
  since,
  before,
  assigned,
  created,
  mentioned,
  reviewRequested,
  owner,
  team,
  page,
  limit,
  auth,
  options,
}: issueSearchIssuesParams): Promise<IssueList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/issues/search`,
    query: {
      state: state,
      labels: labels,
      milestones: milestones,
      q: q,
      priority_repo_id: priorityRepoId,
      type: type,
      since: since,
      before: before,
      assigned: assigned,
      created: created,
      mentioned: mentioned,
      review_requested: reviewRequested,
      owner: owner,
      team: team,
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
