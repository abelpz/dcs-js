import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface issueRemoveLabelParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  /** id of the label to remove */
  id: number;
}
/**
 * Remove a label from an issue
 */
export default function issueRemoveLabel({
  owner,
  repo,
  index,
  id,
  auth,
  options,
}: issueRemoveLabelParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels/${id}`,
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
