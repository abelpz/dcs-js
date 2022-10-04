import { baseParams, request } from "../utils";
import { Team } from "../models/team";
import { NotFound } from "../models/not-found";
import { Error } from "../models/error";

export interface repoCheckTeamParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** team name */
  team: string;
}
/**
 * Check if a team is assigned to a repository
 */
export default function repoCheckTeam({
  owner,
  repo,
  team,
  auth,
  options,
}: repoCheckTeamParams): Promise<Team> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/teams/${team}`,
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
