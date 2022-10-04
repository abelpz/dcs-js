import { baseParams, request } from "../utils";
import { EditOrgOption } from "../models/edit-org-option";
import { Organization } from "../models/organization";

export interface orgEditParams extends baseParams {
  /** name of the organization to edit */
  org: string;
  body: EditOrgOption;
}
/**
 * Edit an organization
 */
export default function orgEdit({
  org,
  body,
  auth,
  options,
}: orgEditParams): Promise<Organization> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/orgs/${org}`,
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
