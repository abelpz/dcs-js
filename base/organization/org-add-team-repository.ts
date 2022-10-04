import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface orgAddTeamRepositoryParams extends baseParams {
  /** id of the team */
  id: number;
  /** organization that owns the repo to add */
  org: string;
  /** name of the repo to add */
  repo: string;
}
/**
 * Add a repository to a team
 */
export default function orgAddTeamRepository({
  id,
  org,
  repo,
  auth,
  options,
}: orgAddTeamRepositoryParams): Promise<Empty> {
  const requestParams = {
    method: "PUT",
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
