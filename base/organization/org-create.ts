import { baseParams, request } from "../utils";
import { CreateOrgOption } from "../models/create-org-option";
import { Organization } from "../models/organization";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface orgCreateParams extends baseParams {
  body: CreateOrgOption;
}
/**
 * Create an organization
 */
export default function orgCreate({
  body,
  auth,
  options,
}: orgCreateParams): Promise<Organization> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs`,
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
