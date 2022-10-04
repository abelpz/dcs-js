import { baseParams, request } from "../utils";
import { TeamList } from "../models/team-list";

export interface userListTeamsParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List all the teams a user belongs to
 */
export default function userListTeams({
  page,
  limit,
  auth,
  options,
}: userListTeamsParams): Promise<TeamList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/teams`,
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
