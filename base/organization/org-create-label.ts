import { baseParams, request } from "../utils";
import { CreateLabelOption } from "../models/create-label-option";
import { Label } from "../models/label";
import { ValidationError } from "../models/validation-error";

export interface orgCreateLabelParams extends baseParams {
  /** name of the organization */
  org: string;
  body: CreateLabelOption;
}
/**
 * Create a label for an organization
 */
export default function orgCreateLabel({
  org,
  body,
  auth,
  options,
}: orgCreateLabelParams): Promise<Label> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels`,
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
