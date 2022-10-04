import { baseParams, request } from "../utils";
import { RepositoryList } from "../models/repository-list";

export interface orgListTeamReposParams extends baseParams {
  /** id of the team */
  id: number;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a team&#39;s repos
 */
export default function orgListTeamRepos({
  id,
  page,
  limit,
  auth,
  options,
}: orgListTeamReposParams): Promise<RepositoryList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}/repos`,
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
