import { baseParams, request } from "../utils";
import { TeamList } from "../models/team-list";

export interface orgListTeamsParams extends baseParams {
  /** name of the organization */
  org: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List an organization&#39;s teams
 */
export default function orgListTeams({
  org,
  page,
  limit,
  auth,
  options,
}: orgListTeamsParams): Promise<TeamList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/teams`,
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
