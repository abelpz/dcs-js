import { baseParams, request } from "../utils";
import { Comment } from "../models/comment";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface issueGetCommentParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the comment */
  id: number;
}
/**
 * Get a comment
 */
export default function issueGetComment({
  owner,
  repo,
  id,
  auth,
  options,
}: issueGetCommentParams): Promise<Comment> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/comments/${id}`,
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
