import { baseParams, request } from "../utils";
import { TeamList } from "../models/team-list";

export interface repoListTeamsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * List a repository&#39;s teams
 */
export default function repoListTeams({
  owner,
  repo,
  auth,
  options,
}: repoListTeamsParams): Promise<TeamList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/teams`,
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
