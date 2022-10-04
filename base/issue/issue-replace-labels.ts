import { baseParams, request } from "../utils";
import { IssueLabelsOption } from "../models/issue-labels-option";
import { LabelList } from "../models/label-list";
import { Forbidden } from "../models/forbidden";

export interface issueReplaceLabelsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  body: IssueLabelsOption;
}
/**
 * Replace an issue&#39;s labels
 */
export default function issueReplaceLabels({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issueReplaceLabelsParams): Promise<LabelList> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/issues/${index}/labels`,
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
