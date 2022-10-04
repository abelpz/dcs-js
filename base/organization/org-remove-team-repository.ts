import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface orgRemoveTeamRepositoryParams extends baseParams {
  /** id of the team */
  id: number;
  /** organization that owns the repo to remove */
  org: string;
  /** name of the repo to remove */
  repo: string;
}
/**
 * Remove a repository from a team
 */
export default function orgRemoveTeamRepository({
  id,
  org,
  repo,
  auth,
  options,
}: orgRemoveTeamRepositoryParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/teams/${id}/repos/${org}/${repo}`,
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
