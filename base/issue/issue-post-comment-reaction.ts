import { baseParams, request } from "../utils";
import { EditReactionOption } from "../models/edit-reaction-option";
import { Reaction } from "../models/reaction";
import { Forbidden } from "../models/forbidden";

export interface issuePostCommentReactionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the comment to edit */
  id: number;
  body: EditReactionOption;
}
/**
 * Add a reaction to a comment of an issue
 */
export default function issuePostCommentReaction({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: issuePostCommentReactionParams): Promise<Reaction> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}/reactions`,
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
