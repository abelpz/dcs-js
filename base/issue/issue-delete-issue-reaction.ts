import { baseParams, request } from "../utils";
import { EditReactionOption } from "../models/edit-reaction-option";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface issueDeleteIssueReactionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  body: EditReactionOption;
}
/**
 * Remove a reaction from an issue
 */
export default function issueDeleteIssueReaction({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issueDeleteIssueReactionParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/reactions`,
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
