import { baseParams, request } from "../utils";
import { Label } from "../models/label";

export interface issueGetLabelParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the label to get */
  id: number;
}
/**
 * Get a single label
 */
export default function issueGetLabel({
  owner,
  repo,
  id,
  auth,
  options,
}: issueGetLabelParams): Promise<Label> {
  const requestParams = {
    method: "GET",
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
