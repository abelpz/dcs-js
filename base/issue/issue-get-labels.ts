import { baseParams, request } from "../utils";
import { LabelList } from "../models/label-list";
import { NotFound } from "../models/not-found";

export interface issueGetLabelsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
}
/**
 * Get an issue&#39;s labels
 */
export default function issueGetLabels({
  owner,
  repo,
  index,
  auth,
  options,
}: issueGetLabelsParams): Promise<LabelList> {
  const requestParams = {
    method: "GET",
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
