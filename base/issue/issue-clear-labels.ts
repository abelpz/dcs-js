import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface issueClearLabelsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
}
/**
 * Remove all labels from an issue
 */
export default function issueClearLabels({
  owner,
  repo,
  index,
  auth,
  options,
}: issueClearLabelsParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels`,
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
