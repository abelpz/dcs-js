import { baseParams, request } from "../utils";
import { CommentList } from "../models/comment-list";

export interface issueGetRepoCommentsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** if provided, only comments updated since the provided time are returned. */
  since?: string;
  /** if provided, only comments updated before the provided time are returned. */
  before?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List all comments in a repository
 */
export default function issueGetRepoComments({
  owner,
  repo,
  since,
  before,
  page,
  limit,
  auth,
  options,
}: issueGetRepoCommentsParams): Promise<CommentList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments`,
    query: {
      since: since,
      before: before,
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
