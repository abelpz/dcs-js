import { baseParams, request } from "../utils";
import { ReactionList } from "../models/reaction-list";
import { Forbidden } from "../models/forbidden";

export interface issueGetIssueReactionsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get a list reactions of an issue
 */
export default function issueGetIssueReactions({
  owner,
  repo,
  index,
  page,
  limit,
  auth,
  options,
}: issueGetIssueReactionsParams): Promise<ReactionList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
    query: {
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
