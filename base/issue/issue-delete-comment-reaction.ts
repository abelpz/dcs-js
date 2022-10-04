import { baseParams, request } from "../utils";
import { EditReactionOption } from "../models/edit-reaction-option";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface issueDeleteCommentReactionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the comment to edit */
  id: number;
  body: EditReactionOption;
}
/**
 * Remove a reaction from a comment of an issue
 */
export default function issueDeleteCommentReaction({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: issueDeleteCommentReactionParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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
