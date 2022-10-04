import { baseParams, request } from "../utils";
import { Team } from "../models/team";

export interface teamSearchParams extends baseParams {
  /** name of the organization */
  org: string;
  /** keywords to search */
  q?: string;
  /** include search within team description (defaults to true) */
  includeDesc?: boolean;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Search for teams within an organization
 */
export default function teamSearch({
  org,
  q,
  includeDesc,
  page,
  limit,
  auth,
  options,
}: teamSearchParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/teams/search`,
    query: {
      q: q,
      include_desc: includeDesc,
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
