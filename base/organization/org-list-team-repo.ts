import { baseParams, request } from "../utils";
import { Repository } from "../models/repository";
import { NotFound } from "../models/not-found";

export interface orgListTeamRepoParams extends baseParams {
  /** id of the team */
  id: number;
  /** organization that owns the repo to list */
  org: string;
  /** name of the repo to list */
  repo: string;
}
/**
 * List a particular repo of team
 */
export default function orgListTeamRepo({
  id,
  org,
  repo,
  auth,
  options,
}: orgListTeamRepoParams): Promise<Repository> {
  const requestParams = {
    method: "GET",
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
