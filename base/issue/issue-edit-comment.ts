import { baseParams, request } from "../utils";
import { EditIssueCommentOption } from "../models/edit-issue-comment-option";
import { Comment } from "../models/comment";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface issueEditCommentParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the comment to edit */
  id: number;
  body: EditIssueCommentOption;
}
/**
 * Edit a comment
 */
export default function issueEditComment({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: issueEditCommentParams): Promise<Comment> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}`,
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
