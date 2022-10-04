import { baseParams, request } from "../utils";
import { OrganizationList } from "../models/organization-list";
import { Forbidden } from "../models/forbidden";

export interface adminGetAllOrgsParams extends baseParams {
  /** If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang&#39;s are ORed. */
  lang?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List all organizations
 */
export default function adminGetAllOrgs({
  lang,
  page,
  limit,
  auth,
  options,
}: adminGetAllOrgsParams): Promise<OrganizationList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/orgs`,
    query: {
      lang: lang,
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
