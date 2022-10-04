import { baseParams, request } from "../utils";
import { Team } from "../models/team";

export interface orgGetTeamParams extends baseParams {
  /** id of the team to get */
  id: number;
}
/**
 * Get a team
 */
export default function orgGetTeam({
  id,
  auth,
  options,
}: orgGetTeamParams): Promise<Team> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}`,
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
