import { baseParams, request } from "../utils";
import { IssueLabelsOption } from "../models/issue-labels-option";
import { LabelList } from "../models/label-list";
import { Forbidden } from "../models/forbidden";

export interface issueAddLabelParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the issue */
  index: number;
  body: IssueLabelsOption;
}
/**
 * Add a label to an issue
 */
export default function issueAddLabel({
  owner,
  repo,
  index,
  body,
  auth,
  options,
}: issueAddLabelParams): Promise<LabelList> {
  const requestParams = {
    method: "POST",
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
