import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Error } from "../models/error";
import { ValidationError } from "../models/validation-error";

export interface repoDeleteTeamParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** team name */
  team: string;
}
/**
 * Delete a team from a repository
 */
export default function repoDeleteTeam({
  owner,
  repo,
  team,
  auth,
  options,
}: repoDeleteTeamParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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
