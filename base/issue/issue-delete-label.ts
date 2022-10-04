import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface issueDeleteLabelParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the label to delete */
  id: number;
}
/**
 * Delete a label
 */
export default function issueDeleteLabel({
  owner,
  repo,
  id,
  auth,
  options,
}: issueDeleteLabelParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels/${id}`,
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
