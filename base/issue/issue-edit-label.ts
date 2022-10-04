import { baseParams, request } from "../utils";
import { EditLabelOption } from "../models/edit-label-option";
import { Label } from "../models/label";
import { ValidationError } from "../models/validation-error";

export interface issueEditLabelParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the label to edit */
  id: number;
  body: EditLabelOption;
}
/**
 * Update a label
 */
export default function issueEditLabel({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: issueEditLabelParams): Promise<Label> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels/${id}`,
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
