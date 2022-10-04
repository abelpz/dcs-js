import { baseParams, request } from "../utils";
import { EditIssueCommentOption } from "../models/edit-issue-comment-option";
import { Comment } from "../models/comment";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface issueEditCommentDeprecatedParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** this parameter is ignored */
  index: number;
  /** id of the comment to edit */
  id: number;
  body: EditIssueCommentOption;
}
/**
 * Edit a comment
 */
export default function issueEditCommentDeprecated({
  owner,
  repo,
  index,
  id,
  body,
  auth,
  options,
}: issueEditCommentDeprecatedParams): Promise<Comment> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments/${id}`,
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
