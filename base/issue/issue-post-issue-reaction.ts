import { baseParams, request } from "../utils";
import { EditReactionOption } from "../models/edit-reaction-option";
import { Reaction } from "../models/reaction";
import { Forbidden } from "../models/forbidden";

export interface issuePostIssueReactionParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  body: EditReactionOption;
}
/**
 * Add a reaction to an issue
 */
export default function issuePostIssueReaction({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issuePostIssueReactionParams): Promise<Reaction> {
  const requestParams = {
    method: "POST",
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
