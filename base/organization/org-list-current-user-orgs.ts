import { baseParams, request } from "../utils";
import { OrganizationList } from "../models/organization-list";

export interface orgListCurrentUserOrgsParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the current user&#39;s organizations
 */
export default function orgListCurrentUserOrgs({
  page,
  limit,
  auth,
  options,
}: orgListCurrentUserOrgsParams): Promise<OrganizationList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/orgs`,
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
