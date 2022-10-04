import { baseParams, request } from "../utils";
import { CreateIssueCommentOption } from "../models/create-issue-comment-option";
import { Comment } from "../models/comment";
import { Forbidden } from "../models/forbidden";

export interface issueCreateCommentParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  body: CreateIssueCommentOption;
}
/**
 * Add a comment to an issue
 */
export default function issueCreateComment({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issueCreateCommentParams): Promise<Comment> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments`,
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
