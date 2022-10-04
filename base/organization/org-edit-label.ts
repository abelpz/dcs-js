import { baseParams, request } from "../utils";
import { EditLabelOption } from "../models/edit-label-option";
import { Label } from "../models/label";
import { ValidationError } from "../models/validation-error";

export interface orgEditLabelParams extends baseParams {
  /** name of the organization */
  org: string;
  /** id of the label to edit */
  id: number;
  body: EditLabelOption;
}
/**
 * Update a label
 */
export default function orgEditLabel({
  org,
  id,
  body,
  auth,
  options,
}: orgEditLabelParams): Promise<Label> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels/${id}`,
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
