import { baseParams, request } from "../utils";
import { CommentList } from "../models/comment-list";

export interface issueGetCommentsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** if provided, only comments updated since the specified time are returned. */
  since?: string;
  /** if provided, only comments updated before the provided time are returned. */
  before?: string;
}
/**
 * List all comments on an issue
 */
export default function issueGetComments({
  owner,
  repo,
  index,
  since,
  before,
  auth,
  options,
}: issueGetCommentsParams): Promise<CommentList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments`,
    query: {
      since: since,
      before: before,
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
