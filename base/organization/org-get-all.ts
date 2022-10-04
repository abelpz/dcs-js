import { baseParams, request } from "../utils";
import { OrganizationList } from "../models/organization-list";

export interface orgGetAllParams extends baseParams {
  /** If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang&#39;s are ORed. */
  lang?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get list of organizations
 */
export default function orgGetAll({
  lang,
  page,
  limit,
  auth,
  options,
}: orgGetAllParams): Promise<OrganizationList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs`,
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
