import { baseParams, request } from "../utils";
import { CreateOrgOption } from "../models/create-org-option";
import { Organization } from "../models/organization";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface adminCreateOrgParams extends baseParams {
  /** username of the user that will own the created organization */
  username: string;
  body: CreateOrgOption;
}
/**
 * Create an organization
 */
export default function adminCreateOrg({
  username,
  body,
  auth,
  options,
}: adminCreateOrgParams): Promise<Organization> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users/${username}/orgs`,
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
