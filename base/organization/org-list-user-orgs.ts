import { baseParams, request } from "../utils";
import { OrganizationList } from "../models/organization-list";

export interface orgListUserOrgsParams extends baseParams {
  /** username of user */
  username: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a user&#39;s organizations
 */
export default function orgListUserOrgs({
  username,
  page,
  limit,
  auth,
  options,
}: orgListUserOrgsParams): Promise<OrganizationList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/orgs`,
    query: {
      page: page,
      limit: limit,
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
