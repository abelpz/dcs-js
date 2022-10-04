import { baseParams, request } from "../utils";
import { CreateLabelOption } from "../models/create-label-option";
import { Label } from "../models/label";
import { ValidationError } from "../models/validation-error";

export interface issueCreateLabelParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateLabelOption;
}
/**
 * Create a label
 */
export default function issueCreateLabel({
  owner,
  repo,
  body,
  auth,
  options,
}: issueCreateLabelParams): Promise<Label> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/labels`,
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
