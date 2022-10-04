import { baseParams, request } from "../utils";
import { ReactionList } from "../models/reaction-list";
import { Forbidden } from "../models/forbidden";

export interface issueGetCommentReactionsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the comment to edit */
  id: number;
}
/**
 * Get a list of reactions from a comment of an issue
 */
export default function issueGetCommentReactions({
  owner,
  repo,
  id,
  auth,
  options,
}: issueGetCommentReactionsParams): Promise<ReactionList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
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
