import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface issueDeleteCommentDeprecatedParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** this parameter is ignored */
  index: number;
  /** id of comment to delete */
  id: number;
}
/**
 * Delete a comment
 */
export default function issueDeleteCommentDeprecated({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}: issueDeleteCommentDeprecatedParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/comments/${id}`,
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
