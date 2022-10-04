import { baseParams, request } from "../utils";
import { OrganizationPermissions } from "../models/organization-permissions";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface orgGetUserPermissionsParams extends baseParams {
  /** username of user */
  username: string;
  /** name of the organization */
  org: string;
}
/**
 * Get user permissions in organization
 */
export default function orgGetUserPermissions({
  username,
  org,
  auth,
  options,
}: orgGetUserPermissionsParams): Promise<OrganizationPermissions> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/orgs/${org}/permissions`,
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
